import { IDemand } from 'domain/interfaces/IDemand';
export declare class Demand implements IDemand {
    id: number;
    cpf: string;
    store: string;
    name: string;
    whatsapp: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    createdAt: Date;
}
