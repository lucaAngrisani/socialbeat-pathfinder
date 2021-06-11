import { RoomExt } from '../models/roomExt';

export const testMock: {
  jsonInput: string;
  objInput: string;
  idInput: number;
  result: RoomExt[];
}[] = [
  {
    jsonInput: '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "east":7, "objects": [] },{ "id": 2, "name": "Dining Room", "north": 5, "south": 1, "west": 3,"east": 4, "objects": [] },{ "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife"} ] },{ "id": 4, "name": "Sun Room","west":2, "north":6, "south":7,"objects": [] },{ "id": 5, "name": "Bedroom","south":2, "east":6, "objects": [{"name": "Pillow" }] },{ "id": 6, "name": "Bathroom","west":5, "south":4, "objects": [] },{ "id": 7, "name": "Living room","west":1, "north":4, "objects": [{"name": "Potted Plant" }] }]}',
    objInput: '[{ "name": "Pillow" },{ "name": "Knife" },{ "name": "Potted Plant" }]',
    idInput: 4,
    result: [{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[]},{"id":6,"name":"Bathroom","west":5,"south":4,"objects":[]},{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[],"coord":{"x":0,"y":0},"visitedN":true},{"id":7,"name":"Living room","west":1,"north":4,"objects":[{"name":"Potted Plant"}]},{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[],"coord":{"x":0,"y":0},"visitedN":true,"visitedS":true},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[]},{"id":5,"name":"Bedroom","south":2,"east":6,"objects":[{"name":"Pillow"}]},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[],"coord":{"x":-1,"y":0},"visitedN":true},{"id":1,"name":"Hallway","north":2,"east":7,"objects":[]},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[],"coord":{"x":-1,"y":0},"visitedN":true,"visitedS":true},{"id":3,"name":"Kitchen","east":2,"objects":[{"name":"Knife"}]}]
  },
  {
    jsonInput: '{"rooms": [{ "id": 1, "name": "Hallway", "north": 2, "east":7, "objects": [] },{ "id": 2, "name": "Dining Room", "north": 5, "south": 1, "west": 3,"east": 4, "objects": [] },{ "id": 3, "name": "Kitchen","east":2, "objects": [ { "name": "Knife"} ] },{ "id": 4, "name": "Sun Room","west":2, "north":6, "south":7,"objects": [] },{ "id": 5, "name": "Bedroom","south":2, "east":6, "objects": [{"name": "Pillow" }] },{ "id": 6, "name": "Bathroom","west":5, "south":4, "objects": [] },{ "id": 7, "name": "Living room","west":1, "north":4, "objects": [{"name": "Potted Plant" }] }]}',
    objInput: '[{ "name": "Pillow" },{ "name": "Knife" }]',
    idInput: 4,
    result: [{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[]},{"id":6,"name":"Bathroom","west":5,"south":4,"objects":[]},{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[],"coord":{"x":0,"y":0},"visitedN":true},{"id":7,"name":"Living room","west":1,"north":4,"objects":[]},{"id":4,"name":"Sun Room","west":2,"north":6,"south":7,"objects":[],"coord":{"x":0,"y":0},"visitedN":true,"visitedS":true},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[]},{"id":5,"name":"Bedroom","south":2,"east":6,"objects":[{"name":"Pillow"}]},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[],"coord":{"x":-1,"y":0},"visitedN":true},{"id":1,"name":"Hallway","north":2,"east":7,"objects":[]},{"id":2,"name":"Dining Room","north":5,"south":1,"west":3,"east":4,"objects":[],"coord":{"x":-1,"y":0},"visitedN":true,"visitedS":true},{"id":3,"name":"Kitchen","east":2,"objects":[{"name":"Knife"}]}]
  }
];
