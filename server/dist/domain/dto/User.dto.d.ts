export declare class CreateUserDto {
    name: string;
    username: string;
    password: string;
    whatsapp: string;
    email: string;
    isAdmin: boolean;
}
export declare class UpdateUserDto {
    name?: string;
    username?: string;
    password?: string;
    email?: string;
    isAdmin?: boolean;
    whatsapp?: string;
    refreshToken?: string;
}
