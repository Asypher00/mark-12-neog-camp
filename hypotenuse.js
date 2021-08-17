const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputHere = document.querySelector("#output");
function calculateSumOfSquares(a , b)
{const sumOfSquares = a*a + b*b;
    return sumOfSquares;

}
function calculateHypotenuse()
{const sumOfSquares = calculateSumOfSquares(Number(sides[0].value) , Number(sides[1].value));
    const lenghtOfHypotenuse = Math.sqrt(sumOfSquares);
    outputHere.innerText = "The length of the hypotenuse is " + lenghtOfHypotenuse;

}
calculateBtn.addEventListener("click" , calculateHypotenuse);