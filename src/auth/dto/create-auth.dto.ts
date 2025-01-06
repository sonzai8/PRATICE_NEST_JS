import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {

    @IsNotEmpty({message: "email khong duoc de trong"})
    email: string

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    password: string
}
