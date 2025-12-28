// Normal JS Object
const chai = {
    name: "Masala chai",
    price: 20,
    isHot: true,
};

// inferred value

// {
//     name: string;
//     price: number;
//     isHot: boolean
// }

// object types declaration

// define type
let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

// usage
tea = {
    name: "Masala chai",
    price: 34,
    isHot: false,
};

// Type alias object

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
};

const adrakChai: Tea = {
    name: "Adrak chai",
    price: 29,
    ingredients: ["water", "tea leaves"],
};

// Structural typing

type Cup = { name: string };

let smallCup: Cup = { name: "200ml" };
let bigCup = { name: "500ml", material: "Steel" };

smallCup = bigCup;

// ex-2
type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Africa" };
const chaiBrew: Brew = coffee;

// splitout datatypes

type Item = { name: string; quatity: number };
type Address = { street: string; pin: number };

type Order = {
    id: string;
    items: Item[];
    addresses: Address;
};

// Partial<T> Utility type

// type Chai = {
//     name: string;
//     price: number;
//     isHot: boolean;
// };

// const updateChai = (updates: Partial<Chai>) => {
//     console.log("updating chai..", updates);
// };

// updateChai({ name: "Masala chai" });
// updateChai({ price: 34 });
// updateChai({}); // you can pass empty object also.

// Required<T> Utility Type

type ChaiOrder = {
    name?: string; // optional
    price?: number;
};

const OrderChai = (order: Required<ChaiOrder>) => {
    console.log(order);
};

OrderChai({
    name: "adrak",
    price: 3,
});

// Pick<T, K> Utility Type

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

type BasicChai = Pick<Chai, "name" | "price">;

const ch: BasicChai = {
    name: "lemon tea",
    price: 43,
};

// Omit<T, K> Utility Type
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[];
};

type publicChai = Omit<ChaiNew, "secretIngredients">;
// whenever any variable is created with this publicChai, secretIng. is hidden
