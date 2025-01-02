import {MenuItemOptionsController} from "@/modules/menu.item.options/menu.item.options.controller";
import {MenuItemOptionsService} from "@/modules/menu.item.options/menu.item.options.service";
import {Module} from "@nestjs/common";

@Module({
    controllers: [MenuItemOptionsController],
    providers: [MenuItemOptionsService],
})
export class MenuItemOptionsModule{}