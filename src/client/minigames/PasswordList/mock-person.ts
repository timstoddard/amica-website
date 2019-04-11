type PersonFields = 'name' | 'birthday' | 'address' | 'password'
type PersonFieldsDB = { [K in PersonFields]: string[] }
export type Person = { [K in PersonFields]: string }

export const random: PersonFieldsDB = {
  name: [
    'John Doe',
    'Bo Jackson',
    'Anna Scout',
  ],
  birthday: [
    '01/03/2001',
    '05/22/2000',
    '11/13/2002',
  ],
  address: [
    '22 Cherry Lane',
    '217 Main Street',
    '903 Cool Drive',
  ],
  password: [
    'bee123',
    'q2r$1ww9rHA2',
    'commun1sm',
    'fluxx.xx',
    'calpoly',
    '!@#$%^&*()',
    '1qaz2wsx',
    '1337code',
    'yaaaassssssss',
    'hollyw00d',
  ],
}

export const pickRandom = (field: keyof PersonFieldsDB) => {
  const list = random[field]
  const index = Math.floor(Math.random() * list.length)
  return list[index]
}
