import * as module from "node:module";
import {RestaurantsController} from "@/modules/restaurants/restaurants.controller";
import {RestaurantsService} from "@/modules/restaurants/restaurants.service";
import {Module} from "@nestjs/common";

@Module({
    controllers: [RestaurantsController],
    providers: [RestaurantsService],

})
export class RestaurantsModule {}