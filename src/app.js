//create array
let array = [1, 2, 3, 4, 5, 6, 7, 8];

createNumbers = () => {
    //aply random order
    array.sort(() => Math.random() - .5);
    console.log(array)
}

//Create divs elements and add to parent element
createDivs = () => {
    const divs = document.getElementById("cuadro");
    
    for(i = 0; i <= array.length; i++){
        let divElement = document.createElement("div");
        divElement.textContent = array[i];
        divElement.style.cursor = "pointer";
        
        divElement.addEventListener("click",()=>{
            console.log("posicion: ", divElement.textContent);
        });
        
        console.log(divElement);
        divs.appendChild(divElement);
    }
}

createNumbers();

createDivs();