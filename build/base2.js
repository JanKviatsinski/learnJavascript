(function () {

    class Node {
        constructor(key, value) {
            this.parentNode = null
            this.key = key
            this.value = value
            this.left = null
            this.right = null
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null
            this.values = {}
        }

        roo() {
            return this.root
        }

        insert(key, value) {
            const newNode = new Node(key, value)

            if (!this.root) {
                this.root = newNode
                this.values[newNode.value] = newNode.key
                return
            }

            let currentNode = this.root

            while (currentNode) {
                if (key > currentNode.key) {
                    if (currentNode.right) {
                        currentNode = currentNode.right
                    } else {
                        currentNode.right = newNode
                        newNode.parentNode = currentNode
                        this.values[newNode.value] = newNode.key
                        break
                    }
                } else {
                    if (currentNode.left) {
                        currentNode = currentNode.left
                    } else {
                        currentNode.left = newNode
                        newNode.parentNode = currentNode
                        this.values[newNode.value] = newNode.key
                        break
                    }
                }
            }
            return this
        }

        delete(key) {
            const removableNode = this.search(key)
            const right = removableNode.right
            const left = removableNode.left

            if (removableNode !== this.root) {
                if (removableNode.parentNode.left === removableNode) {
                    removableNode.parentNode.left = null
                } else {
                    removableNode.parentNode.right = null
                }
            } else {
                if (right > left) {
                    this.root = left
                    this.insert(right.key, right.value)

                } else {
                    this.root = right
                    this.insert(left.key, left.value)
                }
                return
            }

            if (right) {
                this.insert(right.key, right.value)
            }

            if (left) {
                this.insert(left.key, left.value)
            }
        }

        search(key) {
            let currentNode = this.root
            while (currentNode) {
                if (currentNode.key === key) {
                    break
                }

                if (key > currentNode.key) {
                    currentNode = currentNode.right
                } else {
                    currentNode = currentNode.left
                }
            }
            return currentNode
        }

        contains(value) {
            return Boolean(this.values[value])
        }

        traverse(order = true) {
            const allKeys = []

            if (this.root) {
                allKeys.push(this.root.key)
            }

            let currentNode = this.root/*.right*/

            while (currentNode) {
                if (!currentNode.right) {
                    break
                }

                if (currentNode.key < currentNode.right.key) {
                    allKeys.push(currentNode.right.key)
                    allKeys.push(currentNode.left.key)
                    currentNode = currentNode.right
                }
            }

            currentNode = this.root

            while (currentNode) {
                if (!currentNode.left) {
                    break
                }

                if (currentNode.key > currentNode.left.key) {
                    allKeys.unshift(currentNode.left.key)
                    allKeys.unshift(currentNode.right.key)
                    currentNode = currentNode.left
                }
            }

            return allKeys
        }
    }

    const bst = new BinarySearchTree()

    bst.insert(2, 333)
    bst.insert(0, 'w')
    bst.insert(5, 'e')
    bst.insert(4, 'g')
    bst.insert(1, 'f')
    bst.insert(6, 'n')
    // bst.insert(3, 'one')
    // bst.insert(8, 'one')
    // bst.delete(2)
    // console.log(bst.search(5));
    console.log(bst.roo());
    console.log(bst.traverse());


//     bst.insert(2, 'two')
//     bst.insert(1, 'one')
//     bst.insert(3, 'three');
//
// //---2----
// //1-----3-
// //--------
//
//     console.log(bst.roo()); // 'two'
//
//     bst.delete(1)
//     bst.delete(3);
//
//     //---2----
// //---------
// //----------
//
//     console.log(bst.roo()); // 'two'
//
//     bst.insert(1, 'one');
//     bst.insert(3, 'three');
//
// //---2----
// //1-----3-
// //--------
//
//     console.log(bst.search(1)); // 'one'
//     console.log(bst.contains('three'));// true


    // insert(key, value) {
    //     if (!this.root) {
    //         this.root = new Node(key, value)
    //         return
    //     }
    //     const newNode = new Node(key, value)
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
    //             currentNode.right = newNode
    //             newNode.parentNode = currentNode
    //         }
    //     }
    //
    //     function goLeft(currentNode) {
    //         if (currentNode.left) {
    //             chooseDirection(currentNode.left)
    //         } else {
    //             currentNode.left = newNode
    //             newNode.parentNode = currentNode
    //         }
    //     }
    //     return this
    // }

}())
