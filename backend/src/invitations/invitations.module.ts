import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Invitation, InvitaionSchema } from 'src/schemas/Invitation.schema';

@Module({
  imports:[MongooseModule.forFeature([
      {
        name: Invitation.name,
        schema: InvitaionSchema,
      }
  ])],
  providers: [InvitationsService],
  controllers: [InvitationsController]
})
export class InvitationsModule {}
