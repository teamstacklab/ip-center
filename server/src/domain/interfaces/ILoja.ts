import { Category } from "domain/models/Category.entity";
import { User } from "domain/models/User.entity";

export interface ILoja {
  // Meta
  id: number;
  owner: User;
  
  // Info da página
  name: string;
  slogan: string;
  images: string[];
  description: string;

  // -- Sobre
  instagram: string;
  whatsapp: string;
  location: string;
  services: string;
  category: Category;
  additionalInfo: string;

  // Auto()
  updatedAt: Date;
  createdAt: Date;
}