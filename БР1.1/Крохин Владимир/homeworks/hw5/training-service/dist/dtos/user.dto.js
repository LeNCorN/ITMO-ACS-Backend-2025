'use strict';
var __esDecorate =
  (this && this.__esDecorate) ||
  function (
    ctor,
    descriptorIn,
    decorators,
    contextIn,
    initializers,
    extraInitializers,
  ) {
    function accept(f) {
      if (f !== void 0 && typeof f !== 'function')
        throw new TypeError('Function expected');
      return f;
    }
    var kind = contextIn.kind,
      key = kind === 'getter' ? 'get' : kind === 'setter' ? 'set' : 'value';
    var target =
      !descriptorIn && ctor
        ? contextIn['static']
          ? ctor
          : ctor.prototype
        : null;
    var descriptor =
      descriptorIn ||
      (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _,
      done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === 'access' ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) {
        if (done)
          throw new TypeError(
            'Cannot add initializers after decoration has completed',
          );
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators[i])(
        kind === 'accessor'
          ? { get: descriptor.get, set: descriptor.set }
          : descriptor[key],
        context,
      );
      if (kind === 'accessor') {
        if (result === void 0) continue;
        if (result === null || typeof result !== 'object')
          throw new TypeError('Object expected');
        if ((_ = accept(result.get))) descriptor.get = _;
        if ((_ = accept(result.set))) descriptor.set = _;
        if ((_ = accept(result.init))) initializers.unshift(_);
      } else if ((_ = accept(result))) {
        if (kind === 'field') initializers.unshift(_);
        else descriptor[key] = _;
      }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
var __runInitializers =
  (this && this.__runInitializers) ||
  function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
      value = useValue
        ? initializers[i].call(thisArg, value)
        : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
  };
