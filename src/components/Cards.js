import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Articole</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' id="de-ce-haos">
          <CardItem
              src='/images/Articole/Poze pentru articole blog/New folder/00012.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/Articole/Poze pentru articole blog/De ce Haos_/Ema s1.jpg'
              text='De ce haos?'
              label='Articol'
              path='/services'
            />
            <CardItem
              src='/images/Articole/Poze pentru articole blog/Articol Graffiti/3.png'
              text='Graffiti-Artă sau rebeliune'
              label='Articol'
              path='/services'
            />
          {/* </ul> */}
          {/* <ul className='cards__items'> */}

            <CardItem
              src='/images/Articole/Poze pentru articole blog/Interviu cu Altheya/Altheya.jpg'
              text='Interviu Altheya'
              label='Interviu'
              path='/products'
            />
            <CardItem
              src='/images/Articole/Poze pentru articole blog/Coordonatori SF 30 și 29/Lutescu.jpg'
              text='Retrospectiva SF 30 și 29'
              label='Retrospectiva'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
