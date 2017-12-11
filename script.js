function sayHello() {
  var say = function() { console.log(hello); }
  // Локальная переменная, которая доступна только в замыкании
  var hello = 'Hello, world!';
  return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’