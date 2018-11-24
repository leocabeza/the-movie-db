import { snakeToCamelCase } from '../utils';

export const formatDateIfApplicable = (data, key) => {
  const allegedlyNewDate = new Date(data);
  const isValidStringDate =
    (key.endsWith('_date') || key === 'expires_at') &&
    typeof data === 'string' &&
    allegedlyNewDate.toString() !== 'Invalid Date';

  return isValidStringDate ? allegedlyNewDate : data;
};

export const setDataAccordingToValueType = (data, key) => {
  if (Array.isArray(data[key])) {
    return data[key].map(elem => parseData(elem));
  } else if (data[key] instanceof Object) {
    return parseData(data[key]);
  }

  return formatDateIfApplicable(data[key], key);
};

export const camelCaseIfApplicable = keyName =>
  keyName.startsWith('iso')
    ? keyName.replace(/_/g, '-')
    : snakeToCamelCase(keyName);

//TODO: May be there is a better decl way to do this?
const parseData = data => {
  let newData = Array.isArray(data) ? [] : {};

  if (data instanceof Object) {
    Object.keys(data).forEach(key => {
      newData[camelCaseIfApplicable(key)] = setDataAccordingToValueType(
        data,
        key
      );
    });
  } else {
    newData = data;
  }

  return newData;
};

export default parseData;
