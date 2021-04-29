// eslint-disable-next-line
function solve(lines) {
  for (let i = 1; i <= lines[0]; i++) {
    printStar(i)
  }
}
function printStar(n) {
  let s = ''
  for (let i = 1; i <= n; i++) {
    s += '*'
  }
  console.log(s)
}
