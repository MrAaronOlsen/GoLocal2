setTimeout(function () {
  let present = window.hasOwnProperty('nwtServerDebugRef')

  console.log(`Check debug present script loaded`)
  console.log(`Script sending message debug_is_present ${present}`)

  window.postMessage(
    {
      name: 'debug_is_present',
      is_present: present,
    },
    '*',
  )
}, 500)
