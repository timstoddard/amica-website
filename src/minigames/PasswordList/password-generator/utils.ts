export const randomInt = (n: number) => Math.floor(Math.random() * n)

export const randomInRange = (min: number, max: number) => min + randomInt(max - min + 1)

export const insertChar = (s: string, char: string) => {
  const index = randomInt(s.length)
  return s.substring(0, index) + char + s.substring(index, s.length)
}
