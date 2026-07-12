import { BsXLg } from "react-icons/bs";

let stringArr = ["one", "hey", "jack"];

let guitarsArr = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "Jack";
stringArr.push("hey");

guitarsArr[0] = 1984;
guitarsArr.unshift("Jimmy");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Jack", 22, true];

let mixed = ["Jack", 1, false];

myTuple[1] = 42;

//Objects

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Jack",
  prop2: true,
};

exampleObj.prop1 = "Alex";

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let JP: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return `Hello!`;
};

console.log(greetGuitarist(JP));

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
