createNumbers = () => {
    //create array
    let array = [1, 2, 3, 4, 5, 6, 7, 8];

    //aply random order
    array.sort(() => Math.random() - .5);
    console.log(array)
}

createNumbers();