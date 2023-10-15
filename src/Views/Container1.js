import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import '../assets/container1.scss'

import videobg from '../assets/Spectacular Norway - from the air.mp4';

function Container1() {
  const [showInputs, setShowInputs] = useState(false);

  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };

  return (
    
    <div className='main-center'>
      <div className='main-inner'>
        <div className='overlay_background'>
          <video src={videobg} autoPlay loop muted />
          <div className='standard_wrapper'>
            <h2 className="ppb_title">Where do you want to go?</h2>
            <p className='tagline'>Trips, experiences, and places. All in one service.</p>
          </div>
        </div>

        <div className='tour_search_wrapper'>
          <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }} className='cc'>
            <div className="one_fourth themeborder">
              <input id="keyword" placeholder="Destination, city"/>
              <i class="fas fa-search"></i>

            </div>

            <div className="one_fourth themeborder">
              <select className='month' IconComponent={null}>
                <option className='option-item' >Any Month</option>
                <option className='option-item' >January</option>
                <option className='option-item' >February</option>
                <option className='option-item' >March</option>
                <option className='option-item' >April</option>
                <option className='option-item' >May</option>
                <option className='option-item' >July</option>
                <option className='option-item' >August</option>
                <option className='option-item' >September</option>
                <option className='option-item' >October</option>
                <option className='option-item' >November</option>
                <option className='option-item' >	December</option>
              </select>
              <CalendarTodayIcon className='calendar-icon' style={{ fontSize:'19px'}} />
            </div>

            <div className="one_fourth themeborder">
              <select className='month date' IconComponent={null}>
                <option className='option-item' >Sort By Date</option>
                <option className='option-item' >Price Low to High</option>
                <option className='option-item' >Price High to Low</option>
                <option className='option-item' >Sort By Review Score</option>
                <option className='option-item' >Sort By Name</option>
                <option className='option-item' >Sort By Popularity</option>
              </select>
              <SwapVertIcon className='SwapVert-icon' style={{ fontSize:'19px'}} />
            </div>
            <div className='one_fourth last' style={{border:'none'}}>
              <Button className='tour_search_btn' variant="contained" style={{ backgroundColor: '#FF4A52', color: 'white' }}>
                Search
              </Button>
            </div>


          </div>

          <div className={`showInputs ${showInputs ? 'visible' : ''}`}>
            {showInputs && (
              <div style={{ display: 'flex', alignItems: 'start', gap: '10px' }}>

                <div className="one_fourth themeborder">
                  <select className='month date' IconComponent={null}>
                    <option className='option-item' >All Categories</option>
                    <option className='option-item' >Mountain</option>
                    <option className='option-item' >Rural</option>
                    <option className='option-item' >Snow & Ice</option>
                    <option className='option-item' >Wildlife</option>
                  </select>
                  <KeyboardArrowDownIcon className='ArrowDown-icon'  style={{ fontSize:'19px'}} />
                </div>

                <div className="one_fourth themeborder">
                  <select className='month date' IconComponent={null}>
                    <option className='option-item' >Any Destinations</option>
                    <option className='option-item' >Tokyo</option>
                    <option className='option-item' >Seoul</option>
                    <option className='option-item' >Paris</option>
                    <option className='option-item' >London</option>
                    <option className='option-item' >Venice</option>
                    <option className='option-item' >Miami</option>
                    <option className='option-item' >Rome</option>
                    <option className='option-item' >Prague</option>
                    <option className='option-item' >California</option>
                    <option className='option-item' >Kyoto</option>
                    <option className='option-item' >Santorini</option>
                    <option className='option-item' >Hong Kong</option>
                  </select>
                  <KeyboardArrowDownIcon className='ArrowDown-icon' style={{ fontSize:'19px'}} />
                </div>

                <div className="one_fourth themeborder">
                  {/* <TextField className='keyword' placeholder="Max budget ex. 500" InputProps={{
                    endAdornment: (
                      <AttachMoneyIcon className='Money-icon' style={{ fontSize:'22px'}} />
                    ),
                  }} /> */}
                  <input id="keyword" placeholder="Max budget ex. 500"/>
                  <i class="fas fa-dollar-sign"></i>
                </div>
              </div>

            )}
          </div>

          <Button  variant="text" onClick={toggleInputs} className='show-btn' style={{color:'#fff', fontSize:'11px'}} >
            {showInputs ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            <p>Advanced Search</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Container1;