// Arrays

// 1. Normal basic types

const chaiType: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [3.4, 4.0, 5, 0];

// 2. Array of objects

type Chai = {
    name: string;
    price: number;
};

const menu: Chai[] = [
    { name: "masala", price: 20 },
    { name: "adrak", price: 25 },
];

// 3. readonly array
const cities: readonly string[] = ["Delhi", "Mumbai"];
// cities.push("Salt lake");

// 4. multi-dimensional array
const metric: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];

// Tuples

let chaiTuple: [string, number];
chaiTuple = ["Masala", 30];
// chaiTuple = [20, "Masala"];

let userInfo: [string, number, boolean?];

userInfo = ["satya", 30];
userInfo = ["satya", 30, true];

// readonly tuples

const location: readonly [number, number] = [4.3, 2.3];

// named tuples

const chaiMenu: [name: string, price: number] = ["Masala", 30];

// Enums

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE,
}

let cup = CupSize.SMALL;

// auto increment values

enum status {
    PENDING = 100,
    COMPLETED, // 101
    REJECTED, // 102
}

enum chaiOption {
    MASALA = "masala",
    GINGER = "ginger",
}

function makeChai(type: chaiOption) {
    console.log(`Making ${type} chai..`);
}

makeChai(chaiOption.MASALA);
// makeChai("lemon");

enum RandomEnums {
    ID = 1,
    NAME = "chai",
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

const s = Sugars.HIGH;

let t: [string, number] = ["chai", 30];
t.push("masala");
