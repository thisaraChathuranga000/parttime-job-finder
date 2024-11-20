import { forwardRef, Inject, Injectable, NotAcceptableException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
const bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from 'src/dto/auth/signIn.dto';
import { AuthDto, UserDetails } from 'src/dto/auth/auth.dto';
// import { User } from 'src/schemas/User.schema';

export interface UserData{
    user:User;
    access_token:string;
}

export interface User{
    _id?:string;
    password?:string;
    email:string;
}

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}

    async getHashedPassword(password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err:any, hash:any) => {
                if (err) {reject(err)}
                resolve(hash);
            })
        })
    }

    async validateUser(email: string, pass: string): Promise<UserData> {
        const query = { email: email };
        const user:User = await this.usersService.findOne(query);
        if (!user) throw new NotFoundException('Email Does not exist');
        const isMatched = await this.comparePasswords(pass, user.password);
        if (!isMatched) throw new UnauthorizedException('Invalid Password');
        const payload = { sub: user };
        return {
            user:{
                _id:user._id,
                email:user.email,
            },
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    //compare password
    async comparePasswords(password: string,hashedPassword: string): Promise<any> {
        return bcrypt
        .compare(password, hashedPassword)
        .then((isMatch: any) => {
            if (isMatch) return true;
            return false;
        })
        .catch((err: any) => err);
    }

    // async generateJwtToken(user: any) {
    //     const payload = {
    //     email: user.email
    //     };
    //     return {
    //     access_token: this.jwtService.sign(payload),
    //     };
    // }

}

// @Injectable()
// export class AuthService {
//     constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
//     async validateUser(email: string, password: string): Promise<any> {
//         const user = await this.usersService.getUser({ email });
//         if (!user) return null;
//         const passwordValid = await bcrypt.compare(password, user.password)
//         if (!user) {
//             throw new NotAcceptableException('could not find the user');
//         }
//         if (user && passwordValid) {
//             return user;
//         }
//         return null;
//     }
//     async login(user: any) {
//         const payload = { username: user.username, sub: user._id };
//         return {
//             access_token: this.jwtService.sign(payload),
//         };
//     }
// }


 
// export class AuthService {
//     constructor(
//         @Inject(forwardRef(() => UsersService))
//         private usersService: UsersService,
//         private jwtService: JwtService
//     ) {}

//     async signIn(email: string, password: string): Promise<UserData> {
//         const query = {  email: email};
//         const user = await this.usersService.findByEmail(query);

//         if(!user) throw new NotFoundException('Email Does not exists');
//         if (user.password !== password) {
//             throw new UnauthorizedException('Incorrect Password or email');
//         }
//         const payload = { sub: user };
//         return {
//             user:{
//                 _id:user._id,
//                 email:user.email,
//             },
//             access_token: await this.jwtService.signAsync(payload),
//         };
//     }

//     // async getHashedPassword(password: string): Promise<any> {
//     //     return new Promise((resolve, reject) => {
//     //         bcrypt.hash(password, 10, (err:any, hash:any) => {
//     //             if (err) {reject(err)}
//     //             resolve(hash);
//     //         })
//     //     })
//     // }

//     // async comparePasswords(password: string,hashedPassword: string): Promise<any> {
//     //     return bcrypt
//     //     .compare(password, hashedPassword)
//     //     .then((isMatch: any) => {
//     //         if (isMatch) return true;
//     //         return false;
//     //     })
//     //     .catch((err: any) => err);
//     // }
// }