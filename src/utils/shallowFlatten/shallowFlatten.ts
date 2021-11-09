import isObject from '@/utils/isObject';

const shallowFlatten = <T>(
  obj: Record<string | number | symbol, Record<string | number | symbol, T>>,
): Record<string | number | symbol, T> => {
  let newObj = {};

  const objEntries = Object.entries(obj);
  for (let i = 0; i < objEntries.length; i += 1) {
    if (isObject(objEntries[i][1])) {
      newObj = { ...newObj, ...objEntries[i][1] };
    } else {
      newObj = { ...newObj, [objEntries[i][0]]: objEntries[i][1] };
    }
  }

  return newObj;
};

export default shallowFlatten;
