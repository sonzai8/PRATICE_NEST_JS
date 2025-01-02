import {Module} from "@nestjs/common";
import {LikesController} from "@/modules/likes/likes.controller";
import {LikesService} from "@/modules/likes/likes.service";

@Module({
    controllers: [LikesController],
    providers: [LikesService],
})

export class LikesModule {}