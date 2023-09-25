import observeDOM from './globals/observe-dom.js';
import { findInput, keyFunction } from './globals/utils.js';
import generateRandomPlate from './scripts/placas.js'
import generateCpf from './scripts/cpf.js'
import generateRenavam from './scripts/renavam.js'
import generateRandomChassis from './scripts/chassi.js'

const checkItensGen = () => {
    const plate = document.querySelectorAll('[gen-placa]');
    const cpf = document.querySelectorAll('[gen-cpf]');
    const renavam = document.querySelectorAll('[gen-renavam]');
    const chassi = document.querySelectorAll('[gen-chassi]');
    
    plate.forEach(elem => {
        keyFunction(findInput(elem), generateRandomPlate);
    });

    cpf.forEach(elem => {
        const inputElem = findInput(elem);
        keyFunction(inputElem, generateCpf, inputElem);
    });

    renavam.forEach(elem => {
        keyFunction(findInput(elem), generateRenavam);
    });

    chassi.forEach(elem => {
        keyFunction(findInput(elem), generateRandomChassis);
    });
}

observeDOM(document.querySelector('body'), () => checkItensGen());
window.addEventListener('load', () => checkItensGen());



