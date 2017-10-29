function nsc(at, am, nct) {
    console.log(at);
    if (nct < at) {
        setTimeout(at, am, nct + 1);
        scrollBy(0, 20);
    } else {
        scrollBy(0, am);
    }
}

//window.addEventListener('DOMContentLoaded', function() {
    var ct = document.getElementById('footer').getBoundingClientRect().top;
    setTimeout(nsc, 10, (ct / 20), (ct % 20), 0);
//});
