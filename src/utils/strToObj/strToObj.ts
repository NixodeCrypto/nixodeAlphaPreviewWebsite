// simple reducer function that accesses object properties based on string dot notation
const strToObj = (str: string, obj: Record<any, any>, optional = false) =>
  str.split('.').reduce((o, i) => (optional ? o?.[i] : o[i]), obj);

export default strToObj;
