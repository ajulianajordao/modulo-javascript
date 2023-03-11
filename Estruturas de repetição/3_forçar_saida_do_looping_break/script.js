for (let i = 0 ; i < 20 ; i = i + 1) {
    if (i % 10 == 0) {
        console.log("Saiu do loop");
        break;
    }
}


for (let i = 0; i <20 ; i = i + 1) {

    if (i == 3) {
        nome = "Carlos";
    }

    
    if( i == 5 && nome == "Carlos") {
        console.log("O nome é carlos, pode parar!");
        break;
    }

    console.log(i);
}