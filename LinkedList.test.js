const LinkedList = require("./LinkedList.js");

describe("length", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.append("a");
    linkedList.append("b");
    linkedList.append("c");
    linkedList.append("d");
    linkedList.append("e");
    linkedList.append("f");
  });

  it("Must return 0 for an empty list", () => {
    linkedList.delete("a");
    linkedList.delete("b");
    linkedList.delete("c");
    linkedList.delete("d");
    linkedList.delete("e");
    linkedList.delete("f");
    expect(linkedList.length()).toEqual(0);
  });

  it("Must return the number of elements in the list", () => {
    expect(linkedList.length()).toEqual(6);
  });

  describe("append", () => {
    it("Must adding an element to the end of the list", () => {
      linkedList.append("g");
      expect(linkedList.length()).toBe(7);
      expect(linkedList.get(6)).toBe("g");
    });

    it("Must not append a list with incorrect data type", () => {
      const example1 = () => linkedList.append(1);
      const example2 = () => linkedList.append("123");
      const example3 = () => linkedList.append(false);
      const example4 = () => linkedList.append(undefined);
      const example5 = () => linkedList.append(null);
      const example6 = () => linkedList.append(true);

      expect(example1).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(example2).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(example3).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(example4).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(example5).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(example6).toThrow(
        "Error. Wrong input data type, expected type char."
      );
      expect(linkedList.length()).toBe(6);
    });
  });

  describe("insert", () => {
    it("Must inserting an element at any position in the list", () => {
      linkedList.insert("h", 1);
      expect(linkedList.get(1)).toBe("h");
      expect(linkedList.get(2)).toBe("b");
      expect(linkedList.get(3)).toBe("c");
      expect(linkedList.get(4)).toBe("d");
      expect(linkedList.get(5)).toBe("e");
      expect(linkedList.get(6)).toBe("f");
    });
    it("Trow an error when invalid index", () => {
      const example1 = () => linkedList.insert("h", -1);
      expect(example1).toThrow("Error. Wrong invalid index");
      const example2 = () => linkedList.insert("h", 15);
      expect(example2).toThrow("Error. Wrong invalid index");
    });
  });

  describe("delete", () => {
    it("Must removing an element from the list at the specified position by index", () => {
      linkedList.delete(2);
      expect(linkedList.get(2)).toBe("d");
      expect(linkedList.get(3)).toBe("e");
      expect(linkedList.get(4)).toBe("f");
      expect(linkedList.length()).toBe(5);
    });
    it("Must removing an element from the list at the specified position by character", () => {
      linkedList.delete("d");
      expect(linkedList.get(3)).toBe("e");
      expect(linkedList.get(4)).toBe("f");
      expect(linkedList.length()).toBe(5);
    });
    it("Must not delete an element from the list with wrong index", () => {
      const example1 = () => linkedList.delete(-1);
      expect(example1).toThrow("Error. Wrong invalid index");
      const example2 = () => linkedList.delete(15);
      expect(example2).toThrow("Error. Wrong invalid index");
    });
  });

  describe("deleteAll", () => {
    it("Must removing an element from the list at the specified position by character", () => {
      linkedList.deleteAll("d");
      expect(linkedList.get(3)).toBe("e");
      expect(linkedList.get(4)).toBe("f");
      expect(linkedList.length()).toBe(5);
    });
    it("Must no changes to the list when delete not existing character", () => {
      linkedList.deleteAll("z");
      expect(linkedList.get(0)).toBe("a");
      expect(linkedList.get(1)).toBe("b");
      expect(linkedList.get(2)).toBe("c");
      expect(linkedList.get(3)).toBe("d");
      expect(linkedList.get(4)).toBe("e");
      expect(linkedList.get(5)).toBe("f");
      expect(linkedList.length()).toBe(6);
    });
  });

  describe("get", () => {
    it("Must holding a list item at an arbitrary position", () => {
      expect(linkedList.get(0)).toBe("a");
      expect(linkedList.get(1)).toBe("b");
      expect(linkedList.get(2)).toBe("c");
      expect(linkedList.get(3)).toBe("d");
      expect(linkedList.get(4)).toBe("e");
      expect(linkedList.get(5)).toBe("f");
      expect(linkedList.length()).toBe(6);
    });
    it("Must genetare an error if index is wrong", () => {
      const example1 = () => linkedList.get(-1);
      expect(example1).toThrow("Error. Wrong invalid index");
      const example2 = () => linkedList.get(15);
      expect(example2).toThrow("Error. Wrong invalid index");
    });
  });

  describe("clone", () => {
    it("Must clone a list", () => {
      const cloneLinkedList = linkedList.clone();
      expect(cloneLinkedList.get(0)).toBe("a");
      expect(cloneLinkedList.get(1)).toBe("b");
      expect(cloneLinkedList.get(2)).toBe("c");
      expect(cloneLinkedList.get(3)).toBe("d");
      expect(cloneLinkedList.get(4)).toBe("e");
      expect(cloneLinkedList.get(5)).toBe("f");
      expect(cloneLinkedList.length()).toBe(6);
    });
  });

  describe("reverse", () => {
    it("Must reversed a list", () => {
      linkedList.reverse();
      expect(linkedList.get(5)).toBe("a");
      expect(linkedList.get(4)).toBe("b");
      expect(linkedList.get(3)).toBe("c");
      expect(linkedList.get(2)).toBe("d");
      expect(linkedList.get(1)).toBe("e");
      expect(linkedList.get(0)).toBe("f");
      expect(linkedList.length()).toBe(6);
    });
  });

  describe("findFirst", () => {
    it("Must find the first element in the list equal to the one searched for and return its position", () => {
      expect(linkedList.findFirst("a")).toBe(0);
      expect(linkedList.findFirst("b")).toBe(1);
      expect(linkedList.findFirst("c")).toBe(2);
    });
    it("Must return -1 when the item you are looking for is missing from the list", () => {
      expect(linkedList.findFirst("z")).toBe(-1);
    });
  });

  describe("findLast", () => {
    it("Must find the last element in the list equal to the one searched for and return its position", () => {
      linkedList.append("b");
      expect(linkedList.findLast("b")).toBe(6);
      expect(linkedList.length()).toBe(7);
    });
    it("Must return the last element in initial list", () => {
      expect(linkedList.findLast("f")).toBe(5);
      expect(linkedList.length()).toBe(6);
    });
    it("Must return -1 when the item you are looking for is missing from the list ", () => {
      expect(linkedList.findLast("z")).toBe(-1);
    });
  });

  describe("clear", () => {
    it("Must clearing the list", () => {
      linkedList.clear();
      expect(linkedList.length()).toBe(0);
    });
  });

  describe("extend", () => {
    it("Must takes another list and adds all elements of the latter to the current list", () => {
      const linkedList2 = new LinkedList();
      linkedList2.append("g");
      linkedList2.append("h");
      linkedList2.append("i");
      linkedList.extend(linkedList2);
      expect(linkedList.length()).toEqual(9);
      expect(linkedList.get(0)).toEqual("a");
      expect(linkedList.get(1)).toEqual("b");
      expect(linkedList.get(2)).toEqual("c");
      expect(linkedList.get(3)).toEqual("d");
      expect(linkedList.get(4)).toEqual("e");
      expect(linkedList.get(5)).toEqual("f");
      expect(linkedList.get(6)).toEqual("g");
      expect(linkedList.get(7)).toEqual("h");
      expect(linkedList.get(8)).toEqual("i");
    });
  });
});
