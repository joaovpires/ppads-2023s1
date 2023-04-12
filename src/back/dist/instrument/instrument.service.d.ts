import { Model } from "mongoose";
import { Instrument } from "./instrument.model";
export declare class InstrumentService {
    private readonly instrumentModel;
    constructor(instrumentModel: Model<Instrument>);
    createInstrument(instrument: Instrument): Promise<{
        statusCode: number;
        message: string;
        response: import("mongoose").Document<any, any, Instrument> & Instrument & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    readAllInstruments(): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            model: string;
            id: any;
        }[];
    }>;
    readAllInstrumentsFromAuthor(author: string): Promise<{
        statusCode: number;
        message: string;
        response: {
            url: string;
            author: string;
            title: string;
            model: string;
            id: any;
        }[];
    }>;
    updateInstrument(instrument: Instrument): Promise<any>;
    deleteInstrument(id: string): Promise<{
        statusCode: number;
        message: string;
        response: any;
    }>;
}
