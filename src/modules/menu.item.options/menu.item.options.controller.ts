import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {MenuItemOptionsService} from "@/modules/menu.item.options/menu.item.options.service";
import {CreateMenuItemOptionsDto} from "@/modules/menu.item.options/dto/create-menu.item.options.dto";
import {UpdateMenuItemOptionsDto} from "@/modules/menu.item.options/dto/update-menu.item.options.dto";

@Controller('menu-item-options')
export class MenuItemOptionsController{
    constructor(private readonly menuItemOptionsService: MenuItemOptionsService) {
    }
    @Post()
    create(@Body() createMenuItemOptions: CreateMenuItemOptionsDto){
        return this.menuItemOptionsService.create(createMenuItemOptions);
    }

    @Get(':id')
    findOne(@Param(':id') id: string){
        return this.menuItemOptionsService.findOne(id);
    }

    @Get()
    findAll(){
        return this.menuItemOptionsService.findAll();
    }
    @Patch(':id')
    update(@Body() updateMenuItemOptionsDto: UpdateMenuItemOptionsDto){
        return this.menuItemOptionsService.update(updateMenuItemOptionsDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.menuItemOptionsService.remove(id)
    }
}