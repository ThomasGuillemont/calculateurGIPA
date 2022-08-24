// fonctions
let fonctionCalc2017 = (IM2017) => {
    let resultCalc2017 = (IM2017*55.2044)/12;
    return resultCalc2017.toFixed(2);
}
let fonctionCalc2021 = (IM2021) => {
    let resultCalc2021 = (IM2021*56.2323)/12;
    return resultCalc2021.toFixed(2);
}
// let fonctionCalcGIPA = (????????) => {
//     let resultCalcGIPA = (IM2021*56.2323)/12;
//     return resultCalcGIPA.toFixed(2);
// }

// variables
let IM2017 = document.getElementById('IM2017');
let IM2021 = document.getElementById('IM2021');


let result1 = document.getElementById('2017result');
let result2 = document.getElementById('2021result');
let result3 = document.getElementById('GIPA');

let averageInflation = 4.36;
let euro = ' €';

btnCalc.addEventListener('click', () => {
    // calcs
    let result2017 = fonctionCalc2017(IM2017.value);
    let result2021 = fonctionCalc2021(IM2021.value);

    // results
    result1.innerHTML = result2017+euro;
    result2.innerHTML = result2021+euro;
    result3.innerHTML = resultGIPA+euro;
});