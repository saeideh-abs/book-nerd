export {}

declare global {
  interface String {
    toTitleCase(): string
  }
}

String.prototype.toTitleCase = function () {
  if (!this.length) return ''

  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
