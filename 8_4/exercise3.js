// Crie uma classe com o nome Dog que possua o atributo name. Inicialize o valor de name com o valor "" (string vazia). Não deve ser possível definir o valor de name durante a instanciação da classe.

const assert = require('assert')

class Dog {
  constructor() {
    this.name = "";
  }
}

let dog = new Dog("Dog!!!")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog instanceof Dog)
assert.equal(dog.name, "")
dog.name = "Peter"
assert.equal(dog.name, "Peter")
