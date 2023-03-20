class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.misEl = -1;
  }

  length = () => {
    return this.size;
  };

  append = (element) => {
    if (typeof element == "string" && element.length === 1) {
      const node = new Node(element);
      if (!this.head) this.head = node;
      else this.tail.next = node;
      node.next = this.head;
      this.tail = node;
      this.size++;
    } else throw new Error("Error. Wrong input data type, expected type char.");
  };

  insert = (element, index) => {
    if (typeof element === "string" && element.length === 1)
      if (index < 0 || index > this.size) {
        throw new Error("Error. Wrong invalid index");
      }
    const node = new Node(element);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.tail = node;
    } else if (index === this.size) {
      this.tail.next = node;
      this.tail = node;
      node.next = this.head;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      node.next = current.next;
      current.next = node;
    }
    this.size++;
  };

  delete = (index) => {
    if (index < 0 || index >= this.size) {
      throw new Error("Error. Wrong invalid index");
    }
    let deletedItem = null;
    if (this.size === 1) {
      deletedItem = this.head.data;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedItem = this.head.data;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      let i = 0;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      deletedItem = current.next.data;
      current.next = current.next.next;
      if (index === this.size - 1) this.tail = current;
    }
    this.size--;
    return deletedItem;
  };

  deleteAll = (data) => {
    let current = this.head;
    let prev = this.tail;
    let i = 0;
    while (i < this.size) {
      if (current.data === data) {
        if (i === 0) {
          this.head = this.head.next;
          this.tail.next = this.head;
          prev = this.tail;
        } else {
          prev.next = current.next;
          if (i === this.size - 1) this.tail = prev;
        }
        this.size--;
        i--;
      } else {
        prev = current;
      }
      current = current.next;
      i++;
    }
  };

  get = (index) => {
    if (index < 0 || index >= this.size) {
      throw new Error("Error. Wrong invalid index");
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.data;
  };

  clone = () => {
    const newList = new CircularLinkedList();
    let current = this.head;
    let i = 0;
    while (i < this.size) {
      newList.append(current.data);
      current = current.next;
      i++;
    }
    return newList;
  };

  reverse = () => {
    let current = this.head;
    let prev = this.tail;
    let i = 0;
    while (i < this.size) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }
    this.head = prev;
    if (this.size > 0) this.tail = this.head.next;
  };

  findFirst = (element) => {
    let current = this.head;
    let i = 0;
    while (i < this.size) {
      if (current.data === element) {
        return i;
      }
      current = current.next;
      i++;
    }
    return this.misEl;
  };

  findLast = (data) => {
    let current = this.head;
    let i = 0;
    while (i < this.size) {
      if (current.data === data) this.misEl = i;
      current = current.next;
      i++;
    }
    return this.misEl;
  };

  clear = () => {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };

  extend(arr) {
    let current = arr.head;
    let i = 0;
    while (i < arr.size) {
      this.append(current.data);
      current = current.next;
      i++;
    }
  }
}

module.exports = CircularLinkedList;
