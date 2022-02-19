export const setLineNumber = () => {
  const lines = document.querySelectorAll('.line-number')
  lines.forEach((line, i) => {
    if (i === lines.length - 1) {
      line.setAttribute('value', '🐈')
    } else {
      line.setAttribute('value', i + 1)
    }
  })
}
