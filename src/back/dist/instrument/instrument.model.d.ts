import * as mongoose from "mongoose";
export declare const InstrumentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface Instrument {
    url: string;
    author: string;
    title: string;
    model: string;
    id: string;
}
