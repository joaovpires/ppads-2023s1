"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentSchema = void 0;
const mongoose = require("mongoose");
exports.InstrumentSchema = new mongoose.Schema({
    url: { type: String, required: true },
    author: { type: String, required: false },
    title: { type: String, required: true },
    model: { type: String, required: true },
});
;
//# sourceMappingURL=instrument.model.js.map