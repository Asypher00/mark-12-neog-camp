const sides = document.querySelectorAll(".input-sides");
const areaBtn = document.querySelector("#area-btn");
const outputHere = document.querySelector("#output");

function calculator(b,h)
{
    const prodOfBaseHeight = (b * h);
    return prodOfBaseHeight;
}



function calculateArea()
{
    const prodOfBaseHeight = calculator(Number(sides[0].value) , Number(sides[1].value));
 
    const area = prodOfBaseHeight /2;
    outputHere.innerText = "The area of the triangle is " + area + " square centimetres"

}

areaBtn.addEventListener("click" , calculateArea);