let x = 0

while( x < 10) {
    x = x + 1;
    if( x % 2 == 0) {
        console.log("Caiu no continue");
        continue;
    }
    console.log(x);
}