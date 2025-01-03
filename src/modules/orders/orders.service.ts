import {Injectable} from "@nestjs/common";
import {CreateOrderDto} from "@/modules/orders/dto/create-order.dto";
import {UpdateUserDto} from "@/modules/users/dto/update-user.dto";
import {UpdateOrderDto} from "@/modules/orders/dto/update-order.dot";

@Injectable()
export class OrdersService {
    create(createOrderDto: CreateOrderDto){
        return 'this action adds a new order'
    }
    findAll(){
        return 'this action finds all orders'
    }

    findOne(id){
        return 'this action finds a #' + id;
    }

    update( updateOrderDto: UpdateOrderDto){
        return 'this action updates a #';
    }

    remove(id: string){
        return 'this action removes a #' + id;
    }

}