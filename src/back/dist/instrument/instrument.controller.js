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
exports.InstrumentController = void 0;
const common_1 = require("@nestjs/common");
const instrument_service_1 = require("./instrument.service");
let InstrumentController = class InstrumentController {
    constructor(instrumentService) {
        this.instrumentService = instrumentService;
    }
    async createInstrument(instrument) {
        const response = await this.instrumentService.createInstrument(instrument);
        return response;
    }
    readAllInstruments() {
        return this.instrumentService.readAllInstruments();
    }
    readAllInstrumentsFromAuthor(author) {
        return this.instrumentService.readAllInstrumentsFromAuthor(author);
    }
    async updateInstrument(instrument) {
        return await this.instrumentService.updateInstrument(instrument);
    }
    async deleteInstrument(id) {
        return await this.instrumentService.deleteInstrument(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstrumentController.prototype, "createInstrument", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstrumentController.prototype, "readAllInstruments", null);
__decorate([
    (0, common_1.Get)("author/:author"),
    __param(0, (0, common_1.Param)("author")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstrumentController.prototype, "readAllInstrumentsFromAuthor", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstrumentController.prototype, "updateInstrument", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstrumentController.prototype, "deleteInstrument", null);
InstrumentController = __decorate([
    (0, common_1.Controller)("instrument"),
    __metadata("design:paramtypes", [instrument_service_1.InstrumentService])
], InstrumentController);
exports.InstrumentController = InstrumentController;
//# sourceMappingURL=instrument.controller.js.map