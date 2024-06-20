
class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

    removeItem(itemToRemove) {
      //* indexOf + splice
      const indexToDelete = this.#items.indexOf(itemToRemove);

      //* -1 - результат роботи методу indexOf у випадку коли такого елементу в масиві не існує
      if (indexToDelete !== -1) {
        this.#items.splice(indexToDelete, 1);  //* (з якого індексу почати видалення, скільки елементів будемо видаляти)
      }
    }
}




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
