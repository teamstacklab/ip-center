export interface IUser {

  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  isAdmin: boolean; // <-- Set user permissions
  createdAt: Date;
  updatedAt: Date;
  
}