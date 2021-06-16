import React from 'react';
import './Sections.css';
import CardItem from './CardItem';

function Sections() {
  return (
    <div className='cards'>
      <h1>Secțiuni</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' id="de-ce-haos">
          <CardItem
              src='/images/Sectiuni/ICONS-01.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              
              path='/services'
            />
            <CardItem
              src='/images/Sectiuni/ICONS-02.jpg'
              text='De ce haos?'
              
              path='/services'
            />
            <CardItem
              src='/images/Sectiuni/ICONS-03.jpg'
              text='Graffiti-Artă sau rebeliune'
              
              path='/services'
            />
                        <CardItem
              src='/images/Sectiuni/ICONS-04.jpg'
              text='Interviu Altheya'
              
              path='/products'
            />
           </ul> 
           <ul className='cards__items'> 


            <CardItem
              src='/images/Sectiuni/ICONS-05.jpg'
              text='Retrospectiva SF 30 și 29'
              
              path='/sign-up'
            />
                        <CardItem
              src='/images/Sectiuni/ICONS-06.jpg'
              text='Retrospectiva SF 30 și 29'
              
              path='/sign-up'
            />
                        <CardItem
              src='/images/Sectiuni/ICONS-07.jpg'
              text='Retrospectiva SF 30 și 29'
              
              path='/sign-up'
            />
                        <CardItem
              src='/images/Sectiuni/ICONS-08.jpg'
              text='Retrospectiva SF 30 și 29'
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sections;
