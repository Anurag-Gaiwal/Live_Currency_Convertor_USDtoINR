function convert(){
    event.preventDefault();
    let amt = document.getElementById("amt");
    let msg = document.getElementById("msg");

    if(amt.value == ""){
        alert("Please Enter Amount");
        msg.innerHTML = "";
        amt.focus;
        return;
    }

    let d = parseFloat(amt.value);
    let url = "https://api.exchangerate-api.com/v4/latest/USD"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let doller = data.rates.INR;
        let rupees = doller * d;
        let ans = "$"+ d +" = \u20B9" + rupees.toFixed(2);
        msg.innerHTML = ans;

    })
    .catch(err => alert("issue : " + err))
}