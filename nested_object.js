const typeCheck = {
  isString: (val) => {
    return typeof val === "string" || val instanceof String;
  },
  isInteger: (val) => {
    return Number.isInteger(val);
  },
  isArray: (val) => {
    return Array.isArray(val);
  },
  isObject: (val) => {
    return typeof val === "object";
  },
  processObject: (property,objVal) =>{
    let subObject = {};
    for (const subProp in objVal) {
      const newObjVal = objVal[subProp];
      if (typeCheck.isString(newObjVal))
        subObject[subProp] = newObjVal + " AI";
      else if (typeCheck.isInteger(newObjVal))
        subObject[subProp] = newObjVal + 1;
      else if (typeCheck.isArray(newObjVal)) {
        const newSubObjVal = newObjVal.map((val2) => {
          if (typeCheck.isString(val2)) return val2 + " AI";
          else if (typeCheck.isInteger(val2)) return val2 + 1;
        });
        subObject[property] = newSubObjVal;
      }
      else subObject[subProp] = newObjVal;
    }
    return subObject;
  }
};

const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions
  let newObject = {};

  for (const property in obj) {
    const objVal = obj[property];
    if (typeCheck.isString(objVal)) newObject[property] = objVal + " AI";
    else if (typeCheck.isInteger(objVal)) newObject[property] = objVal + 1;
    else if (typeCheck.isArray(objVal)) {
      const newObjVal = objVal.map((val) => {
        if (typeCheck.isString(val)) return val + " AI";
        else if (typeCheck.isInteger(val)) return val + 1;
      });
      newObject[property] = newObjVal;
    } else if (typeCheck.isObject(objVal)) {
      const subObject = typeCheck.processObject(property,objVal);
      newObject[property] = subObject;
    }
  }
  return newObject;
};
console.log(
  transformValue({
    a: 123,
    b: "hero",
    c: [1, 2, 3],
    d: {
      e: 3,
      f: ["abc", "def"],
    },
  })
);
