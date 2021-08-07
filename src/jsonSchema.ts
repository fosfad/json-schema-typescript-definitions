export interface NullJsonSchema {
  allOf?: Array<NullJsonSchema>,
  anyOf?: Array<NullJsonSchema>,
  const?: null,
  default?: null,
  deprecated?: boolean,
  description?: string,
  enum?: Array<null>,
  examples?: Array<null>,
  not?: NullJsonSchema,
  oneOf?: Array<NullJsonSchema>,
  readOnly?: boolean,
  title?: string,
  type?: 'null',
  writeOnly?: boolean
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

export interface BooleanJsonSchema {
  allOf?: Array<BooleanJsonSchema>,
  anyOf?: Array<BooleanJsonSchema>,
  const?: boolean,
  default?: boolean,
  deprecated?: boolean,
  description?: string,
  enum?: Array<boolean>,
  examples?: Array<boolean>,
  not?: BooleanJsonSchema,
  oneOf?: Array<BooleanJsonSchema>,
  readOnly?: boolean,
  title?: string,
  type?: 'boolean',
  writeOnly?: boolean
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

export interface StringJsonSchema {
  allOf?: Array<StringJsonSchema>,
  anyOf?: Array<StringJsonSchema>,
  const?: string,
  default?: string,
  deprecated?: string,
  description?: string,
  enum?: Array<string>,
  examples?: Array<string>,
  maxLength?: number,
  minLength?: number,
  not?: StringJsonSchema,
  oneOf?: Array<StringJsonSchema>,
  pattern?: string,
  readOnly?: boolean,
  title?: string,
  type?: 'string' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  writeOnly?: boolean
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

export interface NumberJsonSchema {
  allOf?: Array<NumberJsonSchema>,
  anyOf?: Array<NumberJsonSchema>,
  const?: number,
  default?: number,
  deprecated?: boolean,
  description?: string,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  not?: NumberJsonSchema,
  oneOf?: Array<NumberJsonSchema>,
  readOnly?: boolean,
  title?: string,
  type?: 'number' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  writeOnly?: boolean
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

export interface IntegerJsonSchema {
  allOf?: Array<IntegerJsonSchema>,
  anyOf?: Array<IntegerJsonSchema>,
  const?: number,
  default?: number,
  deprecated?: boolean,
  description?: string,
  enum?: Array<number>,
  examples?: Array<number>,
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
  not?: IntegerJsonSchema,
  oneOf?: Array<IntegerJsonSchema>,
  readOnly?: boolean,
  title?: string,
  type?: 'integer' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  writeOnly?: boolean
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

export interface ArrayJsonSchema {
  allOf?: Array<ArrayJsonSchema>,
  anyOf?: Array<ArrayJsonSchema>,
  const?: Array<any>,
  contains?: JsonSchema,
  default?: Array<any>,
  deprecated?: boolean,
  description?: string,
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
  readOnly?: boolean,
  title?: string,
  type?: 'array' | Array<'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object'>,
  uniqueItems?: boolean,
  writeOnly?: boolean
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

export interface ObjectJsonSchema {
  additionalProperties?: JsonSchema,
  allOf?: Array<ObjectJsonSchema>,
  anyOf?: Array<ObjectJsonSchema>,
  const?: Record<string, any>,
  default?: Record<string, any>,
  dependentRequired?: Record<string, Array<string>>,
  deprecated?: boolean,
  description?: string,
  enum?: Array<Record<string, any>>,
  examples?: Array<Record<string, any>>,
  maxProperties?: number,
  minProperties?: number,
  not?: ObjectJsonSchema,
  oneOf?: Array<ObjectJsonSchema>,
  patternProperties?: { [propertyNameRegex: string]: JsonSchema },
  properties?: { [propertyName: string]: JsonSchema },
  propertyNames?: JsonSchema,
  readOnly?: boolean,
  required?: Array<string>,
  title?: string,
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

export interface AnyJsonSchema {
  additionalProperties?: never,
  allOf?: never,
  anyOf?: never,
  const?: any,
  contains?: never,
  default?: any,
  dependentRequired?: never,
  deprecated?: boolean,
  description?: string,
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
  not?: never,
  oneOf?: never,
  pattern?: never,
  patternProperties?: never,
  prefixItems?: never,
  properties?: never,
  propertyNames?: never,
  readOnly?: boolean,
  required?: never,
  title?: string,
  type?: never,
  uniqueItems?: never,
  writeOnly?: boolean
}

export function isAnyJsonSchema(schema: any): schema is AnyJsonSchema {
  return !isNullJsonSchema(schema)
    && !isBooleanJsonSchema(schema)
    && !isStringJsonSchema(schema)
    && !isNumberJsonSchema(schema)
    && !isIntegerJsonSchema(schema)
    && !isArrayJsonSchema(schema)
    && !isObjectJsonSchema(schema);
}

export type JsonSchema = NullJsonSchema | BooleanJsonSchema | StringJsonSchema | NumberJsonSchema | IntegerJsonSchema | ArrayJsonSchema | ObjectJsonSchema | AnyJsonSchema;
