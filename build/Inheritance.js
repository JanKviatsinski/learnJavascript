
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
        this.int = int;
    }

    minus (...values) {
        const subtractedValue = [...values].reduce((acc, current) => {
            acc = acc + current;
            return acc;
        })

        this.int
        return this.int - subtractedValue;
    }
}

const a = new IntBuilder(10);
a.plus(1);
a.minus(1);
console.log(a.minus(1));





