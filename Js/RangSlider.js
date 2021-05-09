var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    // alert("hii")
    output.innerHTML = this.value;

    var x = document.getElementById("myRange").value;
    // console.log(x)
    // alert("hi");
    let dollarUSLocale = Intl.NumberFormat('en-US');
    var firstvalue = 19 * x;
    var secondvalue = 62 * 12 * x;
    var thirdvalue = 51 * 12 * x;

    document.getElementById("firstValue").innerHTML = "$" + dollarUSLocale.format(firstvalue);
    document.getElementById(
        "secondValue").innerHTML = "$" + dollarUSLocale.format(secondvalue);
    document.getElementById("thirdValue").innerHTML =
        "$" + dollarUSLocale.format(thirdvalue);

    var tr = firstvalue + secondvalue + thirdvalue;
    document.getElementById("totalRevenue")
        .innerHTML = "$" + dollarUSLocale.format(tr);

    var feevalue = 30 * x;
    document.getElementById("feeValue").innerHTML = "$" + dollarUSLocale.format(feevalue);
    document
        .getElementById("profitValue").innerHTML = "$" + dollarUSLocale.format(tr - feevalue);


}


// const calculate = () => {


// };
