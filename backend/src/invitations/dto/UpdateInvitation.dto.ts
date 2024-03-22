import { PartialType } from '@nestjs/mapped-types';
import { CreateInvitationDto } from './createInvitation.dto';

export class UpdateInvitationDto extends PartialType(CreateInvitationDto) {}