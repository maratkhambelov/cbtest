import {Http} from './http.js';
const listCarsEl = document.querySelector('#listcars')



let page = 1;
async function loadData() {

    const http = new Http(`/cb-test/data/cars-${page}.json`)

    const response = await http.getAll();
    const cars = await response.json();

    console.log('ЭТО PAGE ' + page + 'ЭТО МАШИНЫ ' + http.url);
    cars.forEach((car) => {
        const liEl = document.createElement('li');
        liEl.className = 'table__row';
        liEl.innerHTML = `
        <span class="table__cell">${car.Name}</span>
        <span class="table__cell">${car.Miles_per_Gallon}</span>
        <span class="table__cell">${car.Cylinders}</span>
        <span class="table__cell">${car.Displacement}</span>
        <span class="table__cell">${car.Horsepower}</span>
        <span class="table__cell">${car.Weight_in_lbs}</span>
        <span class="table__cell">${car.Acceleration}</span>
        <span class="table__cell">${car.Year}</span>
        <span class="table__cell">${car.Origin}</span>
        `
        listCarsEl.appendChild(liEl);
    });

}

loadData();

document.addEventListener('scroll', () => {

   let windowBottom = document.documentElement.getBoundingClientRect().bottom;
   console.log(windowBottom);
   if(windowBottom === 595) {
       if(page <= 4) {
           page = page + 1;
           console.log('PAGE!!!!!!!!!!!!!!!!!!!!!!!!!!!' + page);
           loadData();
       } else {
           console.log('ты дошёл до дна')
       }

   }
});




// loadingWheel.innerHTML = `<img src="/cb-test/preloader.gif" >`
