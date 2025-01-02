import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {LikesService} from "@/modules/likes/likes.service";
import {CreateLikeDto} from "@/modules/likes/dto/create-like.dto";
import {UpdateLikeDto} from "@/modules/likes/dto/update-like.dto";

@Controller('like')
export class LikesController {
    constructor(private readonly likesService: LikesService) {}

    @Post()
    create(@Body() createLikeDto: CreateLikeDto) {
        return this.likesService.create(createLikeDto);
    }

    @Get()
    findAll() {
        return this.likesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.likesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLikeDto: UpdateLikeDto) {
        return this.likesService.update(+id, updateLikeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.likesService.remove(+id);
    }
}