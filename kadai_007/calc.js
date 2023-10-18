(function () {

    let num = 30;

    if (num % 15 === 0) {
        console.log("3と5の倍数です");
        return;
    }

    if (num % 3 === 0) {
        console.log("3の倍数です");
        return;
    }

    if (num % 5 === 0) {
        console.log("5の倍数です");
        return;
    }

})();