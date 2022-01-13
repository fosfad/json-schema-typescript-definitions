export const dialectIdentifier = 'https://json-schema.org/draft/2020-12/schema';

type CoreKeywords = {
  $anchor?: string;
  $comment?: string;
  $defs?: { [key: string]: JsonSchema };
  $dynamicAnchor?: string;
  $dynamicRef?: string;
  $id?: string;
  $ref?: string;
  $schema?: typeof dialectIdentifier;
  $vocabulary?: { [uri: string]: boolean };
};

type LogicSubschemasKeywords = {
  allOf?: Array<JsonSchema>;
  anyOf?: Array<JsonSchema>;
  not?: JsonSchema;
  oneOf?: Array<JsonSchema>;
};

type ConditionalSubschemasKeywords = {
  dependentSchemas?: { [key: string]: JsonSchema };
  else?: JsonSchema;
  if?: JsonSchema;
  then?: JsonSchema;
};

type MetaDataAnnotationKeywords = {
  default?: any;
  deprecated?: boolean;
  description?: string;
  examples?: Array<any>;
  readOnly?: boolean;
  title?: string;
  writeOnly?: boolean;
};

type FormatKeywords = {
  format?: string;
};

type JsonSchemaType = 'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object';

type CommonValidationKeywords = {
  const?: any;
  enum?: Array<any>;
  type?: JsonSchemaType | Array<JsonSchemaType>;
};

type StringValidationKeywords = {
  maxLength?: number;
  minLength?: number;
  pattern?: string;
};

type NumericValidationKeywords = {
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  maximum?: number;
  minimum?: number;
  multipleOf?: number;
};

type ArrayValidationKeywords = {
  contains?: JsonSchema;
  items?: JsonSchema;
  maxContains?: number;
  maxItems?: number;
  minContains?: number;
  minItems?: number;
  prefixItems?: Array<JsonSchema>;
  uniqueItems?: boolean;
};

type ObjectValidationKeywords = {
  dependentRequired?: Record<string, Array<string>>;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
};

type ObjectSubschemaKeywords = {
  additionalProperties?: JsonSchema;
  patternProperties?: { [propertyNameRegex: string]: JsonSchema };
  properties?: { [propertyName: string]: JsonSchema };
  propertyNames?: JsonSchema;
};

type UnevaluatedLocationsKeywords = {
  unevaluatedItems?: JsonSchema;
  unevaluatedProperties?: JsonSchema;
};

export type JsonSchemaObject = CoreKeywords &
  LogicSubschemasKeywords &
  ConditionalSubschemasKeywords &
  CommonValidationKeywords &
  MetaDataAnnotationKeywords &
  FormatKeywords &
  StringValidationKeywords &
  NumericValidationKeywords &
  ArrayValidationKeywords &
  ObjectValidationKeywords &
  UnevaluatedLocationsKeywords &
  ObjectSubschemaKeywords;

export type JsonSchemaBoolean = boolean;

export type JsonSchema = JsonSchemaBoolean | JsonSchemaObject;
