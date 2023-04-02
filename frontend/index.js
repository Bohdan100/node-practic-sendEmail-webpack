import anna from "./js/anna";
import veronika from "./js/veronika";
// import "./css/andriy.css";
import "./css/anna.scss";

console.log(anna);
console.log(veronika);

class User {
  #name;
  constructor(name) {
    this.#name = name;
  }

  hello() {
    console.log(this.#name);
  }
}

const mykola = new User("Mykola");
mykola.hello();
