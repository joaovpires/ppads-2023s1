import * as mongoose from "mongoose";

export const AulaSchema = new mongoose.Schema({
    periodo: {type: String, required: false},
    data: {type: Date, required: false}
});

export interface Aula {
    id: string,
    periodo: string,
    data: Date
};