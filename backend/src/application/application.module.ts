import { Module } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApplicationController } from './application.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Application, ApplicationSchema } from 'src/schemas/Application.schema';
import { User, UserSchema } from 'src/schemas/User.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Application.name,
      schema: ApplicationSchema,
    },
    {
      name: User.name,
      schema: UserSchema,
    }
  ])],
  providers: [ApplicationService],
  controllers: [ApplicationController]
})
export class ApplicationModule {}
