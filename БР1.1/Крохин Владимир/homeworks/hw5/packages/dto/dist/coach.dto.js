'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UpdateCoachDto = exports.CreateCoachDto = exports.CoachDto = void 0;
const class_validator_1 = require('class-validator');
class CoachDto {}
exports.CoachDto = CoachDto;
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata('design:type', Number)],
  CoachDto.prototype,
  'id',
  void 0,
);
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata('design:type', Number)],
  CoachDto.prototype,
  'userId',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata('design:type', Array),
  ],
  CoachDto.prototype,
  'athleteIds',
  void 0,
);
class CreateCoachDto {}
exports.CreateCoachDto = CreateCoachDto;
__decorate(
  [(0, class_validator_1.IsNumber)(), __metadata('design:type', Number)],
  CreateCoachDto.prototype,
  'userId',
  void 0,
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata('design:type', String)],
  CreateCoachDto.prototype,
  'firstName',
  void 0,
);
__decorate(
  [(0, class_validator_1.IsString)(), __metadata('design:type', String)],
  CreateCoachDto.prototype,
  'lastName',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata('design:type', Array),
  ],
  CreateCoachDto.prototype,
  'athleteIds',
  void 0,
);
class UpdateCoachDto {}
exports.UpdateCoachDto = UpdateCoachDto;
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateCoachDto.prototype,
  'firstName',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata('design:type', String),
  ],
  UpdateCoachDto.prototype,
  'lastName',
  void 0,
);
__decorate(
  [
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata('design:type', Array),
  ],
  UpdateCoachDto.prototype,
  'athleteIds',
  void 0,
);
//# sourceMappingURL=coach.dto.js.map