var __setFunctionName =
  (this && this.__setFunctionName) ||
  function (f, name, prefix) {
    if (typeof name === 'symbol')
      name = name.description ? '['.concat(name.description, ']') : '';
    return Object.defineProperty(f, 'name', {
      configurable: true,
      value: prefix ? ''.concat(prefix, ' ', name) : name,
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
const class_validator_1 = require('class-validator');
const routing_controllers_openapi_1 = require('routing-controllers-openapi');
/**
 * DTO для создания пользователя
 */
let CreateUserDto = (() => {
  let _classDecorators = [(0, routing_controllers_openapi_1.OpenAPI)({})];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _username_decorators;
  let _username_initializers = [];
  let _username_extraInitializers = [];
  let _email_decorators;
  let _email_initializers = [];
  let _email_extraInitializers = [];
  let _password_decorators;
  let _password_initializers = [];
  let _password_extraInitializers = [];
  let _firstName_decorators;
  let _firstName_initializers = [];
  let _firstName_extraInitializers = [];
  let _lastName_decorators;
  let _lastName_initializers = [];
  let _lastName_extraInitializers = [];
  var CreateUserDto = (_classThis = class {
    constructor() {
      this.username = __runInitializers(this, _username_initializers, void 0);
      this.email =
        (__runInitializers(this, _username_extraInitializers),
        __runInitializers(this, _email_initializers, void 0));
      this.password =
        (__runInitializers(this, _email_extraInitializers),
        __runInitializers(this, _password_initializers, void 0));
      this.firstName =
        (__runInitializers(this, _password_extraInitializers),
        __runInitializers(this, _firstName_initializers, void 0));
      this.lastName =
        (__runInitializers(this, _firstName_extraInitializers),
        __runInitializers(this, _lastName_initializers, void 0));
      __runInitializers(this, _lastName_extraInitializers);
    }
  });
  __setFunctionName(_classThis, 'CreateUserDto');
  (() => {
    const _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    _username_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Имя пользователя должно быть строкой',
      }),
      (0, class_validator_1.IsNotEmpty)({
        message: 'Имя пользователя обязательно',
      }),
    ];
    _email_decorators = [
      (0, class_validator_1.IsEmail)(
        {},
        { message: 'Некорректный формат email' },
      ),
      (0, class_validator_1.IsNotEmpty)({ message: 'Email обязателен' }),
    ];
    _password_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Пароль должен быть строкой',
      }),
      (0, class_validator_1.IsNotEmpty)({ message: 'Пароль обязателен' }),
      (0, class_validator_1.MinLength)(6, {
        message: 'Пароль должен содержать минимум 6 символов',
      }),
    ];
    _firstName_decorators = [
      (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
      (0, class_validator_1.IsOptional)(),
    ];
    _lastName_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Фамилия должна быть строкой',
      }),
      (0, class_validator_1.IsOptional)(),
    ];
    __esDecorate(
      null,
      null,
      _username_decorators,
      {
        kind: 'field',
        name: 'username',
        static: false,
        private: false,
        access: {
          has: obj => 'username' in obj,
          get: obj => obj.username,
          set: (obj, value) => {
            obj.username = value;
          },
        },
        metadata: _metadata,
      },
      _username_initializers,
      _username_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _email_decorators,
      {
        kind: 'field',
        name: 'email',
        static: false,
        private: false,
        access: {
          has: obj => 'email' in obj,
          get: obj => obj.email,
          set: (obj, value) => {
            obj.email = value;
          },
        },
        metadata: _metadata,
      },
      _email_initializers,
      _email_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _password_decorators,
      {
        kind: 'field',
        name: 'password',
        static: false,
        private: false,
        access: {
          has: obj => 'password' in obj,
          get: obj => obj.password,
          set: (obj, value) => {
            obj.password = value;
          },
        },
        metadata: _metadata,
      },
      _password_initializers,
      _password_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _firstName_decorators,
      {
        kind: 'field',
        name: 'firstName',
        static: false,
        private: false,
        access: {
          has: obj => 'firstName' in obj,
          get: obj => obj.firstName,
          set: (obj, value) => {
            obj.firstName = value;
          },
        },
        metadata: _metadata,
      },
      _firstName_initializers,
      _firstName_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _lastName_decorators,
      {
        kind: 'field',
        name: 'lastName',
        static: false,
        private: false,
        access: {
          has: obj => 'lastName' in obj,
          get: obj => obj.lastName,
          set: (obj, value) => {
            obj.lastName = value;
          },
        },
        metadata: _metadata,
      },
      _lastName_initializers,
      _lastName_extraInitializers,
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    CreateUserDto = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (CreateUserDto = _classThis);
})();
exports.CreateUserDto = CreateUserDto;
/**
 * DTO для обновления пользователя
 */
