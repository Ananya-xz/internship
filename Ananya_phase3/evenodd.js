function checknumber() {
            
            let input=
            document.getElementById("numberInput").value;
            
            if (input==="") {
                document.getElementById("result").innerHTML = "please enter a number";
                return;
            }
            
            let num=Number(input);
            
            if (num%2===0) {
                document.getElementById("result").innerHTML = num + " is EVEN";
            } else {
                document.getElementById("result").innerHTML = num + " is ODD";
            }
        }