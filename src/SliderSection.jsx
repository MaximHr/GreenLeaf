import React from 'react';
import DebitCard from './DebitCard';
import github from './assets/github.jpg';
import linkedin from './assets/linkedin.png';
import homedepot from './assets/home-depot.jpg';
import slack from './assets/slack.jpg';
import googleads from './assets/google-ads.jpg';

const SliderSection = () => {
  return (
    <div className='slider'>
    {  new Array(2).fill(undefined).map((v, i) => {
        return(
          <div className="debitcard-container" key={i} id={'debitcard' + i}>
            <DebitCard 
              textColor='white'
              color1='rgb(14, 92, 173)' 
              color2='rgb(38, 136, 237)' 
              name='LinkedIn' 
              logo={linkedin} 
              text='Subscription · 2914' 
              price={14} 
              priceGoal={80} 
              priceTime='monthly'
            />
            
            <DebitCard 
            textColor='white'
            color1='rgb(247, 87, 7)' 
            color2='rgb(247, 137, 82)' 
            name='Home Depot' 
            logo={homedepot} 
            text='Virtual · 9981' 
            price={900} 
            priceGoal={1000} 
            priceTime='monthly'
          />
          
          <DebitCard 
              textColor='white'
              color1='#222' 
              color2='#555' 
              name='GitHub' 
              logo={github} 
              text='Subscription · 0247' 
              price={2000} 
              priceGoal={5000} 
              priceTime='yearly'
              progressColor='grey'
            />
          <DebitCard 
            textColor='rgb(31,47,71)'
            color1='#fdbb2d' 
            color2='rgb(250, 195, 92)' 
            name="Google Ads" 
            logo={googleads} 
            text='Subscription · 0636' 
            price={5000} 
            priceGoal={5000} 
            priceTime='all time'
          />
          <DebitCard 
            textColor='white'
            color1='rgb(67, 21, 74)' 
            color2='rgb(125, 39, 138)' 
            name="Slack"
            logo={slack} 
            text='Subscription · 6439' 
            price={52} 
            priceGoal={100} 
            priceTime='monthly'
          />
          </div>    
        )})
      }
    
    </div>
  )
}

export default SliderSection;