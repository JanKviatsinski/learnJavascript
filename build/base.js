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

        function (prev = null)
        let currentNode = this.head
        // while (currentNode.next) {
        //     currentNode.previous = currentNode
        //     currentNode = currentNode.next
        // }

        currentNode.next = node
        this.tailNode = node
    }
}

const dll = new DoubleLinkedList()

dll.add('ccc')
dll.add('bbb')
dll.add('vvv')

console.log(dll);
