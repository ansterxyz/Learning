let point1 = { x: 0, y: 0 };
let point2 = { x: 3, y: 4 };

function calculate_distance(point1, point2) {
    return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
}

console.log(calculate_distance(point1, point2));
