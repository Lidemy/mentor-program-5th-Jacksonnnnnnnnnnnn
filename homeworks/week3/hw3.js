// eslint-disable-next-line
function solve(lines) {
  const N = Number(lines[0])
  const arr = []
  for (let i = 1; i <= N; i++) {
    arr.push(lines[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      console.log('Composite')
    } else {
      console.log('Prime')
    }
  }
}
function isPrime(num) {
  if (num === 1) {
    return false
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
