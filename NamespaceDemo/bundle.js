var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateFee = calculateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var result1 = Utility.maxBooksAllowed(30);
console.log(result1);
var util = Utility.Fees;
var result2 = util.calculateFee(10);
console.log(result2);
