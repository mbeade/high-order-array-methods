const methods = require("./array-methods");

describe("forEach", () => {
  test("Should iterate over array an perform expected action over iteration", () => {
    const myArray = ["a", "b"];
    const result = [];
    methods.forEach(myArray, (el) => {
      result.push(el + "-T");
    });
    expect(result).toEqual(["a-T", "b-T"]);
  });
});

describe("map", () => {
  test("Should iterate over array and perform expected action over iterate and return a new transformed array ", () => {
    const myArray = ["a", "b"];
    expect(methods.map(myArray, (el) => el + "T")).toEqual(["aT", "bT"]);
  });
});

describe("filter", () => {
  test("Should iterate over array and return a new array with elements that match the condition provided in cb", () => {
    const myArray = [
      { id: 1, name: "one" },
      { id: 2, name: "two" },
    ];
    expect(methods.filter(myArray, (el) => el.id === 2)).toEqual([
      {
        id: 2,
        name: "two",
      },
    ]);
  });
});

describe("reduce", () => {
  test("Should perform reducer action over each element of array and return a single value without providing initial value", () => {
    const myArray = [1, 2];
    expect(
      methods.reduce(
        myArray,
        (previous, current, index, array) => previous + current
      )
    ).toEqual(4);
  });

  test("Should perform reducer action over each element of array and return a single value using a initial value", () => {
    const myArray = [1, 2];
    expect(
      methods.reduce(
        myArray,
        (previous, current, index, array) => previous + current,
        3
      )
    ).toEqual(6);
  });
});

describe("some", () => {
  test("Should return true if any of the element of the array match the condition provided in the cb function", () => {
    const myArray = [2, 4, 5, 6, 8, 10];
    expect(methods.some(myArray, (el) => el % 2 > 0)).toBe(true);
  });

  test("Should return false when none of  the element of the array match the condition provided in the cb function", () => {
    const myArray = [2, 4, 6, 8, 10];
    expect(methods.some(myArray, (el) => el % 2 > 0)).toBe(false);
  });
});

describe("every", () => {
  test("Should return true if all of the element of the array match the condition provided in the cb function", () => {
    const myArray = [2, 4, 6, 8, 10];
    expect(methods.every(myArray, (el) => el % 2 === 0)).toBe(true);
  });

  test("Should return false when at least one of the element of the array does not match the condition provided in the cb function", () => {
    const myArray = [2, 4, 5, 6, 8, 10];
    expect(methods.every(myArray, (el) => el % 2 === 0)).toBe(false);
  });
});

describe("flat", () => {
  test(" should creates a new array with all sub-array elements concatenated into it", () => {
    const myArray = [1, 2, [3, [4, 5]]];
    expect(methods.flat(myArray)).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("find", () => {
  test("should return the element that matches the condition provided in cb function otherwise null", () => {
    const myArray = [
      { id: 1, name: "one" },
      { id: 2, name: "two" },
      { id: 3, name: "three" },
    ];
    expect(methods.find(myArray, (el) => el.id === 3 )).toEqual( { id: 3, name: "three" });
  });
});
