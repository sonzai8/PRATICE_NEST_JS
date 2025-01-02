import {PartialType} from "@nestjs/mapped-types";
import {MenuItemOption} from "@/modules/menu.item.options/schemas/menu.item.option.schema";

export class UpdateMenuItemOptionsDto extends PartialType(MenuItemOption){

}