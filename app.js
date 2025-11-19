console.log("Loaded JS");

const textinput = document.getElementById("textinput");
const textinputtwo = document.getElementById("textinputtwo");
const button = document.getElementById("button");
const output = document.getElementById("output");


button.addEventListener('click', handleClick);

function handleClick() {
let KMI = textinput.value / ( textinputtwo.value * textinputtwo.value );

if ( KMI <   18,5 ) {
output.innerHTML = (KMI + "  (Nepietiekama ķermeņa masa )");
}

else 
    if ( KMI >+ 24,99) {
    output.innerHTML = (KMI + "  (Normāla ķermeņa masa )");
}
else 
    if ( KMI >+ 29,99) {
    output.innerHTML = (KMI + "  (Lieka ķermeņa masa)");
}
else 
    if ( KMI > 30) {
    output.innerHTML = (KMI + "  (Aptaukošanās )");
};

};
 








