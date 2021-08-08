export interface Reference {
  $ref: string,
}

export function isReference(schema: any): schema is Reference {
  return typeof schema.$ref === 'string';
}

export interface JsonSchema {
  deprecated?: boolean,
  description?: string,
  readOnly?: boolean,
  title?: string,
  writeOnly?: boolean
}

export interface NullJsonSchema extends JsonSchema {
  allOf?: Array<NullJsonSchema>,
  anyOf?: Array<NullJsonSchema>,
  const?: null,
  default?: null,
  enum?: Array<null>,
  examples?: Array<null>,
  not?: NullJsonSchema,
  oneOf?: Array<NullJsonSchema>,
  type?: 'null' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
}

export function isNullJsonSchema(schema: any): schema is NullJsonSchema {
  if (schema.type === 'null') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('null')) {
    return true;
  }

  return false;
}

export interface BooleanJsonSchema extends JsonSchema {
  allOf?: Array<BooleanJsonSchema>,
  anyOf?: Array<BooleanJsonSchema>,
  const?: boolean,
  default?: boolean,
  enum?: Array<boolean>,
  examples?: Array<boolean>,
  not?: BooleanJsonSchema,
  oneOf?: Array<BooleanJsonSchema>,
  type?: 'boolean' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
}

export function isBooleanJsonSchema(schema: any): schema is BooleanJsonSchema {
  if (schema.type === 'boolean') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('boolean')) {
    return true;
  }

  return false;
}

export interface StringJsonSchema extends JsonSchema {
  allOf?: Array<StringJsonSchema>,
  anyOf?: Array<StringJsonSchema>,
  const?: string,
  default?: string,
  enum?: Array<string>,
  examples?: Array<string>,
  maxLength?: number,
  minLength?: number,
  not?: StringJsonSchema,
  oneOf?: Array<StringJsonSchema>,
  pattern?: string,
  type?: 'string' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
}

export function isStringJsonSchema(schema: any): schema is StringJsonSchema {
  if (schema.type === 'string') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('string')) {
    return true;
  }

  if (schema.type === undefined && (
    schema.pattern !== undefined ||
    schema.minLength !== undefined ||
    schema.maxLength !== undefined
  )) {
    return true;
  }

  return false;
}

export interface NumberJsonSchema extends JsonSchema {
  allOf?: Array<NumberJsonSchema>,
  anyOf?: Array<NumberJsonSchema>,
  const?: number,
  default?: number,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  not?: NumberJsonSchema,
  oneOf?: Array<NumberJsonSchema>,
  type?: 'number' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
}

export function isNumberJsonSchema(schema: any): schema is NumberJsonSchema {
  if (schema.type === 'number') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('number')) {
    return true;
  }

  if (schema.type === undefined && (
    schema.multipleOf !== undefined ||
    schema.minimum !== undefined ||
    schema.maximum !== undefined ||
    schema.exclusiveMinimum !== undefined ||
    schema.exclusiveMaximum !== undefined
  )) {
    return true;
  }

  return false;
}

export interface IntegerJsonSchema extends JsonSchema {
  allOf?: Array<IntegerJsonSchema>,
  anyOf?: Array<IntegerJsonSchema>,
  const?: number,
  default?: number,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  not?: IntegerJsonSchema,
  oneOf?: Array<IntegerJsonSchema>,
  type?: 'integer' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
}

export function isIntegerJsonSchema(schema: any): schema is IntegerJsonSchema {
  if (schema.type === 'integer') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('integer')) {
    return true;
  }

  if (schema.type === undefined && (
    schema.multipleOf !== undefined ||
    schema.minimum !== undefined ||
    schema.maximum !== undefined ||
    schema.exclusiveMinimum !== undefined ||
    schema.exclusiveMaximum !== undefined
  )) {
    return true;
  }

  return false;
}

