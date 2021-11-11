function szamol()
{
    let num1 = parseInt(document.getElementById('szam1').value);
    let num2 = parseInt(document.getElementById('szam2').value);

    let eredmeny = num1 + num2;
    document.getElementById('megoldas').innerHTML = "Eredmény: " + eredmeny;
}