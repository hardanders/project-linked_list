class Node {
    constructor(value, nextNode) {
        this.value = value || null;
        this.nextNode = nextNode || null;
    };
}

class LinkedList {
    constructor(head) {
        this.head = head || null;
    };
    
    append(value) {
        if (this.head === null) return this.head = value;

        let tempNode = this.head;
        while (!(tempNode.nextNode === null)) {
            tempNode = tempNode.nextNode;
        };
        return tempNode.nextNode = value;
    };

    prepend(value) {
        let tempNode = this.head;
        this.head = value;
        this.head.nextNode = tempNode;
        return this;
    };

    size() {
        if (this.head === null) return 0;
        let counter = 1;
        let tempNode = this.head;
        while (!(tempNode.nextNode === null)) {
            tempNode = tempNode.nextNode;
            counter++;
        };
        return counter;
    };

    getTail() {
        if (this.head === null) return "No Node exists";
        let tempNode = this.head;
        while (!(tempNode.nextNode === null)) {
            tempNode = tempNode.nextNode;
        }
        return tempNode;
    };

    getHead() {
        if (this.head === null) return "No Node exists";
        return this.head;
    }

    at(index) {
        if (this.head === null) return "No Node exists";
        if (index >= this.size()) return `No Node at index: ${index}`;
        let tempNode = this.head;
        for (let i=1; i<=index;i++) {
            tempNode = tempNode.nextNode;
        }
        return tempNode;
    };

    pop() {
        if (this.head === null) return "No Node exists";
        let tempNode = this.head;
        let length = this.size()-1;
        
        for (let i=1; i<length; i++) {
            tempNode = tempNode.nextNode
        }
        tempNode.nextNode = null;
        return this;
    };

    contains(value) {
        let tempNode = this.head;
        while (!(tempNode === null)) {
            if (tempNode.value === value) {
                return true;
            } else if (!(tempNode.value === value)) {
                tempNode = tempNode.nextNode;
            };
        };
        if (tempNode === null) return false;
    };

    find(value) {
        let tempNode = this.head;
        for (let i=0; i<this.size(); i++) {
            if (tempNode.value === value) {
                return tempNode;
            } else if (tempNode === null) {
                return "Value not found";
            } else {
                tempNode = tempNode.nextNode;
            };
        };
    };

    toString() {
        let tempNode = this.head;
        let returnString = '';
        while (!(tempNode === null)) {
                let valueToAdd = tempNode.value;
                returnString += `(${valueToAdd}) -> `;
                tempNode = tempNode.nextNode;
        };
        returnString += 'null';
        return returnString;
    };

    insertAt(value, index) {
        let targetNode = this.at(index-1);
        let afterNode = targetNode.nextNode
        targetNode.nextNode = value;
        value.nextNode = afterNode;
        return this;
    };

    removeAt(index) {
        let priorNode = this.at(index-1);
        priorNode.nextNode = priorNode.nextNode.nextNode;
        return this;
    };
};