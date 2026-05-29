export default class Color {
  static GREEN = new Color('#7ac341')
  static BLUE = new Color('#05a9ce')

  #color

  constructor(color) {
    this.#color = color
  }

  getColor() {
    return this.#color
  }
}