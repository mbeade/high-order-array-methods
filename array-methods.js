// Implement high-order Array methods

// forEach
// map
// filter
// reduce
// some
// every
// flat
// find

const forEach = (array, cb) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    cb(element, index, array);
  }
};

const map = (array, cb) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result.push(cb(element, index, array));
  }
  return result;
};

const filter = (array, cb) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (cb(element, index)) {
      result.push(element);
    }
  }
  return result;
};

const reduce = (array, cb, initialValue = array[0]) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    initialValue = cb(initialValue, element, index, array);
  }

  return initialValue;
};

const some = (array, cb) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (cb(element, index, array)) return true;
  }
  return false;
};

const every = (array, cb) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!cb(element, index, array)) return false;
  }
  return true;
};

const flat = (array, depth = 1) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (Array.isArray(element) && depth > 0) {
      result = [...result, ...flat(element)];
    } else {
      result.push(element);
    }
  }
  return result;
};

const find = (array, cb) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (cb(element, index, array)) return element;
  }
  return null;
};

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
};
