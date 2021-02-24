// function Builder(data) {
//     this.data = data;
// }
//
// Builder.prototype.get = function () {
//     return this.data;
// }
//
// Builder.prototype.plus = function (...addedData) {
//     const initialData = this.data;
//
//     this.data = [...addedData].reduce((acc, current) => {
//         acc += current;
//         return acc;
//     }, initialData)
//
//     return this.data;
// }
//
// class IntBuilder extends Builder {
//     constructor(int) {
//         super(int);
//     }
//
//     minus = (...values) => {
//         const subtractedValue = [...values].reduce((acc, current) => {
//             acc = acc + current;
//             return acc;
//         })
//
//         this.data = this.data - subtractedValue;
//         return this.data;
//     }
//
//     multiply = (value) => {
//         this.data = this.data * value;
//         return this.data;
//     }
//
//     divide = (value) => {
//         this.data = Math.trunc(this.data / value);
//         return this.data;
//     }
//
//     mod = (value) => {
//         this.data = value % this.data;
//         return this.data;
//     }
// }
//
// const intBuilder = new IntBuilder(10);
// intBuilder.plus(2);
// console.log(intBuilder.get());
// intBuilder.minus(2);
// console.log(intBuilder.get());
// intBuilder.multiply(2);
// console.log(intBuilder.get());
// intBuilder.divide(6);
// console.log(intBuilder.get());
// intBuilder.mod(5);
// console.log(intBuilder.get());


function Builder (data){
    this.data = data;
}

Builder.prototype.get = function () {
    return this.data;
}

Builder.prototype.plus = function (...addedData) {
    const initialData = this.data;

    return [...addedData].reduce((acc, current) => {
        acc += current;
        return acc;
    }, initialData)
}

class IntBuilder extends Builder {
    constructor(int) {
        super(int);
    }

    minus = (...values) => {
        const subtractedValue = [...values].reduce((acc, current) => {
            acc = acc + current;
            return acc;
        })

        return this.data - subtractedValue;
    }

    multiply = (value) => {
        return this.data * value;
    }

    divide = (value) => {
        return Math.trunc(this.data / value);
    }

    mod =  (value) => {
        return value % this.data;
    }
}

const intBuilder = new IntBuilder(10);

console.log(
    intBuilder.plus(2)
    .minus(2)
    .multiply(2)
    .divide(6)
    .mod(5)
    .get()
);











