import {Injectable} from "@nestjs/common";
import {CreateMenuDto} from "@/modules/menus/dto/create-menu.dto";
import {UpdateLikeDto} from "@/modules/likes/dto/update-like.dto";

@Injectable()
export class LikesService {

    create(createLikeDto: CreateMenuDto){
        return ' this action add  new like.';
    }

    findAll() {
        return `This action returns all likes`;
    }

    findOne(id: number) {
        return `This action returns a #${id} like`;
    }

    update(id: number, updateLikeDto: UpdateLikeDto) {
        return `This action updates a #${id} like`;
    }

    remove(id: number) {
        return `This action removes a #${id} like`;
    }
}