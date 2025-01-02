import {Injectable} from "@nestjs/common";
import {CreateOrderDto} from "@/modules/orders/dto/create-order.dto";
import {UpdateUserDto} from "@/modules/users/dto/update-user.dto";

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

    update(id: string, updateOrderDto: UpdateUserDto){
        return 'this action updates a #' + id;
    }

    remove(id: string){
        return 'this action removes a #' + id;
    }

}