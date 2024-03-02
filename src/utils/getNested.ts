// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNested = (obj: any, prop: string) => {
  const _prop = prop.split('.');

  for (let i = 0; i < _prop.length; i++) {
    if (_prop[i] in obj) {
      obj = obj[_prop[i]];
    } else {
      return;
    }
  }

  return obj;
};
