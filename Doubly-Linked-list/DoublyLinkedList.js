const Node = require('./Node.js')

class DoublyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    push(val) {
        let node = new Node(val)

        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = this.tail.next
        }
        this.size++
    }

    pop() {
        if(this.isEmpty()) {
            console.log("the List is empty")
            return null;
        }
        const node = this.tail;
        if (this.tail === this.head) {
                this.head = null
                this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.size--
            return node
    }

    shift() {
        if(this.isEmpty()) {
            console.log("the List is empty")
            return null;
        }
            const node = this.head
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
            this.head = this.head.next
            this.head.prev = null
            }
            this.size--
            return node
    }

    unshift(val) {
        const node = new Node(val)
        if (this.isEmpty()){
            this.head = node
            this.tail = node
        } else { 
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    get(index) {
        if (index < 0 || index >= this.size) return null
        let node = this.head
        for ( let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }

    set(index, val) {
        const node = this.get(index)
        if (node) {
            node.data = val
        } 
    }

    insert(index, val) {
        if (index < 0 || index > this.size) {
            return false
        } 
        if (index === 0) {
            this.unshift(val)
            return true
        }
        if (index === this.size) {
            this.push(val)
            return true
        }

        const node = new Node()
        const currNode = this.get(index - 1)
        node.next = currNode.next
        currNode.next = node
        node.prev = currNode
        node.data = val
        if (node.next) {
            node.next.prev = node
        }
        this.size++
        return true
    }

    remove(index) {
        if ( index < 0 || index >= this.size) {
            return null
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.size - 1) {
            return this.pop()
        }

        const currNode = this.get(index)
        currNode.prev.next = currNode.next
        if (currNode.next) {
            currNode.next.prev = currNode.prev
        }
        this.size--
        return currNode
    }

    display() {
        if(!this.isEmpty()) {
            let curr = this.head

            while (curr !== null) {
                console.log(curr.data)
                curr = curr.next
            }
        } else {
            console.log("I can not display empty list")
        }
    }
}

module.exports = DoublyLinkedList;