<<<<<<< HEAD
export interface IDemand  {
    id: number;
    cpf: string;
    whatsapp: string;
    name: string;
    loja: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
=======
import { CreateDemandDto } from "domain/dto/Demand.dto";
import { Demand } from "domain/entities/Demand.entity";
import { IUser } from "./IUser";


export interface IDemand extends IUser {
  cpf: string;
  store: string;
  createdAt: Date;
}

export interface IDemandService {
  getAll(): Promise<Demand[]>;
  create(demandDto: CreateDemandDto): Promise<Demand>;
  getOneById(id: number): Promise<Demand>;
  authorizate(id: number): Promise<Object>;
  reject(id: number): Promise<Object>;
>>>>>>> server
}