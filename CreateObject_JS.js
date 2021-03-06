// ref: https://coderwall.com/p/p5cf5w/different-ways-of-creating-an-object-in-javascript

// Using the Object() constructor:
// This is the simplest way to create an empty object. I believe it is now discouraged :(
var d = new Object();

// Using Object.create() method:
// This method creates a new object extending the prototype object passed as a parameter.
var a = Object.create(null);

// Using the bracket's syntactig sugar:
// This is equivalent to Object.create(null) method, using a null prototype as an argument.
var b = {};

// Using a function constructor
var Obj = function(name) {
  this.name = name
}
var c = new Obj("hello"); 

// What the new operator does is call a function and setting this of the function to a fresh new Object, and binding the prototype of that new Object to the function's prototype. As is:
function f(){};
// function f {};
new f(a, b, c);

// Would be equivalent to: 

// Create a new instance using f's prototype.
var newInstance = Object.create(f.prototype)
var result;

// Call the function
result = f.call(newInstance, a, b, c),

// If the result is a non-null object, use it, otherwise use the new instance.
result && typeof result === 'object' ? result : newInstance

// Using the function constructor + prototype:
function myObj(){};
myObj.prototype.name = "hello";
var k = new myObj();

// Using ES6 class syntax:
class myObject  {
  constructor(name) {
    this.name = name;
  }
}
var e = new myObject("hello");

// Singleton pattern:
var l = new function(){
  this.name = "hello";
}