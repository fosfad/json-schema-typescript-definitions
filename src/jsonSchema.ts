interface CommonSchema<
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

export interface NullSchema extends CommonSchema<'null', null, NullSchema> {
}

export interface BooleanSchema extends CommonSchema<'boolean', boolean, BooleanSchema> {
}

export interface StringSchema extends CommonSchema<'string', string, StringSchema> {
  maxLength?: number,
  minLength?: number,
  pattern?: string,
}

export interface NumberSchema extends CommonSchema<'number', number, NumberSchema> {
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
}

export interface IntegerSchema extends CommonSchema<'integer', number, IntegerSchema> {
  exclusiveMaximum?: number,
  exclusiveMinimum?: number,
  maximum?: number,
  minimum?: number,
  multipleOf?: number,
}

export interface ArraySchema extends CommonSchema<'array', Array<any>, ArraySchema> {
  contains?: JsonSchema,
  items?: JsonSchema,
  maxContains?: number,
  maxItems?: number,
  minContains?: number,
  minItems?: number,
  prefixItems?: Array<JsonSchema>,
  uniqueItems?: boolean
}

export interface ObjectSchema extends CommonSchema<'object', Record<string, any>, ObjectSchema> {
  additionalProperties?: JsonSchema,
  dependentRequired?: Record<string, Array<string>>,
  maxProperties?: number,
  minProperties?: number,
  patternProperties?: { [propertyNameRegex: string]: JsonSchema },
  properties?: { [propertyName: string]: JsonSchema },
  propertyNames?: JsonSchema,
  required?: Array<string>,
}

type CommonProperties = keyof CommonSchema<any, any, any>;

export interface AnySchema extends Omit<NullSchema, CommonProperties>,
  Omit<BooleanSchema, CommonProperties>,
  Omit<StringSchema, CommonProperties>,
  Omit<NumberSchema, CommonProperties>,
  Omit<IntegerSchema, CommonProperties>,
  Omit<ArraySchema, CommonProperties>,
  Omit<ObjectSchema, CommonProperties>,
  CommonSchema<undefined | Array<'string' | 'integer' | 'number' | 'array' | 'object' | 'boolean' | 'null'>, any, JsonSchema> {
}

export type JsonSchema = NullSchema | BooleanSchema | StringSchema | NumberSchema | IntegerSchema | ArraySchema | ObjectSchema | AnySchema;
