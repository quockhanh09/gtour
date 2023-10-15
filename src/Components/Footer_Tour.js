import React, { useState, useEffect } from 'react'
// import '../assets/Footer.scss'
import '../assets/FooterStyle.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer_Tour() {

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div id='main-footer' >
      <div id="footer" >
        <div className="sidebar_widget three ">
          <div id="text-2" className="widget widget_text">
            <h2 className="widgettitle">Our Awards</h2>
            <div className="textwidget">
              <p>
                London is a megalopolis of people, ideas, and <br></br>frenetic energy. The capital and largest city of the United Kingdom.
              </p>
              <br></br>
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
                width="246"
                height="113"
                alt=""
              />
            </div>
          </div>

          <div id="text-4" className="widget widget_text">
            <h2 className="widgettitle">Contact Info</h2>
            <div className="textwidget">
              <p>
                <span className="ti-mobile" style={{ marginRight: '10px' }}><i class="fa-solid fa-mobile-screen"></i></span>1-567-124-44227
              </p>
              <p>
                <span className="ti-location-pin" style={{ marginRight: '10px' }}><i class="fa-solid fa-location-dot"></i></span>184 Main Street East Perl Habour 8007
              </p>
              <p>
                <span className="ti-alarm-clock" style={{ marginRight: '10px' }}><i class="fa-regular fa-clock"></i> </span>Mon - Sat 8.00 - 18.00 Sunday CLOSED
              </p>
              <div style={{ marginTop: '20px' }}>
                <div className="social_wrapper shortcode dark">
                  <ul className="horizontal-list">
                    <li className="facebook">
                      <a target="_blank" title="Facebook" href="#" rel="noopener">

                        <FacebookIcon sx={{ fontSize: '2rem' }} style={{ color: 'blue' }} />
                      </a>
                    </li>
                    <li className="twitter">
                      <a target="_blank" title="Twitter" href="https://twitter.com/#" rel="noopener">

                        <TwitterIcon sx={{ fontSize: "2rem" }} style={{ color: '#1DA1F2', }} />
                      </a>
                    </li>
                    <li className="youtube">
                      <a target="_blank" title="Youtube" href="#" rel="noopener">

                        <YouTubeIcon sx={{ fontSize: "2rem" }} style={{ color: 'red' }} />
                      </a>
                    </li>
                    <li className="pinterest">
                      <a target="_blank" title="Pinterest" href="https://pinterest.com/#" rel="noopener">

                        <PinterestIcon sx={{ fontSize: "2rem" }} style={{ color: 'red' }} />
                      </a>
                    </li>
                    <li className="instagram">
                      <a target="_blank" title="Instagram" href="https://instagram.com/theplanetd" rel="noopener">
                        <InstagramIcon sx={{ fontSize: "2rem" }} style={{ color: "#E01765" }} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="grandtour_flickr-7" className="widget Grandtour_Flickr widget_text">
            <h2 className="widgettitle">Recent Trips</h2>
            <ul className="flickr">
              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"

                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"

                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"
                  />
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.flickr.com/photos/artiephotography/28760131762/">
                  <img
                    src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg"
                    alt="Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia"
                    width="120"
                    height="120"
                  />
                </a>
              </li>
            </ul>
            <br />
          </div>

        </div>
      </div>

      <div class="footer_bar  ppb_wrapper ">

        <div class="footer_bar_wrapper ">
          <div class="menu-footer-menu-container"><ul id="footer_menu" class="footer_nav">
            <li id="menu-item-215" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-215">
              <a className='footer-content' href="https://themes.themegoods.com/grandtour/demo/">Home</a>
            </li>
            <li id="menu-item-216" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-216">
              <a  className='footer-content' href="https://themes.themegoods.com/grandtour/demo/tours/">Tours</a>
            </li>
            <li id="menu-item-217" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-217">
              <a  className='footer-content' href="https://themes.themegoods.com/grandtour/demo/blog/">Blog</a>
            </li>
            <li id="menu-item-218" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-218">
              <a  className='footer-content' href="#">Purchase Theme</a>
            </li>
          </ul></div>	    <div id="copyright">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
          <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <a id="toTop"><i class="fa fa-angle-up"></i></a>
          </div>

        </div>
      </div>
    </div>



  );
}
export default Footer_Tour;