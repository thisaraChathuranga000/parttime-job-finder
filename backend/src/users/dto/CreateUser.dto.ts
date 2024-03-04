import { Type } from 'class-transformer';
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    ValidateNested,
  } from 'class-validator';
  
export class CreateUserTypeDto {
    @IsBoolean()
    isStudent: boolean;

    @IsBoolean()
    isOrg: boolean;
}

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    imgUrl: string;

    @ValidateNested()
    @Type(() => CreateUserTypeDto)
    type: CreateUserTypeDto;
}