
function Builder (data){
    this.data = data;
}

Builder.prototype.get = function () {
    return this.data;
}

Builder.prototype.plus = function (...addedData) {
    const initialData = this.data;

    this.data = [...addedData].reduce((acc, current) => {
        acc += current;
        return acc;
    }, initialData)

    return this.data;
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

        this.data = this.data - subtractedValue;
        return this.data;
    }

    multiply = (value) => {
        this.data = this.data * value;
        return this.data;
    }

    divide = (value) => {
        this.data = Math.trunc(this.data / value);
        return this.data;
    }

    mod =  (value) => {
        this.data = value % this.data;
        return this.data;
    }
}

const a = new IntBuilder(10);
a.plus(2);
console.log(a.get());
a.minus(2);
console.log(a.get());
a.multiply(2);
console.log(a.get());
a.divide(6);
console.log(a.get());
a.mod(5);
console.log(a.get());











