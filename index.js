function validateJSON(json, schema) {
  for (let key in schema) {
    const type = schema[key].type;
    const value = json[key];
    if (value === undefined && !schema[key].required) {
      continue;
    }
    switch (type) {
      case "number":
        validateNumber(key, value, schema[key]);
        break;
      case "string":
        validateString(key, value, schema[key]);
        break;
      case "boolean":
        validateBoolean(key, value, schema[key]);
        break;
      case "array":
        validateArray(key, value, schema[key]);
        break;
      default:
        throw new Error(`Invalid schema type: ${type}`);
    }
  }
}

function validateNumber(key, value, schema) {
  if (typeof value !== "number") {
    throw new Error(`Value of '${key}' is not a number`);
  }
  if (schema.min !== undefined && value < schema.min) {
    throw new Error(`Value of '${key}' is less than the minimum (${schema.min})`);
  }
  if (schema.max !== undefined && value > schema.max) {
    throw new Error(`Value of '${key}' is greater than the maximum (${schema.max})`);
  }
}

function validateString(key, value, schema) {
  if (typeof value !== "string") {
    throw new Error(`Value of '${key}' is not a string`);
  }
  if (schema.length !== undefined && value.length !== schema.length) {
    throw new Error(`Length of '${key}' is not equal to ${schema.length}`);
  }
}

function validateBoolean(key, value, schema) {
  if (typeof value !== "boolean") {
    throw new Error(`Value of '${key}' is not a boolean`);
  }
}

function validateArray(key, value, schema) {
  if (!Array.isArray(value)) {
    throw new Error(`Value of '${key}' is not an array`);
  }
  if (schema.length !== undefined && value.length !== schema.length) {
    throw new Error(`Length of '${key}' is not equal to ${schema.length}`);
  }
}