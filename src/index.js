import './styles.css';
import './js/menu';
import './js/apartments';

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

const User = function (name, age) {
  // [[environment]]: { this: {} }
  // this = {}
  this.name = name;
  // this = { name: name }
  this.age = age;
  // this = { name: name, age: age }
};

const user = new User('John', 20);
console.log(user);
