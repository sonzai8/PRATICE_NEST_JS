import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Restaurant, RestaurantSchema} from "@/modules/restaurants/schemas/restaurant.schema";
import mongoose, {HydratedDocument} from "mongoose";

export type MenuDocument = HydratedDocument<Menus>

@Schema({timestamps: true})
export class Menus {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Restaurant.name})
    restaurant: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;
}
export const MenusSchema = SchemaFactory.createForClass(Menus);