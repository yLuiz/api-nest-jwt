import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const users: { id: number, username: string, password: string, role: string }[] = [
    {
        id: 1,
        username: "yluiz@user.com",
        password: "$2b$10$oVyFL1iH0MteBR5kOs3Ukez5/h0MK6bB1HW6lCZAVU1w77SNewIHq",
        role: "manager"
    },
    {
        id: 2,
        username: "luan@user.com",
        password: "$2b$10$oVyFL1iH0MteBR5kOs3Ukez5/h0MK6bB1HW6lCZAVU1w77SNewIHq",
        role: "admin"
    },
    {
        id: 3,
        username: "victor@user.com",
        password: "$2b$10$oVyFL1iH0MteBR5kOs3Ukez5/h0MK6bB1HW6lCZAVU1w77SNewIHq",
        role: "developer"
    }
]

@Injectable()        
export class AuthService {

    constructor(private jwtService: JwtService) {}

    login(username: string, password: string) {
        const user = this.valideCredentials(username, password)

        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role
        }

        return this.jwtService.sign(payload)
    }

    valideCredentials(username: string, password: string) {
        const user = users.find(user => user.username === username  && bcrypt.compareSync(password, user.password))
        
        if(!user) {
            throw new Error('User not found!')
        }
        
        return user;
        
    }

}
