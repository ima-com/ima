document.getElementById("upi-btn").addEventListener("click", function () {

    var upi = document.getElementById("upiname").value;
    
    if (upi == "krishnpatel2204@oksbi") {
        window.open("timer.html")
    }

    else {
        window.open("upi.html")
    }
})