export enum Gender{
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export enum UserRole{
    SUPERADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    BLOCKED = 'BLOCKED',
    DELETED = 'DELETED',
    RESTRICTRED = 'RESTRICTED'
}


export interface ILogedInUser {
  email: string,
  id: string,
  image: string,
  name: string
}

export interface IConversation {
  _id: string,
  members: string[],
  updatedAt: string,
  createdAt: string
}

export interface IUser {
  _id: string,
  fullName: string,
  email: string,
  profilePhoto: string,
  status: UserStatus,
  role: UserRole,
  createdAt: string,
  updatedAt: string
}