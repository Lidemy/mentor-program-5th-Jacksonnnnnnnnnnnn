// eslint-disable-next-line
function solve(lines) {
  const temp = lines[0]
  let temp2 = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    temp2 += temp[i]
  }
  if (temp2 === temp) {
    console.log('True')
  } else {
    console.log('False')
  }
}
