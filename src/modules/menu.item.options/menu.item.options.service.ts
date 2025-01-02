import {Injectable} from "@nestjs/common";
import {CreateMenuItemOptionsDto} from "@/modules/menu.item.options/dto/create-menu.item.options.dto";
import {UpdateMenuItemOptionsDto} from "@/modules/menu.item.options/dto/update-menu.item.options.dto";

@Injectable()
export class MenuItemOptionsService{
    create(createMenuItemOptions: CreateMenuItemOptionsDto){
        return 'this action will add new menu item option'
    }

    findAll(){
        return 'this action will find all menu items'
    }

    findOne(id: string){
        return `This action will find ${id} menu item options with id ${id}`
    }

    update(updateMenuItemOptionsDto: UpdateMenuItemOptionsDto){
        return 'this action will update menu item with id ${updateMenuItemOptionsDto.id}'
    }

    remove(id: string){
        return `This action will remove ${id} menu item with id ${id}`
    }
}