
import {Module} from "@nestjs/common";
import {MenusController} from "@/modules/menus/menus.controller";
import {MenusService} from "@/modules/menus/menus.service";

@Module({
    controllers: [MenusController],
    providers: [MenusService]
})

export class MenusModule{}