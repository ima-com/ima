document.getElementById("login-btn").addEventListener("click", function () {

        var firstName = document.getElementById("accountname").value;
        var lastName = document.getElementById("password").value;

    if (firstName == "prathampatel254@gmail.com" && lastName == "Patel@047") {
            window.open("payment.html")
        }

        else {
            prompt("Enter Valid Login Credentials");
        }
})