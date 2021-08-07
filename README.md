# JSON Schema TypeScript definitions

This library contains TypeScript defitions for JSON Schema. It may be useful when you want to programmable generate JSON Schema.

Following types are exposed:

* `StringJsonSchema`
* `IntegerJsonSchema`
* `NumberJsonSchema`
* `BooleanJsonSchema`
* `NullJsonSchema`
* `AnyJsonSchema` — when `type` property is not defined and type-specific properties (e.g. `maxLength` is specific to `string` type) are not defined either.
