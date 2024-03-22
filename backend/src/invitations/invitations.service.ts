import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitation } from 'src/schemas/Invitation.schema';
import { CreateInvitationDto } from './dto/createInvitation.dto';
import { UpdateInvitationDto } from './dto/UpdateInvitation.dto';

@Injectable()
export class InvitationsService {
    
    constructor(
        @InjectModel(Invitation.name) 
        private readonly invitationModel: Model<Invitation>
    ) {}

    async createInvitaion(createInvitaionDto: CreateInvitationDto[]) {
        const newInvitaion = new this.invitationModel(createInvitaionDto);
        return newInvitaion.save();
    }

    async findAllInvitaionsBySenderUserId(id:string) {
        try{
            const invitation = await this.invitationModel.find({ senderUserId: id}).exec();
            return invitation;
        } catch (error) {
            throw new Error('Failt to retriew Invitations');
        }
    }

    async findAllInvitaionsByReciverUserId(id:string) {
        try{
            const invitation = await this.invitationModel.find({ reciverUserId: id}).exec();
            return invitation;
        } catch (error) {
            throw new Error('Failed to retriew Invitations');
        }
    }

    async findOneInvitation(id:string){
        const invitation = await this.invitationModel.findById(id).exec();
        if(!invitation){
            throw new NotFoundException("Invitation Not found");
        }
        return invitation;
    }

    async updateInvitation(id: string, updateInvitationtDto: UpdateInvitationDto) {
        const post = await this.invitationModel.findById(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        return this.invitationModel.findByIdAndUpdate(id, updateInvitationtDto, { new: true });
    }

    async deleteInvitation(id: string){
        try{
            const deletedUser = await this.invitationModel.findByIdAndDelete(id);
            if(!deletedUser){
                throw new Error("Invitation Not found")
            }
            return deletedUser;
        } catch (error){
            throw new Error("Unable to delete Invitation")
        }
    }
}
