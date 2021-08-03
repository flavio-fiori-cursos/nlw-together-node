import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UserRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticationRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticationRequest) {

        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({ email });

        if(!user) {

            throw new Error('E-mail/password incorrent');

        }

        const passwordMAtch = await compare(password, user.password);

        if(!passwordMAtch) {

            throw new Error('E-mail/password incorrent');

        }

        const token = sign(
            { email: user.email },
            "ce9f68c304c31c8f109c7dc00871936b", // flavionwlValoriza
            {
                subject: user.id,
                expiresIn: "1d" // 1 day
            }
        );

        return token;

    }

};

export { AuthenticateUserService };