import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User} from "@/modules/users/schemas/user.schema";
import {Model} from "mongoose";
import {UpdateUserDto} from "@/modules/users/dto/update-user.dto";
import {CreateUserDto} from "@/modules/users/dto/create-user.dto";
import {hashPasswordHelper} from "@/helpers/util";
import aqp from 'api-query-params';
import {request} from "express";

@Injectable()
export class UsersService {
   constructor(@InjectModel(User.name) private userModel: Model<User>) {}

   isEmailExist = async (email: string) => {
     const isExist = await this.userModel.exists({email});
     if(isExist) {
       return true;
     }
     return false;
   }
  async create(createUserDto: CreateUserDto) {
     const { name, email, password } = createUserDto;
     const isExist = await this.isEmailExist(email);
     if (isExist) {
        throw new BadRequestException(`Email already exists: ${email}`);
     }
     const hashPassword = await hashPasswordHelper(password);
      const user = await this.userModel.create({
        name, email, password: hashPassword
      })
      return {
       _id: user._id
      }
  }

  async findAll(query: string, current: number , pageSize: number) {
       const { filter, limit, sort } = aqp(query);
    if (!current) {current = 1}
    if (!pageSize) {pageSize = 10}

    if (filter.current) delete filter.current;
    if (filter.pageSize) delete filter.pageSize;

    const totalItem = (await this.userModel.find(filter)).length;
    const totalPage = Math.ceil(totalItem/pageSize);
    const skip = pageSize * (current - 1);
    const results = await this.userModel
        .find(filter)
        .limit(pageSize)
        .skip(skip)
        .sort(sort as any)
        .select("-password")
    return {totalPage, results}
  }

  findOne(id: number) {
    const user = this.userModel.findOne({_id: id})
    if(!user) return null;

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
