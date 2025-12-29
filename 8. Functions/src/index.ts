// parameter Type
function makeChai(type: string, cups: number) {
    console.log(`Making ${type} chai of ${cups} cups.`);
}

// return Type
function newChai(type: string, cups: number): number {
    return 3;
}

//logger functions

function logChai(): void {
    console.log("Logging chai menus");
}

// optional and default parameters

function orderChai(type?: string) {}
function orderNewChai(type: string = "Masala") {}

// Complex looking functions

function getChaiRecipe(type: {
    type: string;
    sugars: number;
    ingredients: string[];
}): number {
    return 45;
}
