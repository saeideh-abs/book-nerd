export {}

declare global {
  interface String {
    toTitleCase(): string
  }
}

// Note: a better way was to create a utility function
// but because this project is for practicing I used this way
if (!String.prototype.toTitleCase) {
  String.prototype.toTitleCase = function () {
    if (!this.length) return ''

    return this.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}
