// Utility functions

// Distance from origin
function distance(x0, y0, z0, x1, y1, z1) {
    return Math.sqrt(Math.pow(x1-x0,2) + Math.pow(y1-y0,2) + Math.pow(z1-z0));
}

function unitVector(x, y, z) {
    var length = distance(0, 0, 0, x, y, z);
    return [x/length, y/length, z/length];
}