(function () {

    class Node {
        constructor(key, value) {
            this.key = key
            this.value = value
            this.left = null
            this.right = null
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null
        }

        roo() {
            return this.root
        }

        insert(key, value) {
            let currentNode = this.root

            if (!currentNode) {
                this.root = new Node(key, value)
                return
            }

            chooseDirection(currentNode)

            function chooseDirection(node) {
                if (node.key < key) {
                    goRight(node)
                } else {
                    goLeft(node)
                }
            }

            function goRight(currentNode) {
                if (currentNode.right) {
                    chooseDirection(currentNode.right)
                } else {
                    currentNode.right = new Node(key, value)
                }
            }

            function goLeft(currentNode) {
                if (currentNode.left) {
                    chooseDirection(currentNode.left)
                } else {
                    currentNode.left = new Node(key, value)
                }
            }
            return this
        }

        delete(key){

        }
    }

    const bst = new BinarySearchTree()

    // bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

    bst.insert(2, 'one')
    bst.insert(1, 'one')
    bst.insert(3, 'one')
    bst.insert(6, 'one')
    bst.insert(7, 'one')
    bst.insert(5, 'one')
    console.log(bst.roo());

}())
