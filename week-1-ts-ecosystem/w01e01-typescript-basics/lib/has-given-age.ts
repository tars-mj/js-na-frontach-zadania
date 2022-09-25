import { User } from '../types/user.model';

export function hasGivenAge(requiredAge: number) {
  return (user: User) => user.age >= requiredAge
}
