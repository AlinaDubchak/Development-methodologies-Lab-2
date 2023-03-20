class LinkedList {
  arr = [];
  missEl = -1;

  length = () => this.arr.length;

  append = (element) => {
    const isStr = typeof element;
    if (element && isStr && element.length === 1) {
      this.arr.push(element);
    } else throw new Error("Error. Wrong input data type, expected type char.");
  };

  insert = (element, index) => {
    if (index < 0 || index > this.arr.length || this.arr[index] == undefined) {
      throw new Error("Error. Wrong invalid index");
    }
    this.arr.splice(index, 0, element);
  };

  delete = (index) => {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Error. Wrong invalid index");
    }
    return this.arr.splice(index, 1)[0];
  };

  deleteAll = (data) => {
    this.arr = this.arr.filter((element) => element !== data);
  };

  get = (index) => {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Error. Wrong invalid index");
    }
    return this.arr[index];
  };

  clone = () => {
    const newList = new LinkedList();
    for (let i = 0; i < this.arr.length; i++) {
      newList.append(this.arr[i]);
    }
    return newList;
  };

  reverse = () => {
    this.arr.reverse();
  };

  findFirst = (element) => {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === element) {
        return i;
      }
    }
    return this.missEl;
  };

  findLast = (data) => {
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (this.arr[i] === data) {
        return i;
      }
    }
    return this.missEl;
  };

  clear = () => (this.arr = []);

  extend(arr) {
    for (let i = 0; i < arr.length(); i++) {
      this.arr.push(arr.get(i));
    }
    return this.arr;
  }
}

module.exports = LinkedList;
