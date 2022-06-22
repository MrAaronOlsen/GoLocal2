const NAME = 'debug_is_present'

export default {
  name: NAME,
  send: (present) => {
    return {
      name: NAME,
      is_present: present,
    }
  },
  receive: (request) => request.name === NAME,
  test: (request) => request.is_present,
}
