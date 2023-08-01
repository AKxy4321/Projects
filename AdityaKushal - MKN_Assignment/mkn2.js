function Vform(event) {
    event.preventDefault();
    const vname = Vname();
    const vnum = Vnum();
    const vemail = Vemail();
    const vphone = Vphone();
    if (!vname || !vnum || !vemail || !vphone) {
        alert("Please fix errors highlighted before submitting");
        return false;
    }
    showOrderDetails();
    return true;
}
function Vname() {
    let name = document.getElementById("n").value;
    let nam = document.getElementById("nvalidation");
    if (name.trim() == "") {
        nam.innerHTML = "Please enter your name";
        return false;
    }
    nam.innerHTML="";
        return true;
}
function Vnum() {
    let num = document.getElementById("num").value;
    let numb = document.getElementById("numvalidation");
    if (num < 0 || num == 0) {
        numb.innerHTML = "Number cannot be 0 or negative";
        return false;
    }
    numb.innerHTML = "";
        return true;
    }
    function Vemail() {
        em = document.getElementById("emailval");
        const email = document.getElementById("ema").value;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Regex for email validation
        const domainRegex = /\.(com|edu|org|net)$/; // Regex for domain validation
        if (!emailRegex.test(email) || !domainRegex.test(email)) {
            em.innerHTML = "Invalid email address. Please enter a valid email ID. Accepted domains are .com, .edu, .org & .net";
            return false;
        }
        em.innerHTML = "";
        return true;
    }
    function Vphone()
    {
        ph = document.getElementById("phoneval");
        const pon = document.getElementById("phonel").value; 
        const phoneregex = /\+(?:[0-9]){6,14}[0-9]$/;
        if(!phoneregex.test(pon))
        {
            ph.innerHTML = "Invalid phone number";
            return false;
        }
        ph.innerHTML = "";
        return true;
    }
    function showOrderDetails() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();
    const milkQty = document.getElementById("milkQty").value;
    const darkQty = document.getElementById("darkQty").value;

    const orderDetailsDiv = document.getElementById("ODETAILS");
    orderDetailsDiv.innerHTML = `Service, Experience Booking Date: ${formattedDateTime}<br>
        Product Bought Date: ${formattedDateTime}<br>
        Milk Chocolate Qty: ${milkQty}<br>
        Dark Chocolate Qty: ${darkQty}<br>`;
}


//ends.with("@gmail.com");