function save_form() {
  var name = document.getElementById('name').value
  var url = document.getElementById('url').value
  var port = document.getElementById('port').value

  if (!validate_save(name, url, port)) {
    return
  }

  get_config(function (result) {
    let config = {
      url: url,
      port: port,
      checked: 'unchecked',
    }

    result[name] = config
    save_to_storage(result, function () {
      show_all()
      add_message(`Saved config ${name} | Url: ${url}, Port: ${port}`)
    })
  })
}

function validate_save(name, url, port) {
  if (name === '' || url === '' || port === '') {
    add_message(
      'WRONG!!! All fields must be completed. What were you thinking?',
      true,
    )
    return false
  } else {
    return true
  }
}

// Saves which config is set
function save_config(id) {
  get_config(
    function (result) {
      for (const config of Object.entries(result)) {
        if (config[0] == id) {
          if (config[1].checked == 'checked') {
            config[1].checked = 'unchecked'
            add_message(`De-selected config ${id}.`)
          } else {
            config[1].checked = 'checked'
            add_message(`Config ${id} is now set to default.`)
          }
        } else {
          config[1].checked = 'unchecked'
        }
      }

      save_to_storage(result, function () {
        show_all()
      })
    }.bind({ id: id }),
  )
}

// Resets config in Storage
function save_to_storage(result, callback) {
  chrome.storage.sync.set({ config: result }, function () {
    callback()
  })
}

function get_config(callback) {
  chrome.storage.sync.get('config', function (result) {
    if (result == null || result.config == null) {
      callback({ config: {} })
    } else {
      callback(result.config)
    }
  })
}

function get_config_by_id(id, callback) {
  get_config(function (result) {
    var config = result[id]

    if (config != null) {
      callback(config)
    }
  })
}

function set_fields(id) {
  get_config_by_id(
    id,
    function (result) {
      document.getElementById('name').value = id
      document.getElementById('url').value = result.url
      document.getElementById('port').value = result.port

      add_message(`Editing config ${id}.`)
    }.bind({ id: id }),
  )
}

function show_all() {
  var show_all = document.getElementById('all')

  if (show_all == null) {
    return
  }

  while (show_all.firstChild) {
    show_all.removeChild(show_all.firstChild)
  }

  get_config(function (result) {
    var use_default = true
    var configs = Object.entries(result)

    if (configs.length == 0) {
      add_message('No configs added. Using default of http://localhost:8084.')
      return
    }

    for (const config of configs) {
      let name = config[0]
      let url = config[1].url
      let port = config[1].port
      let checked = config[1].checked

      if (checked == 'checked') {
        use_default = false
      }

      show_all.appendChild(config_row(name, port, url, checked))
    }

    if (use_default) {
      add_message(
        'No configs selected. Using default of http://localhost:8084.',
      )
    }
  })
}

function delete_config(id) {
  get_config(
    function (result) {
      let config = result[this.id]

      if (config != null) {
        delete result[this.id]
      }

      save_to_storage(
        result,
        function () {
          add_message(`Deleted config ${this.id}.`)
          show_all()
        }.bind({ id: this.id }),
      )
    }.bind({ id: id }),
  )
}

function clear_options() {
  chrome.storage.sync.clear()
  show_all()
}

function add_message(message, warning = false) {
  var messages = document.getElementById('messages')

  var message_node = document.createElement('div')
  message_node.classList.add('message')

  if (warning) {
    message_node.classList.add('warning')
  }

  message_node.innerHTML = message

  messages.prepend(message_node)
}

// HTML Builders

function config_row(name, port, url, checked) {
  let div = document.createElement('div')
  div.id = name
  div.classList.add('config_row')
  div.innerHTML = `${select_check(checked)} ${address(
    name,
    url,
    port,
  )} ${delete_button()}`

  return div
}

function address(name, url, port) {
  return `<div class='name'>${name}</div><div class='address'>Url: ${url}, Port: ${port}</div>`
}

function select_check(checked) {
  return `<input type='checkbox' class='select_check' name='selected'' ${checked}>`
}

function delete_button() {
  return "<button class='std_button' id='delete'>X</button>"
}

window.onload = show_all()
window.onload = function () {
  add_message('Ready to Rock!')
}

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'delete') {
    let id = e.target.parentElement.id

    delete_config(id)
  }
})

document.addEventListener('change', function (e) {
  if (e.target && e.target.name == 'selected') {
    let id = e.target.parentElement.id

    save_config(id)
  }
})

document.addEventListener('click', function (e) {
  if (
    (e.target && e.target.classList.contains('address')) ||
    e.target.classList.contains('name')
  ) {
    let id = e.target.parentElement.id
    set_fields(id)
  }
})

document.getElementById('save_form').addEventListener('click', save_form)
