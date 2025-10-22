export enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export interface ILogedInUser {
  email: string,
  id: string,
  image: string,
  name: string
}
