"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const instrument_controller_1 = require("./instrument.controller");
const instrument_model_1 = require("./instrument.model");
const instrument_service_1 = require("./instrument.service");
let InstrumentModule = class InstrumentModule {
};
InstrumentModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "Instrument", schema: instrument_model_1.InstrumentSchema }])],
        controllers: [instrument_controller_1.InstrumentController],
        providers: [instrument_service_1.InstrumentService]
    })
], InstrumentModule);
exports.InstrumentModule = InstrumentModule;
//# sourceMappingURL=instrument.module.js.map