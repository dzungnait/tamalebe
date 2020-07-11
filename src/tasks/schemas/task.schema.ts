import * as mongoose from 'mongoose';

export const TaskSchema = mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, required: true, default: 'OPEN' },
    softDeleted: { type: Boolean, required: true, default: false },
});