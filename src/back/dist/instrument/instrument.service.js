"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let InstrumentService = class InstrumentService {
    constructor(instrumentModel) {
        this.instrumentModel = instrumentModel;
    }
    async createInstrument(instrument) {
        const instrumentModel = new this.instrumentModel({
            url: instrument.url,
            author: instrument.author,
            title: instrument.title,
            model: instrument.model,
        });
        const result = await instrumentModel.save();
        const dbresponse = {
            statusCode: 200,
            message: "Instrumento adicionado com sucesso",
            response: result
        };
        return dbresponse;
    }
    async readAllInstruments() {
        const instruments = await this.instrumentModel.find().exec();
        const result = instruments.map(instrument => ({
            url: instrument.url,
            author: instrument.author,
            title: instrument.title,
            model: instrument.model,
            id: instrument._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Instrumentos encontrados com sucesso!",
            response: result
        };
        return dbresponse;
    }
    async readAllInstrumentsFromAuthor(author) {
        const instruments = await this.instrumentModel.find({ author: author }).exec();
        const result = instruments.map(instrument => ({
            url: instrument.url,
            author: instrument.author,
            title: instrument.title,
            model: instrument.model,
            id: instrument._id
        }));
        const dbresponse = {
            statusCode: 200,
            message: "Instrumentos encontrados com sucesso!",
            response: result
        };
        return dbresponse;
    }
    async updateInstrument(instrument) {
        if (!instrument) {
            throw new common_1.NotFoundException("Não pode ser nulo");
        }
        const updatedInstrument = await this.instrumentModel.findOne({ _id: instrument.id });
        if (instrument.title) {
            updatedInstrument.title = instrument.title;
        }
        if (instrument.author) {
            updatedInstrument.author = instrument.author;
        }
        if (instrument.model) {
            updatedInstrument.model = instrument.model;
        }
        if (instrument.url) {
            updatedInstrument.url = instrument.url;
        }
        updatedInstrument.save();
        const result = updatedInstrument;
        const dbresponse = {
            statusCode: 200,
            message: "Instrumento atualizado com sucesso!",
            response: result
        };
        return dbresponse;
    }
    async deleteInstrument(id) {
        const response = await this.instrumentModel.deleteOne({ _id: id }).exec();
        if (response.deletedCount == 0) {
            throw new common_1.NotFoundException("Ocorreu um problema ao deletar!");
        }
        return {
            statusCode: 200,
            message: "Instrumento deletado com sucesso!",
            response: null
        };
    }
};
InstrumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Instrument")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InstrumentService);
exports.InstrumentService = InstrumentService;
//# sourceMappingURL=instrument.service.js.map