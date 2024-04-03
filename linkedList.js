class ListNode {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    //create first node
    insertFirst(data) {
        this.head = new ListNode(data, this.head);
        this.size++;
    }

    //create last node
    insertLast(data) {
        let node = new ListNode(data);
        let current = this.head;
        if(!current) {
            this.head = node;
        } else {
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //insert at index
    insertAtIndex(index, data) {

        if(index<1 || index>this.size+1) {
            return;
        }
        if(index == 1) {
            this.insertFirst(data);
        } else if(index == this.size+1) {
            this.insertLast(data);
        }
        else {
            let node = new ListNode(data);
            let previous,current;
            current = this.head;
            let count = 0;
            while(count<index-1) {
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = node;
            node.next = current;
            this.size++;
            
        }
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        if(index == 0 || index > this.size) {
            return null;
        }
        if(index == 1) {
            return current.data;
        }

        while(count<index-1) {
            current = current.next;
            count++;
        }
        return current.data;
    }


    //remove at index
    removeAt(index) {
        let previous, current;
        current = this.head;
        let count = 0;
        if(index == 0 || index > this.size) {
            return null;
        }
        if(index == 1) {
            this.head = current.next;
        } else {
            while(count < index-1){
                previous = current;
                current = current.next;
                count++;
            }
            previous.next = current.next;
        }
        this.size--;
    }


    //print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


    //clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
}

let ll = new LinkedList();

ll.insertFirst(1);
ll.insertAtIndex(2, 2);
ll.insertAtIndex(3, 3);
ll.insertLast(4);

ll.removeAt(4);

ll.printListData();
