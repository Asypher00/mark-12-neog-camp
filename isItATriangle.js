const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputHere =  document.querySelector("#output");

function calculateSumOfAngles(angle1 , angle2 , angle3)
{
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isItATriangle()
{
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value) , Number(inputs[1].value) , Number(inputs[2].value));

    if (sumOfAngles === 180)
    {
        outputHere.innerText = "Yes! It is a triangle";

    } else outputHere.innerText = "No! It is not a triangle";
}
isTriangleBtn.addEventListener("click" , isItATriangle)