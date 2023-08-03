function calculator()
{
    a = document.getElementById("number1");
    b = document.getElementById("number2");
    c = document.getElementById("sel");
    d = document.getElementById("result");
    switch(c.value)
    {
        case 'x':
            d.innerHTML = a.value + " x " + b.value + " = " + (parseInt(a.value) * parseInt(b.value)) + "<br>";
            break;

        case '÷':
            d.innerHTML = a.value + " ÷ " + b.value + " = " + (parseInt(a.value) / parseInt(b.value)) + "<br>";
            break;

        case '+':
            d.innerHTML = a.value + " + " + b.value + " = " + (parseInt(a.value) + parseInt(b.value)) + "<br>";
            break;

        case '-':
            d.innerHTML = a.value + " - " + b.value + " = " + (parseInt(a.value) - parseInt(b.value)) + "<br>";
            break;
    }
}

