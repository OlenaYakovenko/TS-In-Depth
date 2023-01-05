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
