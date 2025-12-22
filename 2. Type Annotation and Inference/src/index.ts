// Type Inference: TS understands by it's own. Mainly default data types TS inferes own.

let drink = "Water";
// drink = 0 ❌ Type 'number' is not assignable to type 'string'.

let value = Math.random() > 0.5 ? 10 : 5; // now value is number type
let value2 = Math.random() > 0.5 ? 10 : "5"; // now value is number | string type

// Type Annotation: We specify TS, what is the type of data

let boy: string = "rahul";
boy = "ram";
// boy = 0; ❌ Not valid.

// Types of annotation

let n1: number;
let n2: string;
let n3: boolean;
