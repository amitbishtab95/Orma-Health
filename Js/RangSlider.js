var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    // alert("hii")
    output.innerHTML = this.value;

    var x = document.getElementById("myRange").value;
    // console.log(x)
    // alert("hi");
    var firstvalue = 19 * x;
    var secondvalue = 62 * 12 * x;
    var thirdvalue = 51 * 12 * x;

    document.getElementById("firstValue").innerHTML = firstvalue;
    document.getElementById(
        "secondValue").innerHTML = secondvalue;
    document.getElementById("thirdValue").innerHTML =
        thirdvalue;

    var tr = firstvalue + secondvalue + thirdvalue;
    document.getElementById("totalRevenue")
        .innerHTML = tr;

    var feevalue = 30 * x;
    document.getElementById("feeValue").innerHTML = feevalue;
    document
        .getElementById("profitValue").innerHTML = tr - feevalue;


}


// const calculate = () => {


// };
