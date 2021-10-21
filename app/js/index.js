import '../scss/index.scss';
import imageLogosrc from '../assets/apple.svg'
import imageSmallsrc from '../assets/nutrition-500.jpg';
import imageMediumsrc from '../assets/nutrition-800.jpg';
import imageLargesrc from '../assets/nutrition-1000.jpg';

const headerLogo = document.querySelector('.header--logo')
const picLarge = document.querySelector('#pic-large')
const picMedium = document.querySelector('#pic-medium')
const picSmall = document.querySelector('#pic-small')

//loading pictures
headerLogo.src = imageLogosrc;
picSmall.src = imageSmallsrc;
picMedium.srcset = imageMediumsrc;
picLarge.srcset = imageLargesrc;

