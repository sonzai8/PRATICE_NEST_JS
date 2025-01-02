import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {HydratedDocument, mongo} from "mongoose";
import {Order} from "@/modules/orders/schemas/order.schema";
import {Menus} from "@/modules/menus/schemas/menus.chema";
import {MenuItems} from "@/modules/menu.items/schemas/menu.item.schema";
import {MenuItemOption} from "@/modules/menu.item.options/schemas/menu.item.option.schema";

export type OrderDetailDocument = HydratedDocument<OrderDetail>
@Schema({timestamps:true})
export class OrderDetail{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId , ref: Menus.name})
    menu: mongoose.Schema.Types.ObjectId;

    @Prop({type: mongoose.Schema.Types.ObjectId , ref: MenuItems.name})
    menuItem: mongoose.Schema.Types.ObjectId;

    @Prop({ type : mongoose.Schema.Types.ObjectId , ref: MenuItemOption.name})
    menuItemOption : mongoose.Schema.Types.ObjectId;

}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);