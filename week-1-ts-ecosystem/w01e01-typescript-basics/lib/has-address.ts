import { User } from '../types/user.model'

export function hasAddress(user: User) {
  return Boolean(user.address)
}
