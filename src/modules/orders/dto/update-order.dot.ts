import {PartialType} from "@nestjs/mapped-types";
import {CreateOrderDto} from "@/modules/orders/dto/create-order.dto";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}