const total = (a) => {
  let re = 0
  for (let i = 0; i < a; i++) {
    re += i
  }
  return re
}

const tax = (a) => {
  return Math.floor(a * 1.1)
}

export { total, tax }