import { snakeToCamelCase } from '../utils';

const formatDateIfApplicable = (keyName, data) => {
  const allegedlyNewDate = new Date(data);
  const isDate =
    keyName.endsWith('_date') &&
    typeof data === 'string' &&
    allegedlyNewDate.toString !== 'Invalid Date';

  return isDate ? allegedlyNewDate : data;
};

const parseData = data => {
  let newData = {};

  if (data instanceof Object) {
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        newData[snakeToCamelCase(key)] = data[key].map(arrayElem =>
          parseData(arrayElem)
        );
      } else if (data[key] instanceof Object) {
        newData[snakeToCamelCase(key)] = parseData(data[key]);
      } else {
        newData[snakeToCamelCase(key)] = formatDateIfApplicable(key, data[key]);
      }
    });
  } else {
    newData = data;
  }

  return newData;
};

export default data => ({
  ...data,
  data: parseData(data.data),
});
