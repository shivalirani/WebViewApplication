document.write("yes")
var user_name = document.getElementById("name");
document.getElementById("btn-alert").addEventListener("click", function(){
            var value=user_name.value.trim();
            if(!value)
                alert("Name Cannot be empty!");
            else
                alert("Hello, " + value + "!\nGreetings From GeeksforGeeks.");
        });