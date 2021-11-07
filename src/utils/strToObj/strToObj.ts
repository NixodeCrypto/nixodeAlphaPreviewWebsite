const strToObj = (str: string, obj: Record<any, any>) =>
  str.split('.').reduce((o, i) => o[i], obj);

export default strToObj;
