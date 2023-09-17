var add = (function() {
    var a = 10;
    return function(x, y) {
        return x + y + a;
    };
}());

console.log(add(10,2));