import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {OrdersService} from "@/modules/orders/orders.service";
import {CreateOrderDto} from "@/modules/orders/dto/create-order.dto";
import {UpdateOrderDto} from "@/modules/orders/dto/update-order.dot";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    create(@Body() createOrderDto: CreateOrderDto){
        return this.ordersService.create(createOrderDto);
    }

    @Get()
    findAll(){
        return this.ordersService.findAll();
    }

    @Patch()
    update( @Body() updateOrderDto: UpdateOrderDto){
        return this.ordersService.update(updateOrderDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.ordersService.remove(id);
    }
}