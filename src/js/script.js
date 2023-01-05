'use strict'
import tabs from './modules/tabs';
import cards from './modules/cards';
import timer from './modules/timer';
import modal from './modules/modal';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';


document.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs('.tabcontent', '.tabheader__items', '.tabheader__item', 'tabheader__item_active');
    cards();
    timer('.timer', "2023-01-28");
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider-wrapper',
        slide: '.offer__slide',
        nextArr: '.offer__slider-next',
        prevArr: '.offer__slider-prev',
        currentCount: '#current',
        totalCount: '#total'
    });
});

