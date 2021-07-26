// let arr = ["banana", "apple", "android"];
//
// for (let f of arr) console.log(f);
//
// console.log("------")
//
// // arr.forEach(function (item, index) { console.log(item, index)})
//
// // let newarr = arr.splice(1,1);
// // console.log(arr);
// // console.log(newarr);
//
// let newarr = arr.slice();
// let copyarr = arr;
//
// console.log(arr);
// console.log(newarr);
// console.log(copyarr);
//
// arr.pop();
// console.log("------")
//
// console.log(arr);
// console.log(newarr);
// console.log(copyarr);

// function axb(a = 1, b = 2) {
//     return a*b;
// }
//
// console.log(axb(1, 3, 5));
// console.log(axb(2,3));
// console.log(axb(2));
// console.log(axb());

// const axb = function (a = 1, b = 1) {
//     return a * b;
// }
//
// function testMe(values, func) {
//     for (value of values) {
//         let [a, b] = value;
//         console.log('for', value, 'result is', func(a, b));
//     }
// }
//
// testMe([[1],[2],[2,3],[5,0],[0,5]], axb);


// let arr = [1,2,3,5,6,7,8,9,10], double = [], square = [], half = [];
// for (item of arr) {
//     double.push(item*2);
//     square.push(item*item);
//     half.push(item/2);
// }
//
// console.log(double)
// console.log(square)
// console.log(half)
//
// let a = [1,2,3], b = [10,100,1000], c = [0,0,0], square = [], half = [];
// for (item of arr) {
//     double.push(item*2);
//     square.push(item*item);
//     half.push(item/2);
// }

//-------------------------------------------------------------

/*
function allGood(nummass, funcmass) {
    for (let item of funcmass) {
        let mass = [];
        for (let item2 of nummass) {
            let type = item(item2);
            mass.push(type);
        }
        console.log(mass)
    }
    // return mass;
}

function newFunc (massOfMass, funcmass) {
    for (let mass of massOfMass)
        allGood(mass, funcmass);

}
function sqrFunc(a) {
    return a*a;
}

function multNum(a){
    return a*2;
}

function  divNum(a){
    return a/2;
}

let arr1 = [1,2,3];
let arr2 = [10,100,1000];
let arr3 = [0,0,0];


function divBy3(a) {
    return a/3;
}

newFunc([arr1, arr2, arr3], [divBy3, sqrFunc, multNum, divNum]);

 */

//----------------------------------------------

/*
class Human {
    constructor(name, sex, birth_year) {
        this.name = name;
        this.sex = sex;
        this.birth_year = birth_year;
    }

    get about() {
        return "My name is " + this.name + ". My sex is " + this.sex + ".";
    }

    get age() {
        let actualYear = (new Date).getFullYear();
        return "My age is " + (actualYear - this.birth_year) + ".";
    }

    log() {
        console.log(this.about, this.age);
    }
}

let test = new Human("Alex", "male", 1997);
test.log();
let olga = new Human("Olga", "female", 1994);
olga.log();
test.birth_year = olga.birth_year;
test.log();
console.log(olga);

 */

//------------------------------------

/*
class Shape {
    constructor(typeOfShape) {
        this.type = typeOfShape;
    }

    get whoAmI() {
        return `I'm a ${this.type}`;
    }
}

class Circle extends Shape {
    constructor() {
        super("circle");
    }
}

let circle = new Circle();
console.log(circle.whoAmI);

 */

//-----------------------------------

/*
class Human {
    constructor(name, sex, birth_year) {
        this.name = name;
        this.sex = sex;
        this.birth_year = birth_year;
    }

    get about() {
        return "My name is " + this.name + ". My sex is " + this.sex + ".";
    }

    get age() {
        let actualYear = (new Date).getFullYear();
        return "My age is " + (actualYear - this.birth_year) + ".";
    }

    get canGiveBirth() {
        return sex != "male";
    }

    log() {
        console.log(this.about, this.age);
    }
}

class Men extends Human {
    constructor(name, birth_year) {
        super(name, "male", birth_year);
    }


}

// let test = new Human("Alex", "male", 1997);
// test.log();
// let olga = new Human("Olga", "female", 1994);
// olga.log();
// test.birth_year = olga.birth_year;
// test.log();
// console.log(olga);

let men = new Men("Lion", 2020);
men.log();
console.log(men.canGiveBirth);

 */

//------------------------------

class Human {
    constructor(name, sex, birth_year) {
        this.name = name;
        this.sex = sex;
        this.birth_year = birth_year;
    }

    get about() {
        return "My name is " + this.name + ". My sex is " + this.sex + ".";
    }

    get age() {
        let actualYear = (new Date).getFullYear();
        return "My age is " + (actualYear - this.birth_year) + ".";
    }

    get canGiveBirth() {
        return this.sex != "male";
    }

    log() {
        console.log(this.about, this.age);
    }
}

class Men extends Human {
    constructor(name, birth_year) {
        super(name, "male", birth_year);
    }


}

const men = new Men("Lion", 2020);
men.sex = "Gate";
// men.log();
// console.log(men.canGiveBirth);
console.log(men);
let woman = new Human("Petty", "female",1917);
console.log(woman);



