var done = false;

const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");

num0.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        return;
    }

    if (done) {
        document.getElementById("inp").value = "0";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '0';
}

num1.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '1';
    }

    if (done) {
        document.getElementById("inp").value = "1";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '1';
}

num2.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '2';
    }

    if (done) {
        document.getElementById("inp").value = "2";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '2';
}

num3.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '3';
    }

    if (done) {
        document.getElementById("inp").value = "3";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '3';
}

num4.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '4';
    }

    if (done) {
        document.getElementById("inp").value = "4";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '4';
}

num5.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '5';
    }

    if (done) {
        document.getElementById("inp").value = "5";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '5';
}

num6.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '6';
    }

    if (done) {
        document.getElementById("inp").value = "6";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '6';
}

num7.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '7';
    }

    if (done) {
        document.getElementById("inp").value = "7";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '7';
}

num8.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '8';
    }

    if (done) {
        document.getElementById("inp").value = "8";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '8';
}

num9.onclick = function () {
    const inp = document.getElementById("inp").value;

    if (inp == "0") {
        document.getElementById("inp").value = '9';
    }

    if (done) {
        document.getElementById("inp").value = "9";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '9';
}

const dot = document.getElementById(".");

dot.onclick = function () {
        const inp = document.getElementById("inp").value;
    if (inp == "") {
        document.getElementById("inp").value = '0.';
        return;
    }

    if (done) {
        document.getElementById("inp").value = "0.";
        document.getElementById("calc").value = "";
        done = false
    }

    document.getElementById("inp").value = inp + '.';
}

const plus = document.getElementById("+");

plus.onclick = function () {
    if (done) {
        done = false;
    }

    var calc = document.getElementById("calc").value;

    var inp = document.getElementById("inp").value;

    document.getElementById("inp").value = "";

    document.getElementById("calc").value = calc + inp + '+'
}

const minus = document.getElementById("-");

minus.onclick = function () {
    if (done) {
        done = false;
    }

    var calc = document.getElementById("calc").value;

    var inp = document.getElementById("inp").value;

    document.getElementById("inp").value = "";

    document.getElementById("calc").value = calc + inp + '-'
}

const mul = document.getElementById("x");

mul.onclick = function () {
    if (done) {
        done = false;
    }

    var calc = document.getElementById("calc").value;

    var inp = document.getElementById("inp").value;

    document.getElementById("inp").value = "";

    document.getElementById("calc").value = calc + inp + '*'
}

const div = document.getElementById("/");

div.onclick = function () {
    if (done) {
        done = false;
    }
    
    var calc = document.getElementById("calc").value;

    var inp = document.getElementById("inp").value;

    document.getElementById("inp").value = "";

    document.getElementById("calc").value = calc + inp + '/'
}

const enter = document.getElementById("ENTER");

enter.onclick = function () {
    var calc = document.getElementById("calc").value;

    var inp = document.getElementById("inp").value;

    var final = calc + inp;

    var res = eval(final);

    document.getElementById("calc").value = res;

    document.getElementById("inp").value = ""

    done = true;
}

const clear = document.getElementById("clear");

clear.onclick = function () {
    document.getElementById("calc").value = "";

    document.getElementById("inp").value = ""
}

const del = document.getElementById("del");

del.onclick = function () {
    const inp = document.getElementById("inp").value;

    document.getElementById("inp").value = inp.slice(0, -1);
}