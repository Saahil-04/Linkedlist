import Node from './node.js'

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
        }
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = new Node(value);
    }

    prepend(value) {
        let newNode = new Node(value);

        newNode.nextNode = this.head;

        this.head = newNode;
    }

    size() {
        if (this.head === null) return 0;

        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    getHead() {
        return this.head
    }

    tail() {
        if (this.head === null) return null
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (this.head === null) return null;
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            count++;
            current = current.nextNode
        }
        return null;
    }

    pop() {
        if (this.head === null) return null;

        if (this.head.nextNode === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null && current.nextNode.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = null;

    }

    contains(value) {
        if (this.head === null) return false;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode
        }
        return false;
    }

    find(value) {
        if (this.head === null) return null;

        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }

    toString(){
        if(this.head === null) return "null";
        let current = this.head;
        let str = "";
        while(current !== null){
            str += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        str+="null" ;
        return str;
    }
}