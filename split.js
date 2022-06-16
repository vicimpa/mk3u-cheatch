const nums = [
  31599, 18724, 29671,
  31143, 18925, 31183,
  31695, 18727, 31727,
  31215
]

function indicator(input = 0, pre = '') {
  const rows = pre.split('\n'), hp = (input >> 16 & 1)

  for (let i = 0; i < 5; i++) {
    rows[i] ?? (rows[i] = '')
    rows[i] += hp ? '  ' + (i == 4 ? '#' : ' ') + ' ' : '  '
  }

  for (let i = 0; i < 15; i++) {
    rows[i / 3 | 0] += input >> i & 1 ? '#' : ' '
  }

  pre = rows.join('\n')

  return pre
}

function showNumber(n = 0) {
  const [a, b] = `${n}`.split('.')

  let out = '';

  for (const c of a) {
    out = indicator(nums[+c], out)
  }

  let np = true

  for (const c of b) {
    out = indicator(nums[+c] | (np ? 1 << 16 : 0), out)
    np = false
  }

  console.log(out)
}

showNumber(156.94123)