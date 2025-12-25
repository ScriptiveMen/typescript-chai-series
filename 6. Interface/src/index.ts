// Types

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

// function makeChai(order: { type: string; sugar: number; strong: boolean }) {}
// function serveChai(order: { type: string; sugar: number; strong: boolean }) {}
// Above two are the repetition of the code and not looking clean, instead make one type of it.

function makeChai(order: ChaiOrder) {}
function serveChai(order: ChaiOrder) {}

// Where type fails?

// type CupSize = "small" | "large";
// class Chai implements CupSize {} ->> fails here, here comes interface

// interface ->> mainly, for classes interface is more digestable.

interface CupSize {
    size: "small" | "large";
}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

// Case 2

type Response = { ok: true } | { ok: false };

// class Result implements Response {
//     ok: boolean = true;
// }

// Union (|) and Intersection (&)

type chaiType = "masala" | "ginger" | "elaichi"; // Union (any value from this only allowed.) works like OR

function MakeTea(t: chaiType) {
    console.log(t);
}

type BaseChai = { water: number };
type ChaiRecipe = { sugar: number };

type MakeChai = BaseChai & ChaiRecipe; // Intersection (both the values are combined and mandatory to use), works like AND

const cup: MakeChai = {
    water: 100,
    sugar: 50,
};

// Optional values

type User = {
    username: string;
    bio?: string;
};

const u1: User = { username: "Satya" };
const u2: User = { username: "Satya", bio: "satyakumarram.in" };

// ReadOnly values

type Config = {
    readonly appName: string;
    version: number;
};

const appOne: Config = {
    appName: "MyApp",
    version: 1,
};

// appOne.appName = "SecondApp";
