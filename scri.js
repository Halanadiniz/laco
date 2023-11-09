function potencia() {
    let n = 5;
    let pote = n;
    while (n>=1) {
        pote = Math.pow(2, n);
        n = n - 1;
        alert(pote);
    }
}