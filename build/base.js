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
}

const dll = new DoubleLinkedList()

dll.add('1')
dll.add('2')
dll.add('3')

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
