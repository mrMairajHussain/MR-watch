function mycolor() {
    // alert("hello")
    if (document.getElementById('mySelect').value == "black") {
        // alert("Hello World!");
        setTimeout(() => {
            document.getElementById('audio').play();
        }, 300)

        document.getElementById("min-div-i").style.animation = "slide 0.3s";
        document.getElementById("btn-si").setAttribute("style", "background-color: black;color: white; ")
        document.getElementById('strip1').setAttribute("style", "border: 1px solid #000000;background-color: #030303;box-shadow: 3px 1px 25px #000000 inset;");
        document.getElementById("s-c-t-i").setAttribute("style", "border: 1pt solid #000000;background-color: #708770;box-shadow: 1px 1px 5px #000000 inset;");
        document.getElementById("curve-i").setAttribute("style", "background-color: black;");
        document.getElementById("display-i").setAttribute("style", "border: 2px solid #000000;background: linear-gradient(311deg, white -65%, #000000 34%);");
        document.getElementById("curve-b-i").setAttribute("style", "background-color: black;");
        document.getElementById("strip-bottom-i").setAttribute("style", "border: 2px solid #000000;background-color: #030303;box-shadow: 3px 1px 25px #000000 inset;");
        document.getElementsByClassName("holes").setAttribute("style", "border: 0.1pt solid #5f675f;box-shadow: 1px 1px 3px #010101 inset;");
        document.getElementsByClassName("main-button-i").setAttribute("style", "background: linear-gradient(45deg, white -97%, #000000);");

    }
    else if (document.getElementById('mySelect').value == "yellow") {
        // alert("yellow");
        document.getElementById("min-div-i").style.animation = "slide1 0.3s";
        setTimeout(() => {
            document.getElementById('audio').play();
        }, 300)


        document.getElementById("btn-si").setAttribute("style", "background-color: #f4d239;color: black;")
        document.getElementById('strip1').setAttribute("style", "border: 1px solid #e5c738;background-color: #f3d034;box-shadow: 3px 1px 25px #ffe87a inset;");
        document.getElementById("s-c-t-i").setAttribute("style", "border: 1pt solid #e5c738;background-color: #feee99;box-shadow: 1px 1px 5px #e5d795 inset;");
        document.getElementById("curve-i").setAttribute("style", "background-color: #f4d137;");
        document.getElementById("display-i").setAttribute("style", "border: 2px solid #e2c728;background: linear-gradient(311deg, white -65%, #f5d33c 34%);");
        document.getElementById("curve-b-i").setAttribute("style", "background-color: #f3d035;");
        document.getElementById("strip-bottom-i").setAttribute("style", "border: 1px solid #e5c738;background-color: #f3d034;box-shadow: 3px 1px 25px #ffe87a inset;");
        document.getElementById("main-button-i").setAttribute("style", "background: linear-gradient(45deg, white -97%, #cda700);");
        document.getElementsByClassName("holes").setAttribute("style", "border: 0.1pt solid #e8cd2e;box-shadow: 1px 1px 3px #f3d034 inset;");

    }
    else if (document.getElementById('mySelect').value == "cornflowerblue") {
        // alert("cornflowerblue");
        document.getElementById("min-div-i").style.animation = "slide2 0.3s";
        setTimeout(() => {
            document.getElementById('audio').play();
        }, 300)

        document.getElementById("btn-si").setAttribute("style", "background-color: #a3c3eb;color: black;")
        document.getElementById("strip1").setAttribute("style", "border: 1px solid #a0c0ea;background-color: #9fbfe9;box-shadow: 3px 1px 25px #c3dff7 inset;")
        document.getElementById("s-c-t-i").setAttribute("style", "border: 1pt solid #7999c0;background-color: #94b4db;box-shadow: 1px 1px 5px #87a8e1 inset;")
        document.getElementById("curve-i").setAttribute("style", "background-color: #9fbfe9;");
        document.getElementById("display-i").setAttribute("style", "border: 2px solid #7b9bc2;background: linear-gradient(311deg, white -65%, #9fbfe9 34%);")
        document.getElementById("curve-b-i").setAttribute("style", "background-color: #9fbfe9;");
        document.getElementById("strip-bottom-i").setAttribute("style", "border: 1px solid #a0c0ea;background-color: #9fbfe9;box-shadow: 3px 1px 25px #c3dff7 inset;");
        document.getElementById("main-button-i").setAttribute("style", "background: linear-gradient(45deg, white -97%, #a0c0ea);");
        document.getElementsByClassName("holes").setAttribute("style", "box-shadow: 1px 1px 3px #a0c0ea inset;")
    }


    else if (document.getElementById('mySelect').value == "orange") {
        // alert("orange")
        document.getElementById("min-div-i").style.animation = "slide3 0.3s";
        setTimeout(() => {
            document.getElementById('audio').play();
        }, 300)

        document.getElementById("btn-si").setAttribute("style", "background-color: #ff8346;color: black;")
        document.getElementById("strip1").setAttribute("style", "border: 1px solid #ff8448;background-color: #ff8041;box-shadow: 3px 1px 25px #fea87d inset;");
        document.getElementById("s-c-t-i").setAttribute("style", "border: 1pt solid #ff8041;background-color: #ffbea1;box-shadow: 1px 1px 5px #7e7069 inset;");
        document.getElementById("curve-i").setAttribute("style", "background-color: #ff8144;");
        document.getElementById("display-i").setAttribute("style", "border: 2px solid #e97c46;background: linear-gradient(311deg, white -65%, #ff7e3e 34%);");
        document.getElementById("curve-b-i").setAttribute("style", "background-color: #ff8144;");
        document.getElementById("strip-bottom-i").setAttribute("style", "border: 1px solid #ff8448;background-color: #ff8041;box-shadow: 3px 1px 25px #fea87d inset;");
        document.getElementById("main-button-i").setAttribute("style", "background: linear-gradient(45deg, white -97%, #ff8042);");
        document.getElementsByClassName("holes").setAttribute("style", "box-shadow: 1px 1px 3px #ff8347 inset;");

    }
    else if (document.getElementById('mySelect').value == "s-blue") {
        // alert("surf-blue")
        document.getElementById("min-div-i").style.animation = "slide4 0.3s ";
        setTimeout(() => {
            document.getElementById('audio').play();
        }, 300)

        document.getElementById("btn-si").setAttribute("style", "background-color: #2b75a8;color: black;")
        document.getElementById("strip1").setAttribute("style", "border: 1px solid #6fb3e2;background-color: #2a74a7;box-shadow: 3px 1px 25px #3b86bb inset;");
        document.getElementById("s-c-t-i").setAttribute("style", "border: 1pt solid #215f8a;background-color: #2b74a7;");
        document.getElementById("curve-i").setAttribute("style", "background-color: #2b74a7;");
        document.getElementById("display-i").setAttribute("style", "border: 2px solid #1a6296;background: linear-gradient(311deg, white -65%, #2a73a6 34%);");
        document.getElementById("curve-b-i").setAttribute("style", "background-color: #2b74a7;");
        document.getElementById("strip-bottom-i").setAttribute("style", "border: 1px solid #6fb3e2;background-color: #2a74a7;box-shadow: 3px 1px 25px #3b86bb inset;");
        document.getElementById("main-button-i").setAttribute("style", "background: linear-gradient(45deg, white -97%, #2a74a7);");
        document.getElementsByClassName("holes").setAttribute("style", "box-shadow: 1px 1px 3px #317cb1 inset;");


    }













}