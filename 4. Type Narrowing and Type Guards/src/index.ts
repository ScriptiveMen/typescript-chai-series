function getChai(kind: string | number) {
    if (typeof kind === "string") {
        // type narrowing (you narrrow down the type then return or process)
        return `Making ${kind.charAt(3)} chai...`;
    }
    return `Chai order number: ${kind.toFixed(2)}`;
}

//msg is optional, if came then this, or do another
function showMessage(msg?: string) {
    if (msg) {
        return msg;
    }
    return `Default message`;
}

// exhaustive checks

function orderChai(size: "small" | "medium" | "large" | number) {
    if (typeof size === "small") {
        return `Small chai`;
    }
    if (typeof size === "medium" || size === "large") {
        return `Big chai`;
    }
    return `Chai order #${size}`;
}

class Milk {
    serve() {
        return `Serving milk tea`;
    }
}

class Black {
    serve() {
        return `Serving black tea`;
    }
}

function serverChai(chai: Milk | Black) {
    if (chai instanceof Milk) {
        return chai.serve(); // here is the gurantee that this server() method is called from Milk Class.
    }

    return chai.serve();
}

type chaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        typeof obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function servingChai(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        // this ensures that your item must have present type and sugar property.
        return `Serving ${item.type} with ${item.sugar} sugar`;
    }
    return `Serving custom chai ${item}`; // handling string
}

// more checks variation 1

type MasalaChai = { type: "masala"; spiceLevel: number };
type ElaichiChai = { type: "elaichi"; amount: number };
type GingerChai = { type: "ginger"; aroma: number };

type Chai = MasalaChai | ElaichiChai | GingerChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala": // directly or suggesting me masala,elaichi,ginger
            return `masala chai`;
            break;
        case "elaichi":
            return `elaichi chai`;
            break;
        case "ginger":
            return `ginger chai`;
            break; // default is optional, because it's very precise code right?
    }
}

// more checks variation 2

function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        // many codebases have this type of checks, where you directly check the property.
    }
}

// unknown implementation

function isStringArr(arr: unknown): arr is string[] {
    // this function must return array of strings.
    //
}
