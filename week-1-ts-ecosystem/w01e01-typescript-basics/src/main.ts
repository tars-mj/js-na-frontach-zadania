import { hasAddress } from '../lib/has-address';
import { hasGivenAge } from '../lib/has-given-age';
import { User } from '../types/user.model'

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
}

const isAdult = hasGivenAge(18)

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)
