export default class Color {
  static GREEN = new Color('#7ac341')
  static BLUE = new Color('#05a9ce')
  static RED = new Color('#ef5a2d')

  static WHITE = new Color('#ffffff')

  #color

  constructor(color) {
    this.#color = color
  }

  getColor() {
    return this.#color
  }
}