let UpdateUserDto = (() => {
  let _classDecorators = [(0, routing_controllers_openapi_1.OpenAPI)({})];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  let _username_decorators;
  let _username_initializers = [];
  let _username_extraInitializers = [];
  let _email_decorators;
  let _email_initializers = [];
  let _email_extraInitializers = [];
  let _password_decorators;
  let _password_initializers = [];
  let _password_extraInitializers = [];
  let _firstName_decorators;
  let _firstName_initializers = [];
  let _firstName_extraInitializers = [];
  let _lastName_decorators;
  let _lastName_initializers = [];
  let _lastName_extraInitializers = [];
  var UpdateUserDto = (_classThis = class {
    constructor() {
      this.username = __runInitializers(this, _username_initializers, void 0);
      this.email =
        (__runInitializers(this, _username_extraInitializers),
        __runInitializers(this, _email_initializers, void 0));
      this.password =
        (__runInitializers(this, _email_extraInitializers),
        __runInitializers(this, _password_initializers, void 0));
      this.firstName =
        (__runInitializers(this, _password_extraInitializers),
        __runInitializers(this, _firstName_initializers, void 0));
      this.lastName =
        (__runInitializers(this, _firstName_extraInitializers),
        __runInitializers(this, _lastName_initializers, void 0));
      __runInitializers(this, _lastName_extraInitializers);
    }
  });
  __setFunctionName(_classThis, 'UpdateUserDto');
  (() => {
    const _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    _username_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Имя пользователя должно быть строкой',
      }),
      (0, class_validator_1.IsOptional)(),
    ];
    _email_decorators = [
      (0, class_validator_1.IsEmail)(
        {},
        { message: 'Некорректный формат email' },
      ),
      (0, class_validator_1.IsOptional)(),
    ];
    _password_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Пароль должен быть строкой',
      }),
      (0, class_validator_1.IsOptional)(),
      (0, class_validator_1.MinLength)(6, {
        message: 'Пароль должен содержать минимум 6 символов',
      }),
    ];
    _firstName_decorators = [
      (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
      (0, class_validator_1.IsOptional)(),
    ];
    _lastName_decorators = [
      (0, class_validator_1.IsString)({
        message: 'Фамилия должна быть строкой',
      }),
      (0, class_validator_1.IsOptional)(),
    ];
    __esDecorate(
      null,
      null,
      _username_decorators,
      {
        kind: 'field',
        name: 'username',
        static: false,
        private: false,
        access: {
          has: obj => 'username' in obj,
          get: obj => obj.username,
          set: (obj, value) => {
            obj.username = value;
          },
        },
        metadata: _metadata,
      },
      _username_initializers,
      _username_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _email_decorators,
      {
        kind: 'field',
        name: 'email',
        static: false,
        private: false,
        access: {
          has: obj => 'email' in obj,
          get: obj => obj.email,
          set: (obj, value) => {
            obj.email = value;
          },
        },
        metadata: _metadata,
      },
      _email_initializers,
      _email_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _password_decorators,
      {
        kind: 'field',
        name: 'password',
        static: false,
        private: false,
        access: {
          has: obj => 'password' in obj,
          get: obj => obj.password,
          set: (obj, value) => {
            obj.password = value;
          },
        },
        metadata: _metadata,
      },
      _password_initializers,
      _password_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _firstName_decorators,
      {
        kind: 'field',
        name: 'firstName',
        static: false,
        private: false,
        access: {
          has: obj => 'firstName' in obj,
          get: obj => obj.firstName,
          set: (obj, value) => {
            obj.firstName = value;
          },
        },
        metadata: _metadata,
      },
      _firstName_initializers,
      _firstName_extraInitializers,
    );
    __esDecorate(
      null,
      null,
      _lastName_decorators,
      {
        kind: 'field',
        name: 'lastName',
        static: false,
        private: false,
        access: {
          has: obj => 'lastName' in obj,
          get: obj => obj.lastName,
          set: (obj, value) => {
            obj.lastName = value;
          },
        },
        metadata: _metadata,
      },
      _lastName_initializers,
      _lastName_extraInitializers,
    );
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    UpdateUserDto = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (UpdateUserDto = _classThis);
})();
exports.UpdateUserDto = UpdateUserDto;
/**
 * DTO для ответа с данными пользователя
 */
let UserDto = (() => {
  let _classDecorators = [(0, routing_controllers_openapi_1.OpenAPI)({})];
  let _classDescriptor;
  let _classExtraInitializers = [];
  let _classThis;
  var UserDto = (_classThis = class {});
  __setFunctionName(_classThis, 'UserDto');
  (() => {
    const _metadata =
      typeof Symbol === 'function' && Symbol.metadata
        ? Object.create(null)
        : void 0;
    __esDecorate(
      null,
      (_classDescriptor = { value: _classThis }),
      _classDecorators,
      { kind: 'class', name: _classThis.name, metadata: _metadata },
      null,
      _classExtraInitializers,
    );
    UserDto = _classThis = _classDescriptor.value;
    if (_metadata)
      Object.defineProperty(_classThis, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata,
      });
    __runInitializers(_classThis, _classExtraInitializers);
  })();
  return (UserDto = _classThis);
})();
exports.UserDto = UserDto;
