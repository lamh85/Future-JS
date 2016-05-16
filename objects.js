var x = 5;
var y = 3;
var myObject = {x, y}

var computedObjectName = {
  [x + y]: "foo"
}

var object1 = {
  hello: "world",
  foo: "bar"
}

var object2 = {
  foo: "another",
  wrist: "watch"
}

var object3 = {
  ...object1,
  ...object2
}