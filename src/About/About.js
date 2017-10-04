import React,{Component } from 'react';
import './About.css';

export default class About extends Component{

    render(){

        return(
                    <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">About Institute</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="index.mako">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">About SIMS</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                          
                            <h3 className="title" style={{"margin-top":"30px"}}>Our Inspiration</h3>
                        <blockquote className="custom-quote">
                                <p><img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/about_SIMS_Insp.png"/></p>
                            </blockquote>
                            <h3 className="title" style={{"margin-top":"30px"}} id="vision">Vision</h3>
                        <blockquote className="custom-quote">
                                <p><i className="fa fa-quote-left"></i>To ensure quality higher education and to enable stakeholders to face the contemporary challenges of the world with courage, confidence &amp; commitment.</p>
                            </blockquote>
                            
                        <h3 className="title" style={{"margin-top":"30px"}} id="mission">Mission</h3>
                        <blockquote className="custom-quote">
                                <p><i className="fa fa-quote-left"></i>Strive to create knowledge, to open the minds of the students to take the advantage of this educational opportunity</p>
                                <ul className="custom-list-style">
                                <li><i className="fa fa-hand-o-right"></i> To respect ideas and free expressions of the students.</li>                       
                            </ul>
                            <p>To identify and remove restraints on student’s full participation, so that students can discuss individual capabilities</p>                    
                            </blockquote>
                            
                            <h3 className="title" style={{"margin-top":"30px"}}>Motto</h3>
                        <blockquote className="custom-quote">
                                <p><i className="fa fa-quote-left"></i>To develop, to maintain and transmit true knowledge ethics and traditional values that highlights the essence of the compositions of Sri Shankaracharya especially the most sacred “Soundarya Lahari”.</p>
                            </blockquote>
                            
                        
                        
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="/About">About Us</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/Management">Management </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/About">Mission</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/About">Vision</a></li>
                                </ul>
                            </section>
                            <section className="widget">
            <h3 className="title">Contact</h3>
            <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
            <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="tel:080 28390260">080-28390260 </a></p>
            <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
        </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
                )
    }
}