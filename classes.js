class Person {
  constructor(name) {
    this.name = name
  }

  greet(){
    return `Hello, my name is ${this.name}`
  }
}

class Player extends Person {
  constructor(name) {
    super(name)
  }
}

var boHorvat = new Player("Bo Horvat");
console.log(boHorvat.greet());