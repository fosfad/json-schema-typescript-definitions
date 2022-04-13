export const dialectIdentifier = 'https://json-schema.org/draft/2020-12/schema';

type CoreKeywords = {
  $anchor?: undefined | string;
  $comment?: undefined | string;
  $defs?: undefined | { [key: string]: JsonSchema };
  $dynamicAnchor?: undefined | string;
  $dynamicRef?: undefined | string;
  $id?: undefined | string;
  $ref?: undefined | string;
  $schema?: undefined | typeof dialectIdentifier;
  $vocabulary?: undefined | { [uri: string]: boolean };
};

type LogicSubschemasKeywords = {
  allOf?: undefined | Array<JsonSchema>;
  anyOf?: undefined | Array<JsonSchema>;
  not?: undefined | JsonSchema;
  oneOf?: undefined | Array<JsonSchema>;
};

type ConditionalSubschemasKeywords = {
  dependentSchemas?: undefined | { [key: string]: JsonSchema };
  else?: undefined | JsonSchema;
  if?: undefined | JsonSchema;
  then?: undefined | JsonSchema;
};

type MetaDataAnnotationKeywords = {
  default?: undefined | any;
  deprecated?: undefined | boolean;
  description?: undefined | string;
  examples?: undefined | Array<any>;
  readOnly?: undefined | boolean;
  title?: undefined | string;
  writeOnly?: undefined | boolean;
};

type FormatKeywords = {
  format?: undefined | string;
};

type JsonSchemaType = 'null' | 'boolean' | 'string' | 'integer' | 'number' | 'array' | 'object';

type CommonValidationKeywords = {
  const?: undefined | any;
  enum?: undefined | Array<any>;
  type?: undefined | JsonSchemaType | Array<JsonSchemaType>;
};

type StringValidationKeywords = {
  maxLength?: undefined | number;
  minLength?: undefined | number;
  pattern?: undefined | string;
};

type NumericValidationKeywords = {
  exclusiveMaximum?: undefined | number;
  exclusiveMinimum?: undefined | number;
  maximum?: undefined | number;
  minimum?: undefined | number;
  multipleOf?: undefined | number;
};

type ArrayValidationKeywords = {
  contains?: undefined | JsonSchema;
  items?: undefined | JsonSchema;
  maxContains?: undefined | number;
  maxItems?: undefined | number;
  minContains?: undefined | number;
  minItems?: undefined | number;
  prefixItems?: undefined | Array<JsonSchema>;
  uniqueItems?: undefined | boolean;
};

type ObjectValidationKeywords = {
  dependentRequired?: undefined | Record<string, Array<string>>;
  maxProperties?: undefined | number;
  minProperties?: undefined | number;
  required?: undefined | string[];
};

type ObjectSubschemaKeywords = {
  additionalProperties?: undefined | JsonSchema;
  patternProperties?: undefined | { [propertyNameRegex: string]: JsonSchema };
  properties?: undefined | { [propertyName: string]: JsonSchema };
  propertyNames?: undefined | JsonSchema;
};

type UnevaluatedLocationsKeywords = {
  unevaluatedItems?: undefined | JsonSchema;
  unevaluatedProperties?: undefined | JsonSchema;
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
