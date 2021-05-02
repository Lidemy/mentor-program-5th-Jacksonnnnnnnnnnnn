// eslint-disable-next-line
function solve(lines) {
  const M = lines[0]
  for (let i = 1; i <= M; i++) {
    const [A, B, K] = lines[i].split(' ')
    if (K === 1) {
      if (BigInt(A) === BigInt(B)) {
        console.log('DRAW')
      } else {
        if (BigInt(A) > BigInt(B)) {
          console.log('A')
        } else {
          console.log('B')
        }
      }
    } else {
      if (BigInt(A) === BigInt(B)) {
        console.log('DRAW')
      } else {
        if (BigInt(A) < BigInt(B)) {
          console.log('A')
        } else {
          console.log('B')
        }
      }
    }
  }
}
