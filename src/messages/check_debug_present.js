const NAME = 'check_debug_present'

export default {
  name: NAME,
  send: () => {
    return {
      name: NAME,
    }
  },
  receive: (request) => request.name === NAME,
}