export interface ArrayJsonSchema extends JsonSchema {
  allOf?: Array<ArrayJsonSchema>,
  anyOf?: Array<ArrayJsonSchema>,
  const?: Array<any>,
  contains?: JsonSchema,
  default?: Array<any>,
  enum?: Array<Array<any>>,
  examples?: Array<Array<any>>,
  items?: JsonSchema,
  maxContains?: number,
  maxItems?: number,
  minContains?: number,
  minItems?: number,
  not?: ArrayJsonSchema,
  oneOf?: Array<ArrayJsonSchema>,
  prefixItems?: Array<JsonSchema>,
  type?: 'array' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  uniqueItems?: boolean,
}

export function isArrayJsonSchema(schema: any): schema is ArrayJsonSchema {
  if (schema.type === 'array') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('array')) {
    return true;
  }

  if (schema.type === undefined && (
    schema.contains !== undefined ||
    schema.items !== undefined ||
    schema.maxContains !== undefined ||
    schema.maxItems !== undefined ||
    schema.minContains !== undefined ||
    schema.minItems !== undefined ||
    schema.prefixItems !== undefined ||
    schema.uniqueItems !== undefined
  )) {
    return true;
  }

  return false;
}

export interface ObjectJsonSchema extends JsonSchema {
  additionalProperties?: JsonSchema,
  allOf?: Array<ObjectJsonSchema>,
  anyOf?: Array<ObjectJsonSchema>,
  const?: Record<string, any>,
  default?: Record<string, any>,
  dependentRequired?: Record<string, Array<string>>,
  enum?: Array<Record<string, any>>,
  examples?: Array<Record<string, any>>,
  maxProperties?: number,
  minProperties?: number,
  not?: ObjectJsonSchema,
  oneOf?: Array<ObjectJsonSchema>,
  patternProperties?: { [propertyNameRegex: string]: JsonSchema },
  properties?: { [propertyName: string]: JsonSchema },
  propertyNames?: JsonSchema,
  required?: Array<string>,
  type?: 'object' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  writeOnly?: boolean
}

export function isObjectJsonSchema(schema: any): schema is ObjectJsonSchema {
  if (schema.type === 'object') {
    return true;
  }

  if (Array.isArray(schema.type) && schema.type.includes('object')) {
    return true;
  }

  if (schema.type === undefined && (
    schema.additionalProperties !== undefined ||
    schema.dependentRequired !== undefined ||
    schema.maxProperties !== undefined ||
    schema.minProperties !== undefined ||
    schema.patternProperties !== undefined ||
    schema.properties !== undefined ||
    schema.propertyNames !== undefined ||
    schema.required !== undefined
  )) {
    return true;
  }

  return false;
}

export interface AnyJsonSchema extends JsonSchema {
  additionalProperties?: never,
  allOf?: Array<JsonSchema>,
  anyOf?: Array<JsonSchema>,
  const?: any,
  contains?: never,
  default?: any,
  dependentRequired?: never,
  enum?: Array<any>,
  examples?: Array<any>,
  exclusiveMaximum?: never,
  exclusiveMinimum?: never,
  items?: never,
  maxContains?: never,
  maxItems?: never,
  maxLength?: never,
  maxProperties?: never,
  maximum?: never,
  minContains?: never,
  minItems?: never,
  minLength?: never,
  minProperties?: never,
  minimum?: never,
  multipleOf?: never,
  not?: JsonSchema,
  oneOf?: Array<JsonSchema>,
  pattern?: never,
  patternProperties?: never,
  prefixItems?: never,
  properties?: never,
  propertyNames?: never,
  required?: never,
  type?: never,
  uniqueItems?: never,
  writeOnly?: boolean
}

export function isAnyJsonSchema(schema: any): schema is AnyJsonSchema {
  return !isReference(schema)
    && !isNullJsonSchema(schema)
    && !isBooleanJsonSchema(schema)
    && !isStringJsonSchema(schema)
    && !isNumberJsonSchema(schema)
    && !isIntegerJsonSchema(schema)
    && !isArrayJsonSchema(schema)
    && !isObjectJsonSchema(schema);
}
