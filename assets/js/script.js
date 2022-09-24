// functions
let fonctionCalc2017 = (IM2017) => {
    let resultCalc2017 = (IM2017*55.2044)/12;
    return resultCalc2017.toFixed(2);
}
let fonctionCalc2021 = (IM2021) => {
    let resultCalc2021 = (IM2021*56.2323)/12;
    return resultCalc2021.toFixed(2);
}
let fonctionCalcGIPA = (result2017, result2021) => {
    let resultCalcGIPA = 0;

    if (((result2017*12)*1.0436)<(result2021*12)) {
        resultCalcGIPA = 0;
    } else {
        resultCalcGIPA = (result2017*12)*1.0436-result2021*12;
    }

    return resultCalcGIPA.toFixed(2);
}

// variables
let IM2017 = document.getElementById('IM2017');
let IM2021 = document.getElementById('IM2021');
let alert = document.getElementById('alert');

let error = "L'indice moyen doit-être compris entre 150 et 1700";


let result1 = document.getElementById('2017result');
let result2 = document.getElementById('2021result');
let result3 = document.getElementById('resultGIPA');

let averageInflation = 4.36;
let euro = ' €';

btnCalc.addEventListener('click', () => {
    if (IM2017.value < 150 || IM2017.value > 1700 || IM2021.value < 150 || IM2021.value > 1700) {
        alert.innerHTML = error;

        result1.innerHTML = euro;
        result2.innerHTML = euro;
        result3.innerHTML = euro;
    } else {
        alert.innerHTML = "";

        // calcs
        let result2017 = fonctionCalc2017(IM2017.value);
        let result2021 = fonctionCalc2021(IM2021.value);
        let resultGIPA = fonctionCalcGIPA(result2017, result2021);

        // results
        result1.innerHTML = result2017+euro;
        result2.innerHTML = result2021+euro;
        result3.innerHTML = resultGIPA+euro;
    }

});