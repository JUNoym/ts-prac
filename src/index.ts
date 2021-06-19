import World from './world'

const root = document.getElementById("root");
const world = new World("反映されるかテスト");

world.sayHello(root)