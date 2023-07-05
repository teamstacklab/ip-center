export interface IUser {

  id: number;
  name: string;
  username: string;
  password: string;
  whatsapp: string;
  email: string;
  isAdmin: boolean; // <-- Verifica as permissões
  createdAt: Date;
  updatedAt: Date;
  
}