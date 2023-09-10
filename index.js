var celius = document.getElementById("cel");
var fahrenheit = document.getElementById("fah");
celius.addEventListener('input', function(){
    let cl = this.value;
    let fh = (cl * 9/5) + 32;
    fahrenheit.value = fh;
})
fahrenheit.addEventListener('input', function(){
    let fh = this.value;
    let cl = (fh - 32) * 5/9;
    celius.value = cl;
})