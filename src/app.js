/**
 * App Puzzle Number Game
 * @author Saul Medina
 * @author Dario Rosales 
 */

/**
 * @description Array that represents the positions on board
 */
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
        valuesToDiv(array[i],divElement);
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
        let celda = cells[i];
        celda.style.cursor = "pointer"
        celda.addEventListener('click', () => {
            alert("Vecino "+i)
        });
    });
}

/**
 * @description clean all div attributes and remove addEventListener event
 * added on getNeighbors() function
 * @returns {void}
 */
cleanDivs = ()=>{
    const divs = document.querySelectorAll(".divs");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.cursor = '';
        divs[i].textContent = null;
        divs[i].removeAttribute("id");
        divs[i].removeAttribute("value");
        const divResp = divs[i].cloneNode(false);
        divs[i].parentNode.replaceChild(divResp, divs[i]);
    }
}

/**
 * @description put all necesary attributes on div elements
 * @param {number} num - Array position number
 * @param {HTMLDivElement} elementDiv - Div element (board element)
 * @returns {void} 
 */
valuesToDiv = (num, elementDiv)=>{
    if(num == 0){
        elementDiv.textContent = null;
        elementDiv.setAttribute("id","vacio");
        elementDiv.setAttribute("value",i);
    }else{
        elementDiv.textContent = num;
    }
}

/**
 * @description this function resets the numbers
 * remove the container and create divs elements with their neighbors
 * @returns {void}
 */
resetNumbers = ()=>{
    createNumbers();
    cleanDivs();
    const divs = document.getElementsByClassName("divs");
    
    for (let i = 0; i < divs.length; i++) {
        valuesToDiv(array[i],divs[i]);
    }
    getNeighbors();
    
}

document.addEventListener("DOMContentLoaded", function () {
    createNumbers();
    createDivs();
    getNeighbors();

});



