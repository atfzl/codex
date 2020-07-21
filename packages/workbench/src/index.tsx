import { Hello } from "./foobar";

function foo() {
  if (true === true) {
    console.log(Hello());
  } else {
    console.log("else");
  }

  for (let i = 0; i < 5; ++i) {
    console.log("i =", i);
  }
}

foo();

let socket = new WebSocket("ws://localhost:8090");

socket.onopen = function(e) {
  socket.send("My name is John");
};
