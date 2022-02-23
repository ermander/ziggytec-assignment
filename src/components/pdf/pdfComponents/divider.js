export default function compileDivider(length) {
  let text = ''
  for (let i = 0; i < length; i++) {
    text += '_'
  }
  const divider = {
    text,
    fontSize: 13,
    margin: [10, 23, 10, 15],
    bold: true,
    alignment: 'center'
  }

  return divider
}
