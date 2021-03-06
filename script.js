class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor(head, size) {
    this.head = null;
    this.size = 0;
  }

  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  addLast(data) {
    if (!this.head) return (this.head = node);

    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertAt(data, index) {
    if (index < 0 && index > this.size) return;
    if (index === 0) this.addFirst(data);

    // 13,2,10,23

    let current = this.head;
    let previous;
    let counter = 0;
    let node = new Node(data);

    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  getAt(index) {
    if (index < 0 && index > this.size) return "number not found";
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        return current.data;
      }
      current = current.next;
      count++;
    }
  }

  removeAt(index) {
    if (index < 0 && index > this.size) return;
    let current = this.head;

    if (index === 0) return this.removeFirst();

    let previous;
    let count = 0;

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  getFirst() {
    return this.head.data;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.data;
  }

  removeFirst() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  removeLast() {
    this.removeAt(this.size);
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return console.log(arr);
  }
}

const demo = new LinkList();

demo.addFirst(10);
demo.addFirst(2);
demo.addFirst(13);
demo.addLast(23);
demo.insertAt(24, 2);
// demo.getAt(100);
demo.removeAt(1);
demo.removeFirst();
demo.removeLast();
// demo.clear();

demo.print();

console.log(demo.getLast(), demo.size);
