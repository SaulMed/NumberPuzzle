let array = [1, 2, 3, 4, 5, 6, 7, 8, 0];

/**
 * @description apply random order to array
 * @returns {void}
 */
createNumbers = () => {
    array.sort(() => Math.random() - .5);
}

/**
 * @description Create divs elements and add to parent element
 * @returns {void}
 */
createDivs = () => {
    const container = document.createElement("div");
    container.id = "cuadro";
    container.className = "cuadro";

    for(i = 0; i <= array.length -1; i++){
        let divElement = document.createElement("div");
        divElement.className = "divs";
        if(array[i] == 0){
            divElement.textContent = null;
            divElement.setAttribute("id","vacio");
            divElement.setAttribute("value",i);
        }else{
            divElement.textContent = array[i];
        }
        /*
        divElement.addEventListener("click",()=>{
            console.log("posicion: ", divElement.id);
        });
        */
        container.appendChild(divElement);
    }
    document.body.appendChild(container);
}


/**
 * @description get the neighbors only up, down, right, left in the board
 * @returns {void}
 */
getNeighbors = ()=>{
    let cells = document.querySelectorAll(".cuadro div");

    let vacio = document.querySelector("#vacio");
    let vacioIndex = Array.from(cells).indexOf(vacio);    

    //Vecinos de vacio
    let indicesVecinos = [
        vacioIndex - 3, // arruba
        vacioIndex + 3, // abajo
        vacioIndex % 3 !== 0 ? vacioIndex - 1 : null, //izquierda
        vacioIndex % 3 !== 3 - 1 ? vacioIndex + 1 : null //derecha
    ]

    indicesVecinos.filter(i => i !== null && i >= 0 && i < cells.length).forEach( i => {
        //console.log(i)
        let celda = cells[i];
        //console.log(celda)
        celda.style.cursor = "pointer"
        celda.addEventListener('click', () => {
            alert("Vecino "+i)
        });
    });
}

/**
 * @description this function resets the numbers
 * remove the container and create divs elements with their neighbors
 * @returns {void}
 */
resetNumbers = ()=>{
    createNumbers();
    let container = document.getElementById("cuadro");
    container.remove();
    createDivs();
    getNeighbors();
    
}

document.addEventListener("DOMContentLoaded", function () {
    createNumbers();
    createDivs();
    getNeighbors();

});



