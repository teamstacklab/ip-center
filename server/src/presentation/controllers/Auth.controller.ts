import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { SignInDto } from "application/dto/signIn.dto";
import { AuthUseCases } from "application/usecases/Auth.usecases";

@Controller('auth')
export class AuthControler {
    constructor(private authUseCases: AuthUseCases) {}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    signIn(@Body() account: SignInDto) : any {
        return this.authUseCases.signIn(account.username, account.password)
    }
}