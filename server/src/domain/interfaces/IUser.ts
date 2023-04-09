export default interface IUser {

  id: number;
  name: string;
  username: string;
  password: string;
  isAdmin: boolean; // <-- Set user permissions
  
}