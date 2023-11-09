function potencia(){
    let n = parseInt(numero.value);
    let pote = n;
    if (n<0){
        alert("numero negativo");
    }
    else if(n==0){
        alert("1")
    }
    else{
    while (n>=1) {
        pote = Math.pow(2,n);
        n = n - 1;
        alert(pote);
    }
    }
}