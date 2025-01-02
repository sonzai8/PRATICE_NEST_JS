import {Injectable} from "@nestjs/common";
import {CreateMenuItemsDto} from "@/modules/menu.items/dto/create-menu.items";
import {UpdateMenuItemsDto} from "@/modules/menu.items/dto/update-menu.items";


@Injectable()
export class MenuItemsService {
    create(createMenuItemDto: CreateMenuItemsDto){
        return 'this action will create an menu item';
    }

    findAll(){
        return 'this action will find all menu items';
    }

    findOne(id: string){
        return 'this action will find a menu item';
    }

    update(id: string, updateMenuItemDto: UpdateMenuItemsDto){
        return `This action will update an menu item`;
    }

    remove(id: string){
        return 'this action will remove an menu item';
    }
}