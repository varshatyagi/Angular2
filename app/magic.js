var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + 'something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething();
//# sourceMappingURL=magic.js.map