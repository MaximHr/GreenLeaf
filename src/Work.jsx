import React, {useState} from 'react';
import scope from './assets/scope.svg';
import chart from './assets/chart.svg';
import carboncapture from './assets/carboncapture.webp';
import { Link } from 'react-router-dom';
import plus from './assets/plus.svg';

const Work = () => {
  const [popup, setPopup] = useState({});
  const handlePopup = (e, text) => {
    if(e.target.classList.contains('span')) {
      setPopup({
        text,
        left: e.target.getBoundingClientRect().left + (e.target.offsetWidth / 2),
        top: window.scrollY + e.target.getBoundingClientRect().top
      });
    } else  if(e.target.parentNode.classList.contains('span')) {
      setPopup({
        text,
        left: e.target.parentNode.getBoundingClientRect().left + (e.target.parentNode.offsetWidth / 2),
        top: window.scrollY + e.target.parentNode.getBoundingClientRect().top
      });
    }
  }
  const closeWindow = (e) => {
    console.log(e.target.classList)
    if(!(e.target.classList.contains('popup') || e.target.classList.contains('span') || e.target.parentNode.classList.contains('span'))) {
      setPopup({});
    }
  }
  return (
    <div className='work' onClick={(e) => closeWindow(e)}>
      {popup?.text ? <div className='alert popup' style={{left: popup.left
      , top: popup.top}}>{popup.text}</div> : <></>}
      <h1 className='title'>Putting climate on every business receipt</h1>
      <div className="sections-container">
        <div className="section  section-inf">
          <h1>When it comes to the environment, the stuff we buy matters</h1>
          <p>Like most human activity, running a business comes with environmental costs. The goods and services we purchase — from web hosting and software to shipping and corporate travel — require resources from the planet to produce. For example, cloud software runs on servers, which are often still powered by burning fossil fuels. These “indirect” or <span className='span' onClick={(e) => handlePopup(e, 'As defined by the EPA, Scope 3 emissions are “the result of activities from assets not owned or controlled by the reporting organization” and include purchased goods and services.')}>Scope 3 <img alt='plus sign' src={plus}></img></span> emissions typically account for the largest share of organizations' <span  className='span' onClick={(e) => handlePopup(e, "A company's total “carbon footprint” consists of its Scope 1, Scope 2, and Scope 3 greenhouse (GHG) gas emissions. Scope 1 emissions are direct emissions from owned or controlled sources, including company facilities and vehicles. Scope 2 emissions are indirect emissions from the generation of purchased energy, including electricity, steam, heating, and cooling.")}>total emissions <img alt='plus sign' src={plus}></img></span> (by far), representing one of the most significant emissions reduction opportunities.</p>
        </div>
        <div className="section">
          <img src={scope} alt="scope 3 emissions pie chart" />
          <p className='more'>Scope 3 emissions account for an average of 75% of organizations' total emissions, and growing. (Source: WRI, 2023)</p>
        </div>
      </div>
      <div className="sections-container">
        <img style={{transform: 'scale(1.05)'}} src={chart} alt="chart" />
        <div style={{paddingLeft: '5rem'}} className="section section-info">
          <h1>Track your spending to understand your climate impact</h1>
          <p>Climate action starts with knowing your baseline emissions. The problem is, measuring Scope 3 emissions requires expensive <span  className='span' onClick={(e) => handlePopup(e, 'Scope 1 and 2 emissions are relatively straightforward to track, as these emissions are from sources directly owned or controlled by a company (Scope 1) or from electricity, steam, heating, and cooling purchased by a company (Scope 2).TCFD identified that most common challenges in reporting Scope 3 emissions included difficulty accessing relevant data (83%), challenges selecting or applying calculation methodologies (60%), and lack of internal expertise or resources for calculating Scope 3 emissions (29%).')}>resources, data, and expertise <img alt='plus sign' src={plus}></img></span> . Businesses should feel empowered to engage with climate, without bringing on a team of experts.</p>
          <p style={{paddingTop: '2rem'}}>GreenLeaf makes monitoring your climate impact easy. For each of your transactions, from a $10 rideshare to a $50,000 invoice, GreenLeaf provides a real time carbon emissions estimate, in metric tons of <span  className='span' onClick={(e) => handlePopup(e, 'Carbon dioxide (CO2) emissions make up only about 75% of total GHG emissions. Beyond CO2, the other quarter or so of emissions are made up of methane, nitrous oxide, hydrofluorocarbons, etc. Scientists have converted the global warming potential of all gases into carbon dioxide equivalents (CO2e), so that we have a single apples-to-apples unit to work with.')}>CO2e <img alt='plus sign' src={plus}></img></span>.</p>
        </div>
      </div>
      <div className="how section">
        <h1>How it works</h1>
        <p>We do this by pairing purchase data  from your GreenLeaf card with relevant climate data, applied to every one of your thousands of transactions. We use the highest-accuracy merchant, category, and product-level data available, and always return a confidence score for each CO2e estimate. Our calculation methodology is aligned with the GHG Protocol Scope 3 Standard .</p>
        <p>The formula looks like this:</p>
        <div className="formula">
          <h6>Transaction purchase price (USD)</h6>
          <h5>x</h5>
          <h6>Relevant emissions factor (CO2e/USD)</h6>
          <h5>=</h5>
          <h6>Climate impact (CO2e)</h6>
        </div>
        <p>We take one of three approaches to determine the relevant emissions factor:</p>
        <div className="levels">
          <div className="step">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.3,9.8V20c0,1,0.7,1.7,1.7,1.7h14c1,0,1.7-0.7,1.7-1.7V9.8 M21.6,7.5V5c0-0.3-0.1-0.7-0.2-1    c-0.1-0.3-0.3-0.6-0.6-0.9S20.3,2.7,20,2.6c-0.3-0.1-0.7-0.2-1-0.2H5C3.5,2.4,2.4,3.6,2.4,5v2.5c0,2,1.9,3.6,4.4,3.6    c0.9,0,1.6-0.5,2.4-0.9c0.7,0.4,1.1,0.9,2.9,0.9s2.2-0.5,2.9-0.9c0.7,0.4,1.4,0.9,2.4,0.9C19.8,11.2,21.6,9.5,21.6,7.5L21.6,7.5z    M15.3,21.6v-5.9c0-1.1-0.9-1.9-1.9-1.9h-2.3c-1.1,0-1.9,0.9-1.9,1.9v5.9H15.3z"></path></svg>
            </div>
            <h3>1. Merchant-level</h3>
            <p>We start with merchant-level data. If you purchased from Starbucks, we'll use Starbucks' most recent emissions data  as the emissions factor. If you purchased from Salesforce, we'll use Salesforce's most recent emissions data  as the emissions factor, and so on. This data is publicly available, and coverage has reached a tipping point: companies representing over 64% of global market capitilization  now disclose their emissions, and this coverage is growing, spurred on by (amongst other things) upcoming SEC regulations, and building momentum throughout value chains.</p>
          </div>
          <div className="step">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" width="24"><path d="M15 15Zm-7 2.95q.25.025.488.038Q8.725 18 9 18t.512-.012q.238-.013.488-.038V20h10V10h-2.05q.025-.25.038-.488Q18 9.275 18 9t-.012-.512Q17.975 8.25 17.95 8H20q.825 0 1.413.587Q22 9.175 22 10v10q0 .825-.587 1.413Q20.825 22 20 22H10q-.825 0-1.412-.587Q8 20.825 8 20ZM9 16q-2.925 0-4.963-2.038Q2 11.925 2 9t2.037-4.963Q6.075 2 9 2q2.925 0 4.963 2.037Q16 6.075 16 9q0 2.925-2.037 4.962Q11.925 16 9 16Zm0-2q2.075 0 3.538-1.463Q14 11.075 14 9t-1.462-3.537Q11.075 4 9 4 6.925 4 5.463 5.463 4 6.925 4 9t1.463 3.537Q6.925 14 9 14Zm0-5Z"></path></svg>
            </div>
            <h3>2. Category-level</h3>
            <p>In the absence of merchant-level data, we'll use category-level data. We do this by matching the transaction's Merchant Category Code (MCC) against the thousands of categories in our emissions factors database . For example, if you purchase dinner for a team outing at a local restaurant, we'll likely use the MCC “restaurants” — unlike Starbucks and Salesforce, most small businesses do not (yet!) share data about their emissions, so in these cases we rely on these category fallbacks.</p>
          </div>
          <div className="step">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white"  height="24" width="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM7 17q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287.275.288.275.713t-.288.712Q18.425 17 18 17Zm1.55-6h7Z"></path></svg>
            </div>
            <h3>3. Product-level</h3>
            <p>Finally, in cases where we have itemized information, including when you purchase items on Amazon Business, we'll use product-level data, using United Nations Standard Products and Services Codes (UNSPSC) for each item in your order. Similar to the category-level approach, we match the UNSPSC against 100K+ items in our emissions factor database. This approach offers the most high-resolution reporting.</p>
          </div>
        </div>
        <p style={{padding: '3rem 0'}}>While the formula is simple for any given transaction, the scale of calculating for the 100s and 1000s of purchases your business makes every month, quarter, and year is a big undertaking. By automating this process, GreenLeaf makes tracking emissions more efficient and less expensive.</p>
      </div>
      <div className="sections-container">
        <div className="section last">
          <h1>Why carbon removal is a necessary part of the solution</h1>
          <p>Key business activities, like air travel, shipping, and cloud hosting, lack good zero carbon alternatives. This makes it near impossible for businesses to reduce their “above the line” emissions to zero. To get to “net zero” and mitigate the worst effects of climate change, we need to ensure that these hard-to-reduce emissions are balanced by removals. Analysis by the IPCC shows that deployment of <span  className='span' onClick={(e) => handlePopup(e, 'According to the IPCC, “The deployment of carbon dioxide removals to counterbalance hard-to-abate residual emissions is unavoidable if net zero... emissions are to be achieved.”')}>carbon removal is critical <img alt='plus sign' src={plus}></img></span> to achieve U.S. and global emissions reduction targets and avoid the worst effects of climate change.</p>
          <p>With your GreenLeaf card, you'll earn unlimited 0.5% back in premium carbon removal credits for all purchases, redeemed automatically every month. You can use your credits to help meet your company's emissions goals, and address those hard-to-reduce emissions. You can also optionally purchase additional credits to meet your chosen targets.</p>
          <p>GreenLeaf tracks a portfolio of carbon removal projects vetted by Frontier Climate and Microsoft, and their panel of scientists. These projects store carbon permanently (&gt;1,000 years) and have demonstrated potential to remove gigatons of carbon from the atmosphere, at speed and scale.</p>
        </div>
        <img src={carboncapture} className='carboncapture' alt="carbon capture" />
      </div>
      <div className="section movement">
        <h1>Join the movement</h1>
        <p>You can help put the planet back in balance — and in doing so, benefit not only your business, but also your community and future generations.</p>
        <Link to='/signup' className="btn green" >Open a Free Account</Link>
      </div>
      <div className='footer'>
        <p>©2023 GreenLeaf, Inc.</p>
      </div>
    </div>
  )
}

export default Work;