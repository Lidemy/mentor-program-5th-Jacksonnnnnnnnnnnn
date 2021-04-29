// eslint-disable-next-line
function solve(lines) {
  const line = lines[0]
  const t = line.split(' ')
  const N = Number(t[0])
  const M = Number(t[1])
  for (let i = N; i <= M; i++) {
    if (Narcissistic(i) === true) {
      console.log(i)
    }
  }
}
function Narcissistic(a) {
  if (a >= 0 && a < 10) {
    return true
  } else if (a > 9) {
    let count = 0
    const len = a.toString().length
    const eachNum = a.toString()
    for (let i = 0; i < len; i++) {
      const f = Number(eachNum.charAt(i))
      const t = Math.pow(f, len)
      count += t
    }
    return count === a
  } else {
    return false
  }
}
