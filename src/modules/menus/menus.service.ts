import {Injectable} from "@nestjs/common";
import {CreateMenuDto} from "@/modules/menus/dto/create-menu.dto";
import {UpdateMenuDto} from "@/modules/menus/dto/update-menu.dto";


@Injectable()
export class MenusService {
    create( createMenuDto: CreateMenuDto){
        return 'this action will create a new menus';
    }

    findAll(){
        return 'this action will find all menus';
    }

    findOne(id: string){
        return 'this action will find a new menus';
    }

    update(id: string, updateMenuDto: UpdateMenuDto){
        return 'this action will update a new menus';
    }

    remove(id: string){
        return 'this action will remove a new menus';
    }
}