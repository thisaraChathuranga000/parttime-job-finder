import { Type } from 'class-transformer';
import {
    IsBoolean,
    IsNotEmpty,
    IsString,
    ValidateNested,
  } from 'class-validator';
import { Express } from 'express';
  
export class CreateUserTypeDto {
    @IsBoolean()
    isStudent: boolean;

    @IsBoolean()
    isOrg: boolean;
}

export class CreateUserDto {
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    contact: string;

    @IsNotEmpty()
    address: string;

    imgUrl: string; 

    uni_name: string;
    res_address: string;
    gender: string;
    birthday: string;
    age: number;

    @ValidateNested()
    @Type(() => CreateUserTypeDto)
    type: CreateUserTypeDto;

}