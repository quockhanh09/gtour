import React from 'react'
import '../assets/container2.scss'

export default function Container2() {

  const divsData = [
    {
      imageSrc: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg',
      link:'https://themes.themegoods.com/grandtour/demo/destination/tokyo/',
      text: 'Tokyo',
    },
    {
      imageSrc: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg',
      link:'https://themes.themegoods.com/grandtour/demo/destination/seoul/',
      text: 'Seoul',
    },
    {
      imageSrc: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg',
      link:'https://themes.themegoods.com/grandtour/demo/destination/paris/',
      text: 'Paris',
    },
    {
      imageSrc: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg',
      link:'https://themes.themegoods.com/grandtour/demo/destination/london/',
      text: 'London',
    },
  ];


  return (
    <div className='main'>
      <div className='page-content'>
        <div className='title'>
          <h2>Popular Destinations</h2>
          <p>World's best tourist destinations</p>
        </div>
       
        <div className="content-custom">
          {divsData.map((divData, index) => (
            
            <div key={index} className="custom-div" >

             <a href={divData.link}> <img className='location-img' src={divData.imageSrc} alt={`Image ${index}`} /></a>
              <a className="div-text" href={divData.link}>{divData.text}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}