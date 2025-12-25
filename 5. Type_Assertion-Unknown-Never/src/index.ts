// Type Assertion

let response: any = "43";

// let numeric: number = response.length ->> no .length suggestion is coming here, you have to explictily tell TS that beleive me its string type. Type Assertion.

let numeric: number = (response as string).length; // now you are getting suggestion, (as string) is a forceful type assertion, you have to perform many times.

type Book = {
    name: string;
};

let bookString = "{'name': 'Psychology of Money'}";
// let bookObject = JSON.parse(bookString);
// console.log(bookObject.) // now here you will not get any suggestion after (.) because you don't know actual type.

let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name); // now you are getting this suggestion (Access name property), after Type Assertion.

// input element example

let inputField = document.getElementById("username") as HTMLInputElement;

// Any vs Unknown

let value: any = "43";

// manipulation is done because type is any.
value = [1, 2, 3];
value = 4.2;
value.toUpperCase(); // no error in IDE, console error only

let newVal: unknown = "43";
newVal = [1, 2, 3, 4];
newVal = 4.3;

// newVal.toUpperCase();

if (typeof newVal === "string") {
    newVal.toUpperCase(); // no error
}

// try catch block

try {
} catch (error: any) {
    console.log(error.message); // not recommended in production.
}

try {
    //
} catch (error) {
    if (error instanceof Error) {
        console.log("Error: ", error.message);
    }

    console.log("Error: ", error);
}

// Never type

type Role = "admin" | "user";

function getAccess(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to dashboard");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user console");
        return;
    }
    role;
}

function neverReturn(): never {
    while (true) {} // infinite loop (web servers)
}
