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

export interface ComposedJsonSchema<T = JsonSchema> {
  allOf?: Array<T>,
  anyOf?: Array<T>,
  not?: T,
  oneOf?: Array<T>
}

export function isComposedJsonSchema(schema: any): schema is ComposedJsonSchema {
  return Array.isArray(schema.allOf) || Array.isArray(schema.anyOf) || Array.isArray(schema.oneOf) || schema.not !== undefined;
}

export interface NullJsonSchema extends JsonSchema, ComposedJsonSchema<NullJsonSchema> {
  const?: null,
  default?: null,
  enum?: Array<null>,
  examples?: Array<null>,
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

export interface BooleanJsonSchema extends JsonSchema, ComposedJsonSchema<BooleanJsonSchema> {
  const?: boolean,
  default?: boolean,
  enum?: Array<boolean>,
  examples?: Array<boolean>,
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

export interface StringJsonSchema extends JsonSchema, ComposedJsonSchema<StringJsonSchema> {
  const?: string,
  default?: string,
  enum?: Array<string>,
  examples?: Array<string>,
  maxLength?: number,
  minLength?: number,
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

export interface NumberJsonSchema extends JsonSchema, ComposedJsonSchema<NumberJsonSchema> {
  const?: number,
  default?: number,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
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

export interface IntegerJsonSchema extends JsonSchema, ComposedJsonSchema<IntegerJsonSchema> {
  const?: number,
  default?: number,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
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

export interface ArrayJsonSchema extends JsonSchema, ComposedJsonSchema<ArrayJsonSchema> {
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

export interface ObjectJsonSchema extends JsonSchema, ComposedJsonSchema<ObjectJsonSchema> {
  additionalProperties?: JsonSchema,
  const?: Record<string, any>,
  default?: Record<string, any>,
  dependentRequired?: Record<string, Array<string>>,
  enum?: Array<Record<string, any>>,
  examples?: Array<Record<string, any>>,
  maxProperties?: number,
  minProperties?: number,
  patternProperties?: { [propertyNameRegex: string]: JsonSchema },
  properties?: { [propertyName: string]: JsonSchema },
  propertyNames?: JsonSchema,
  required?: Array<string>,
  type?: 'object' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
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

export interface AnyJsonSchema extends JsonSchema, ComposedJsonSchema {
  additionalProperties?: never,
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
  pattern?: never,
  patternProperties?: never,
  prefixItems?: never,
  properties?: never,
  propertyNames?: never,
  required?: never,
  type?: never,
  uniqueItems?: never,
}
