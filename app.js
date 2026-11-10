function show1(){
    let l = document.getElementById('length').value
    let area = l*l
    document.getElementById('displaySquare').innerHTML = area
}

function show2(){
    let b = document.getElementById('base').value
    let h = document.getElementById('height').value
    let area = 0.5*b*h
    document.getElementById('displayTriangle').innerHTML = area
}

function show3(){
    document.getElementById('displayCircle').innerHTML = 3.
    142*document.getElementById('radius').value*document.
    getElementById('radius').value
}
function show4(){
    let trapa = document.getElementById('trapa').value
    let trapb = document.getElementById('trapb').value
    let traph = document.getElementById('traph').value
    let area = 0.5*(trapa+trapb)*traph
    document.getElementById(`displayTrapezium`).innerHTML = area
}