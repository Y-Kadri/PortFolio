function scrollLeft(){
    var tmp = document.getElementById('friseChrono');
    console.log(tmp.scrollTop);
    tmp.scrollLeft = tmp.scrollWidth;
}