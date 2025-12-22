let pocket: number | string = 10; //  ✅Accepted
pocket = "10M"; //  ✅Accepted

// Both are accepted because you used Union. either pocket will store number or string.

let apiRequestMode: "pending" | "sucess" | "error" = "pending";
// apiRequestMode  = "done" -> This is not acceptable only 'pending, sucess and error'.

let orders = ["12", "32", "43"];

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === "43") {
        currentOrder = order;
        break;
    }
    currentOrder = "33";
}
console.log(currentOrder);
