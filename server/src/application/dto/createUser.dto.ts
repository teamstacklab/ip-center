import { NotEquals } from "class-validator";

export class CreateUserDto {
    @NotEquals(null) name: string;
    @NotEquals(null) username: string;
    @NotEquals(null) password: string;
    @NotEquals(null) email: string;
    @NotEquals(null) isAdmin: boolean;
}