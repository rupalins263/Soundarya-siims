import React,{Component } from 'react';
import './Footer.css';

export default class Nav extends Component{

    render(){

        return(
        <footer className="footer">
        <div className="footer-content">
            <div className="container">
                <div className="row">
                <div className="footer-col col-md-2 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>More Links</h3>
                        <ul >
                            <li><a href="gallery.mako"><i className="fa fa-caret-right"></i>Gallery</a></li>
                            <li><a href="privacy-policy.mako"><i className="fa fa-caret-right"></i>Privacy Policy</a></li>
                            <li><a href="ug-courses.mako"><i className="fa fa-caret-right"></i>Courses Offered</a></li>
                            <li><a href="placements.mako"><i className="fa fa-caret-right"></i>Placements</a></li>
                            
                        </ul>
                    </div>
                </div>
                
                <div className="footer-col col-md-2 col-sm-3 about">
                    <div className="footer-col-inner">
                        <h3>&nbsp;</h3>
                        <ul>
                            <li><a href="news-events.mako"><i className="fa fa-caret-right"></i>News &amp; Events</a></li>
                            <li><a href="faculty.mako"><i className="fa fa-caret-right"></i>Faculty</a></li>
                            <li><a href="media.mako"><i className="fa fa-caret-right"></i>Press Media</a></li>
                            <li><a href="contact.mako"><i className="fa fa-caret-right"></i>Contact Us</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="footer-col col-md-3 col-sm-3 contact">
                        <h3>Contact us</h3>
                        <div className="row">
                            <p className="adr clearfix col-md-12 col-sm-4">
                                <i className="fa fa-map-marker"></i>        
                                <span className="adr-group">       
                                    <span className="street-address">SIMS<br/>
									<i style={{"visibility": "hidden"}} className="fa fa-map-marker pull-left"></i>  Soundarya Nagara, Sidedahalli,<br/>
									<i className="fa fa-map-marker pull-left" style={{"visibility": "hidden"}}></i> Nagasandra Post, Bangalore-560073<br/>
									<i className="fa fa-phone"></i>87227600601 / 080-28390260<br/>
									<i className="fa fa-envelope"></i><a href="#">degreesoundarya@gmail.com</a>
									</span>
                                    
                                </span>
                            </p>
                           
                        </div> 
                 
                </div>
				<div className="footer-col col-md-5 col-sm-5 contact">					
					<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506759995/lms-jas_cju2qn.jpg" style={{"max-width":"60%","max-height":"130px","margin-right":"20px"}}/>
					<img style={{"max-width":"60%","max-height":"130px"}} src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506760011/naac-logo_nvxcem.png" alt="NAAC-Logo"/>        
                </div>
                </div>   
            </div>        
        </div>
        <div className="bottom-bar">
            <div className="container">
                <div className="row">
                    <small className="copyright col-md-6 col-sm-12 col-xs-12">Copyright @ 2015. All Rights Reserved.</small>
                    <div className="col-md-6 col-sm-12 col-xs-12 pull-right" style={{"margin-top": "8px"}}><small className="pull-right">Designed by Akriveia Technologies</small></div>
                    
                </div>
            </div>
        </div>
    </footer>
        )
    }
}
