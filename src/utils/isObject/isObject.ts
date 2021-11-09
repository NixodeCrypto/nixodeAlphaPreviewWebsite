const isObject = <T>(input: T): boolean =>
  typeof input === 'object' && !Array.isArray(input);

export default isObject;
