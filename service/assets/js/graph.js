var range1 = document.querySelector('.range1');
var range2 = document.querySelector('.range2');
var range3 = document.querySelector('.range3');
var range4 = document.querySelector('.range4');
var range5 = document.querySelector('.range5');

range1.addEventListener('input', function () {
    /* Во время движения ползунка */
    var value = document.getElementById('value1');
    value.textContent = this.value;
}, false);

range2.addEventListener('input', function () {
    /* Во время движения ползунка */
    var value = document.getElementById('value2');
    value.textContent = this.value;
}, false);


range3.addEventListener('input', function () {
    /* Во время движения ползунка */
    var value = document.getElementById('value3');
    value.textContent = this.value;
}, false);


range4.addEventListener('input', function () {
    /* Во время движения ползунка */
    var value = document.getElementById('value4');
    value.textContent = this.value;
}, false);


range5.addEventListener('input', function () {
    /* Во время движения ползунка */
    var value = document.getElementById('value5');
    value.textContent = this.value;
}, false);

