import { Schema, model, InferSchemaType } from "mongoose";

const collectionSchema = new Schema({
    _id: Number,
    shop_id: { type: Number, index: true },
    handle: String,
    title: String,
    product_ids: String,
    product_count: Number,
    collection_type: String,
}, { timestamps: true, usePushEach: true });

export type SchemaType = InferSchemaType<typeof collectionSchema>;

const Collections = model<SchemaType>("Collections", collectionSchema);

export { Collections };
