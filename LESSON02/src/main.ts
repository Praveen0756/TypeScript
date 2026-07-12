let myName: string = "Jack";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "Alex";
meaningOfLife = 22;
isLoading = true;
album = 2003;

const sum = (a: number, b: string) => {
  return a + b;
};

// Union Type '|'

let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
