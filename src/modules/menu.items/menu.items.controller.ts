import {Body, Controller, Post} from "@nestjs/common";
import {MenuItemsService} from "@/modules/menu.items/menu.items.service";
import {CreateMenuItemsDto} from "@/modules/menu.items/dto/create-menu.items";
import {UpdateMenuItemsDto} from "@/modules/menu.items/dto/update-menu.items";

@Controller('menu-items')
export class MenuItemsController {
    constructor(private readonly menuItemsService: MenuItemsService){}

    @Post()
    create(@Body() createMenuItemsDto: CreateMenuItemsDto){
        return this.menuItemsService.create(createMenuItemsDto);
    }

    findAll(){
        return this.menuItemsService.findAll();
    }

    findOne(id: string){
        return this.menuItemsService.findOne(id);
    }

    update(id: string, updateMenuItemsDto: UpdateMenuItemsDto){
        return this.menuItemsService.update(id, updateMenuItemsDto);
    }

    remove(id: string){
        return this.menuItemsService.remove(id);
    }

}
