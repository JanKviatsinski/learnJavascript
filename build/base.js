class Node {
    constructor(data) {
        this.data = data

        this.previous = null
        this.next = null
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tailNode = null
    }

    hea() {
        return this.head
    }

    tail() {
        return this.tailNode
    }

    traverse(order = true) {
        const values = []
// const start = [new Date().getSeconds(), new Date().getMilliseconds()]
        if (order) {
            let currentNode = this.head

            values.push(currentNode.data)

            while (currentNode.next) {
                values.push(currentNode.next.data)
                currentNode = currentNode.next
            }
        } else {
            let currentNode = this.tailNode

            values.push(currentNode.data)

            while (currentNode.previous) {
                values.push(currentNode.previous.data)
                currentNode = currentNode.previous
            }
        }

        // if (order) {
        //         let currentNode = this.head
        //
        //         values.push(currentNode.data)
        //
        //         while (currentNode.next) {
        //             values.push(currentNode.next.data)
        //             currentNode = currentNode.next
        //         }}
        //
        // const end = [new Date().getSeconds(), new Date().getMilliseconds()]
// console.log(start, end)
        return values
    }

    add(data) {
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            return
        }

        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = node
        node.previous = currentNode
        this.tailNode = node
    }

    getNode(value){
        let currentNode = this.head

        while (currentNode.next) {
            if(currentNode.data === value){
                break
            }else {
                currentNode = currentNode.next
            }
        }
        return currentNode.data === value ? currentNode : 'Not found.'
    }

    addAfter(value, parentNode) {
        const node = new Node(value)

        node.next = parentNode.next
        node.previous = parentNode

        if (parentNode.next){
            parentNode.next.previous = node
        }

        parentNode.next = node

        if (node.next === null){
            this.tailNode = node
        }
    }

    delete(value) {
        const removableNode = this.getNode(value)

        if (removableNode.previous){
            removableNode.previous.next = removableNode.next
        } else {
            this.head = removableNode.next
        }

        if(removableNode.next){
            removableNode.next.previous = removableNode.previous
        }else {
            this.tailNode = removableNode.previous
        }
    }
}

const dll = new DoubleLinkedList()

dll.add(1)
dll.add(2)
dll.add(3)
dll.delete(2)
console.log(dll);



/*else {
            x.apply(this, [this.head, null])


        function x (currentNode, prev = null){

            if (currentNode !== this.head){
                currentNode.previous = prev
            }

            if (currentNode.next) {
                prev = currentNode
                x.apply(this, [currentNode.next, prev])
            } else {
                // currentNode.previous = prev
                currentNode.next = node
                node.previous = currentNode
                this.tailNode = node
            }

        }}*/
