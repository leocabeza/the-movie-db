export const setDataAccordingToValueType = (data, key) => {
  if (Array.isArray(data[key])) {
    return data[key].map(elem => parseData(elem));
  } else if (data[key] instanceof Object) {
    return parseData(data[key]);
  }

  return data[key];
};

//TODO: May be there is a better declarative way to do this?
const parseData = data => {
  let newData = Array.isArray(data) ? [] : {};

  if (data instanceof Object) {
    Object.keys(data).forEach(key => {
      newData[key] = setDataAccordingToValueType(data, key);
    });
  } else {
    newData = data;
  }

  return newData;
};

export default parseData;
