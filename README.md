# JSON Schema TypeScript definitions

This package contains TypeScript definitions for JSON Schema. It may be useful in all kind of TypeScript projects that work with JSON Schema directly.

Supported JSON Schema drafts:

- [2020-12](https://json-schema.org/draft/2020-12/json-schema-core.html)

## Getting started

Install the definitions:

```bash
npm install @fosfad/json-schema-typescript-definitions
```

Import `JsonSchema` type definition:

```typescript
import { JsonSchema } from '@fosfad/json-schema-typescript-definitions/2020-12';
```

## Documentation

### Exported types

The package exports 3 types: `JsonSchemaBoolean`, `JsonSchemaObject` and `JsonSchema`:

- `JsonSchemaBoolean` stands for [Boolean JSON Schema](https://json-schema.org/draft/2020-12/json-schema-core.html#rfc.section.4.3.2);
- `JsonSchemaObject` is an object with all possible JSON Schema keywords within;
- `JsonSchema` is a union type between `JsonSchemaBoolean` and `JsonSchemaObject`.
