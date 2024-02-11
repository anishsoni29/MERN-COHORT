//enums --> slightly readable and more maintainable.
//enums --> enumeratons --> they'll never reach the JS code.
//at the end it's just creating an object with key value pairs.

type KeyInput = "up" | "down" | "left" | "right";

//makes things slighly cleaner to read as compared to the type where intersection and unions are present.
enum Directions {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}

function doSomething1(keyPressed: Directions) {
  //do something with the enums!
}
doSomething1(Directions.Up);
doSomething1(Directions.Down);
