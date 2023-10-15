import React from 'react'
import  '../assets/header_tour.scss'
import logo_img from '../assets/img/logo.png'

export default function Header_Tour() {
  

  return (
    <div class="header_style_wrapper scroll_up">
      <div class="top_bar hasbg scroll_up">
        <div class="standard_wrapper">
          <div id="logo_wrapper">
            <div id="logo_normal" class="logo_container">
              <div class="logo_align">
                <a id="custom_logo" class="logo_wrapper hidden" href='#'>
                  <img src={logo_img} alt='img' class="entered lazyloaded"/>
                </a>
              </div>
            </div>
            <div id="logo_transparent" class="logo_container">
              <div class="logo_align">
                <a id="custom_logo_transparent" href='#' class="logo_wrapper default">
                  <img src={logo_img} alt='img' class="entered lazyloaded" width="92" height="22"/>


                </a>
              </div>
            </div>
            <div id="menu_wrapper">
              <div id="nav_wrapper">
                <div class="nav_wrapper_inner">
                  <div id="menu_border_wrapper">
                    <div class="menu-main-menu-container">
                      <ul id="main_menu" class="nav">
                        {/* <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home current-menu-ancestor current-menu-parent menu-item-has-children arrow menu-item-11">
                          <a className='menu-content' href='#'>
                          Home
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-12">
                          <a className='menu-content' href='#'>
                          Tours
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-tour menu-item-has-children arrow menu-item-200">
                          <a className='menu-content' href='#'>
                          Booking
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-13">
                          <a className='menu-content' href='#'>
                          Destinations
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-14">
                          <a className='menu-content' href='#'>
                          Pages
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-15">
                          <a className='menu-content' href='#'>
                          Blog
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children arrow menu-item-16">
                          <a className='menu-content' href='#'>
                          Shortcodes
                          </a>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">
                          <a className='menu-content' href='#'>
                          Shop
                          </a>
                        </li> */}

                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Home</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>Home 1 – Background Image</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Home 2 – Youtube Video</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Home 3 – Google Inspired</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Home 4 – Travel Site</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Tours</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>
                                      <span>
                                        Tour Classic Fullwidth

                                      </span>
                                      <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Tour Classic Sidebar
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Tour Grid Fullwidth
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Tour Grid Sidebar
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Tour List Sidebar
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Tour Header Type
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Tour Categories
                                    <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Booking</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu " id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>
                                      Online Payment for Booking
                                      <i class="fas fa-chevron-right"></i>
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>
                                      Custom Booking Form
                                      <i class="fas fa-chevron-right"></i>
                                      
                                    </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>
                                      Tour Durations
                                      <i class="fas fa-chevron-right"></i>
                                      
                                      </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Custom Booking URL for Affiliate Tour</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Custom Booking using custom HTML & Shortcode</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>
                                      Header Options
                                    <i class="fas fa-chevron-right"></i>
                                      
                                      </a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>
                                      Layout Options
                                    <i class="fas fa-chevron-right"></i>
                                      
                                      </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Destinations</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>Destination Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Destination + Video Header</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Destination Right Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Destination Left Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Single Destination</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Single Destination + Video</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Pages</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>About Us</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Contact Us</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>FAQs</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Gallery</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Page Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Page + Video Background Header</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Page Right Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Page Left Sidebar</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Blog</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>Blog Right Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Blog Left Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Blog Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Grid Right Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Grid Left Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Grid Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Full + Grid Right Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Full + Grid Left Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Blog Full + Grid Fullwidth</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" item-drop  dropdown is-hoverable ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Shortcodes</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>Accordion & Toggles</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Alert Boxes</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Animated Content</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Buttons & Social Icons</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Columns</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Google Maps</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Image Frame & Animation</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Image Teasers</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Pricing Tables</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Tabs</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class=" item-drop  dropdown is-hoverable  ">
                          <div class="dropdown-trigger">
                            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4"> */}
                            <li aria-controls="dropdown-menu4" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children arrow menu-item-2442">

                              <span className='menu-content'>Shop</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                              </li>
                            {/* </button> */}
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <ul className='sub-menu'>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3125">
                                    <a className='item-drop-content' href='#'>Shop Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-3119 current_page_item menu-item-3124">
                                    <a className='item-drop-content' href='#'>Shop Sidebar</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3148">
                                    <a className='item-drop-content' href='#'>Single Product Fullwidth</a>
                                  </li>
                                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3152">
                                    <a className='item-drop-content' href='#'>Single Product With Sidebar</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        


                        {/* <div class="dropdown is-hoverable">
                          <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                              <span>Hover me</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu is-right" id="dropdown-menu4" role="menu">
                            <div class="dropdown-content">
                              <div class="dropdown-item">
                                <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                              </div>
                            </div>
                          </div>
                        </div> */}


                      </ul>
                    </div>
                  </div>
                </div>
                <div id="logo_right_button">
                  <a id="mobile_nav_icon" href='#'>
                    <i class="fas fa-bars"></i>
                  </a>
                  <div class="header_cart_wrapper">
                    <div class="cart_count">
                      0
                    </div>
                    <a href='#' title="View Cart">
                      <i class="fas fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
