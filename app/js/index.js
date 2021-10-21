import '../scss/index.scss';
import imageLogosrc from '../assets/apple.svg'
import imageSmallsrc from '../assets/nutrition-500.jpg';
import imageMediumsrc from '../assets/nutrition-800.jpg';
import imageLargesrc from '../assets/nutrition-1000.jpg';

const headerLogo = document.querySelector('.header--logo')
const picLarge = document.querySelector('#pic-large')
const picMedium = document.querySelector('#pic-medium')
const picSmall = document.querySelector('#pic-small')
const valuesContainer = document.querySelector('.app--values');

//loading pictures
headerLogo.src = imageLogosrc;
picSmall.src = imageSmallsrc;
picMedium.srcset = imageMediumsrc;
picLarge.srcset = imageLargesrc;

//responsive table
const values = [
    { name: 'Ananas', calories: 33, fat: 0, carbs: 11.8 },
    { name: 'Jabłko', calories: 57, fat: 0.7, carbs: 12.1 },
    { name: 'Pomarańcza', calories: 51, fat: 0.2, carbs: 11.3 },
    { name: 'Wiśnie', calories: 67, fat: 0.4, carbs: 14.6 },
]
const drawValues = (isDesktop) => { //selecting table style
    if (isDesktop) {
        drawDesktopValues()
    } else {
        drawMobileValues()
    }
}
const drawMobileValues = () => { //mobile style
    valuesContainer.innerHTML = '';
    let list = document.createElement('ul');
    values.forEach(value => {
        let element = document.createElement('li');
        let name = document.createElement('div');
        name.innerHTML = `<strong>Nazwa: ${value.name}</strong>`
        element.appendChild(name);
        let calories = document.createElement('div');
        calories.innerHTML = `Kalorie: ${value.calories}`
        element.appendChild(calories);
        let fat = document.createElement('div');
        fat.innerHTML = `Tłuszcz: ${value.fat}`
        element.appendChild(fat);
        let carbs = document.createElement('div');
        carbs.innerHTML = `Węglowodany: ${value.carbs}`
        element.appendChild(carbs);
        list.appendChild(element);
    })
    valuesContainer.appendChild(list);
}
const drawDesktopValues = () => { //desktop style
    valuesContainer.innerHTML = '';
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>';
    let tbody = document.createElement('tbody');
    values.forEach((value) => {
        let row = document.createElement('tr');
        row.innerHTML = `<tr><th>${value.name}</th><th>${value.calories}</th><th>${value.fat}</th><th>${value.carbs}</th></tr>`
        tbody.appendChild(row)
    })
    table.appendChild(thead);
    table.appendChild(tbody);
    valuesContainer.appendChild(table);
}
const desktopViewport = window.matchMedia('screen and (min-width: 500px)'); //checking screen width
drawValues(desktopViewport.matches); //first render
desktopViewport.addEventListener('change', isDesktop => { //dynamic render
    drawValues(isDesktop.matches)
})