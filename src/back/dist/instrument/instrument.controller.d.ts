import { Instrument } from "./instrument.model";
import { InstrumentService } from "./instrument.service";
export declare class InstrumentController {
    private readonly instrumentService;
    constructor(instrumentService: InstrumentService);
    createInstrument(instrument: Instrument): Promise<any>;
    readAllInstruments(): Promise<any>;
    readAllInstrumentsFromAuthor(author: string): Promise<any>;
    updateInstrument(instrument: Instrument): Promise<any>;
    deleteInstrument(id: string): Promise<any>;
}
