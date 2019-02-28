import {Http} from './http.js';
const loadingWheelEl = document.querySelector('#loading')
const tableCarsEl = document.querySelector('#tablecars');

let page = 1;
async function loadData() {
    try {
        loadingWheelEl.innerHTML = `<img src="/cb-test/preloader.gif">`
        loadingWheelEl.style.visibility = "visible";


        const http = new Http(`/cb-test/data/cars-${page}.json`)
        const response = await http.getAll();
        const cars = await response.json();

        console.log('ЭТО PAGE ' + page + 'ЭТО МАШИНЫ ' + http.url);
        cars.forEach((car) => {
            const divEl = document.createElement('div');
            divEl.className = 'table__row';
            divEl.innerHTML = `
                <div class="table__cell">${car.Name}</div>
                <div class="table__cell">${car.Miles_per_Gallon}</div> 
                <div class="table__cell">${car.Cylinders}</div>
                <div class="table__cell">${car.Displacement}</div>
                <div class="table__cell">${car.Horsepower}</div>
                <div class="table__cell">${car.Weight_in_lbs}</div>
                <div class="table__cell">${car.Acceleration}</div>
                <div class="table__cell">${car.Year}</div>
                <div class="table__cell">${car.Origin}</div>
            `
            tableCarsEl.appendChild(divEl);
        });
    }
    catch (e) {

    }
    finally {
        loadingWheelEl.style.visibility = "hidden";
    }
}

loadData();

document.addEventListener('scroll', () => {

   let windowBottom = document.documentElement.getBoundingClientRect().bottom;
   console.log(windowBottom);

   if(windowBottom < 700 ) {
       if(page <= 4) {
           page = page + 1;
           console.log('PAGE! ' + page);
           loadData();
       } else {
           console.log('ты дошёл до дна')
       }

   }
});




