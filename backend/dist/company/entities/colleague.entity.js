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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colleague = void 0;
const typeorm_1 = require("typeorm");
const specialization_entity_1 = require("./specialization.entity");
let Colleague = class Colleague {
};
exports.Colleague = Colleague;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Colleague.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Colleague.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Colleague.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Colleague.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialization_entity_1.Specialization, (specialization) => specialization.colleagues),
    __metadata("design:type", specialization_entity_1.Specialization)
], Colleague.prototype, "specialization", void 0);
exports.Colleague = Colleague = __decorate([
    (0, typeorm_1.Entity)()
], Colleague);
//# sourceMappingURL=colleague.entity.js.map