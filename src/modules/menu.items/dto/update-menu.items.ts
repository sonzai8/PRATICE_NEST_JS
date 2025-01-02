import {PartialType} from "@nestjs/mapped-types";
import {CreateMenuItemsDto} from "@/modules/menu.items/dto/create-menu.items";

export class UpdateMenuItemsDto extends PartialType(CreateMenuItemsDto){

}