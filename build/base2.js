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

        insert(insertKey, insertValue) {
            if (!this.root) {
                this.root = new Node(insertKey, insertValue)
                return
            }

            let foundNode = null

            const parentNode = chooseNode(this.root)

            if (insertKey < parentNode.key) {
                parentNode.left = new Node(insertKey, insertValue)
            } else {
                parentNode.right = new Node(insertKey, insertValue)
            }

            function chooseNode(node) {

                if (node.key < insertKey) {
                    searchRight(node)
                } else {
                    searchLeft(node)
                }

                return foundNode
            }


            function searchRight(currentNode) {

                if (currentNode.right) {
                    chooseNode(currentNode.right)
                } else {
                    foundNode = currentNode/*.right = new Node(insertKey, insertValue)*/
                }
            }

            function searchLeft(currentNode) {
                if (currentNode.left) {
                    chooseNode(currentNode.left)
                } else {
                    foundNode = currentNode/*.left = new Node(insertKey, insertValue)*/
                }
            }
        }

        delete(key) {
        }

        search(key) {

        }
    }

    const bst = new BinarySearchTree()

    // bst.insert(2, 'two').insert(1, 'one').insert(3, 'three');

    bst.insert(4, 'one')
    bst.insert(3, 'one')
    bst.insert(1, 'one')
    bst.insert(5, 'one')
    bst.insert(8, 'one')
    bst.insert(7, 'one')
    bst.insert(10, 'one')

    console.log(bst.roo());


    // insert(key, value) {
    //     if (!this.root) {
    //         this.root = new Node(key, value)
    //         return
    //     }
    //
    //     chooseDirection(this.root)
    //
    //     function chooseDirection(node) {
    //         if (node.key < key) {
    //             goRight(node)
    //         } else {
    //             goLeft(node)
    //         }
    //     }
    //
    //     function goRight(currentNode) {
    //         if (currentNode.right) {
    //             chooseDirection(currentNode.right)
    //         } else {
    //             currentNode.right = new Node(key, value)
    //         }
    //     }
    //
    //     function goLeft(currentNode) {
    //         if (currentNode.left) {
    //             chooseDirection(currentNode.left)
    //         } else {
    //             currentNode.left = new Node(key, value)
    //         }
    //     }
    //     return this
    // }

}())
