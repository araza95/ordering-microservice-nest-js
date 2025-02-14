import { Prop, Schema, PropOptions } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId } as PropOptions)
  _id: Types.ObjectId;
}
