console.log("Loaded JS");

const textinput = document.getElementById("textinput");      
const textinputtwo = document.getElementById("textinputtwo"); 
const button = document.getElementById("button");
const output = document.getElementById("output");
const historyList = document.getElementById("history")

button.addEventListener('click', handleClick);

function handleClick() {
    const weight = Number(textinput.value);
    const height = Number(textinputtwo.value); 

    let KMI = weight / (height * height);
    KMI = KMI.toFixed(1);

   
    if (KMI < 18.5) {
        output.innerHTML = KMI + " (Nepietiekama ķermeņa masa)";
    } 
    else if (KMI <= 18.5) {
        output.innerHTML = KMI + " (Normāla ķermeņa masa)";
    } 
    else if (KMI <= 25) {
        output.innerHTML = KMI + " (Lieka ķermeņa masa)";
    } 
    else {
        output.innerHTML = KMI + " (Aptaukošanās)";
    }

}



