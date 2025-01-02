import {Injectable} from "@nestjs/common";
import {CreateOrderDetailDto} from "@/modules/order.detail/dto/create-order.detail.dto";
import {UpdateOrderDetailDto} from "@/modules/order.detail/dto/update-order.detail.dto";

@Injectable()
export class OrderDetailService {

    create(createOrderDetailDto: CreateOrderDetailDto){
        return 'this is a new order';
    }

    findAll(){
        return 'this action will return all order details';
    }

    findOne(id: string){
        return `this action will return a order ${id} `;
    }

    update(id: string , updateOrderDetailDto: UpdateOrderDetailDto){
        return `this action will update a ${id} order`;
    }

    remove(id: string){
        return `this action will remove a ${id} order`;
    }
}
