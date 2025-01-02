import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Menus} from "@/modules/menus/schemas/menus.chema";
import mongoose, {HydratedDocument} from "mongoose";

export type MenuItemsDocument = HydratedDocument<MenuItems>
@Schema({timestamps: true})
export class MenuItems{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: Menus.name})
    menu: mongoose.Schema.Types.ObjectId;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    basePrice: number;

    @Prop()
    image: string;

}
export const MenuItemSchema = SchemaFactory.createForClass(MenuItems);