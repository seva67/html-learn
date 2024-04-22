var myIm = document.querySelector("img");
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myIm.onclick = function ()
{
    var myScr = myIm.getAttribute("scr");

    if (myScr === "images/3.png")
    {
        myIm.setAttribute("scr", "images/look at my eyes.jpg");
    }
    else
    {
        myIm.setAttribute("scr", "images/3.png");
    }
};

myButton.onclick = function ()
{
    setUserName();
};
 

function setUserName()
{
    var myName = prompt("Введи имя.");
    if (myName !== null)
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Привет, " + myName;
    }
};

if (!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Привет, " + storedName;
};
  