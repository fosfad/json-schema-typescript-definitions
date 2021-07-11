interface CommonJsonSchema<
  SchemaType,
  MappedTypeScriptType,
  LogicSubschema,
> {
  allOf?: Array<LogicSubschema>,
  anyOf?: Array<LogicSubschema>,
  const?: MappedTypeScriptType,
  default?: MappedTypeScriptType,
  deprecated?: boolean,
  description?: string,
  enum?: Array<MappedTypeScriptType>,
  examples?: Array<MappedTypeScriptType>,
  not?: LogicSubschema,
  oneOf?: Array<LogicSubschema>,
  readOnly?: boolean,
  title?: string,
  type?: SchemaType,
  writeOnly?: boolean
}

export interface NullJsonSchema extends CommonJsonSchema<'null', null, NullJsonSchema> {
}

export interface BooleanJsonSchema extends CommonJsonSchema<'boolean', boolean, BooleanJsonSchema> {
}

export interface StringJsonSchema extends CommonJsonSchema<'string', string, StringJsonSchema> {
  maxLength?: number,
  minLength?: number,
  pattern?: string,
}

export interface NumberJsonSchema extends CommonJsonSchema<'number', number, NumberJsonSchema> {
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
}

export interface IntegerJsonSchema extends CommonJsonSchema<'integer', number, IntegerJsonSchema> {
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
}

export interface ArrayJsonSchema extends CommonJsonSchema<'array', Array<any>, ArrayJsonSchema> {
  contains?: JsonSchema,
  items?: JsonSchema,
  maxContains?: number,
  maxItems?: number,
  minContains?: number,
  minItems?: number,
  prefixItems?: Array<JsonSchema>,
  uniqueItems?: boolean
}

export interface ObjectJsonSchema extends CommonJsonSchema<'object', Record<string, any>, ObjectJsonSchema> {
  additionalProperties?: JsonSchema,
  dependentRequired?: Record<string, Array<string>>,
  maxProperties?: number,
  minProperties?: number,
  patternProperties?: { [propertyNameRegex: string]: JsonSchema },
  properties?: { [propertyName: string]: JsonSchema },
  propertyNames?: JsonSchema,
  required?: Array<string>,
}

type CommonProperties = keyof CommonJsonSchema<any, any, any>;

export interface AnyJsonSchema extends Omit<NullJsonSchema, CommonProperties>,
  Omit<BooleanJsonSchema, CommonProperties>,
  Omit<StringJsonSchema, CommonProperties>,
  Omit<NumberJsonSchema, CommonProperties>,
  Omit<IntegerJsonSchema, CommonProperties>,
  Omit<ArrayJsonSchema, CommonProperties>,
  Omit<ObjectJsonSchema, CommonProperties>,
  CommonJsonSchema<undefined | Array<'string' | 'integer' | 'number' | 'array' | 'object' | 'boolean' | 'null'>, any, JsonSchema> {
}

export type JsonSchema = NullJsonSchema | BooleanJsonSchema | StringJsonSchema | NumberJsonSchema | IntegerJsonSchema | ArrayJsonSchema | ObjectJsonSchema | AnyJsonSchema;
