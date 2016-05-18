class Person {
  constructor(name) {
    this.name = name
  }

  fromParent() {
    return "I am from parent";
  }

  greet(){
    return `Hello, my name is ${this.name}`
  }
}

class Player extends Person {
  constructor(name) {
    super(name)
  }

  fromParent(){
    return "Calling parent... " + super.fromParent()
  }
}

var boHorvat = new Player("Bo Horvat");
console.log(boHorvat.greet());
console.log(boHorvat.fromParent());