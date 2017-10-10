import React,{Component } from 'react';


export default class Downloads extends Component{

    render(){

        return(<div className="content container">
        <div className="page-wrapper">
            <header className="page-heading clearfix">
                <h1 className="heading-title pull-left">Contact</h1>
                <div className="breadcrumbs pull-right">
                    <ul className="breadcrumbs-list">
                        <li className="breadcrumbs-label">You are here:</li>
                        <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                        <li className="current">Contact Us</li>
                    </ul>
                </div>
            </header> 
            <div className="page-content">
                <div className="row">
                    <article className="contact-form col-md-8 col-sm-7  page-row">                            
                        <h3 className="title">Get in touch</h3>
                        
                        <p>We’d love to hear from you. Please fill in the form below and we will get in touch with you at the earliest.</p>
                        
                        <form method="POST" action="contact.mako" id="contact-form">
                            <div className="form-group name">
                                <label for="name">Name</label>
                                <input id="name" type="text" className="form-control req_field" placeholder="Enter your name"/>
                            </div>
                            <div className="form-group email">
                                <label for="email">Email<span className="required">*</span></label>
                                <input id="email" type="email" className="form-control req_field req_field_email" placeholder="Enter your email"/>
                            </div>
                            
                            <div className="form-group phone">
                                <label for="phone">Phone</label>
                                <input id="phone" type="tel" className="form-control" placeholder="Enter your contact number"/>
                            </div>
                            <div className="form-group message">
                                <label for="message">Message<span className="required">*</span></label>
                                <textarea id="message" className="form-control req_field" rows="4" placeholder="Enter your message here..."></textarea>
                            </div>
                            <button type="button" className="btn btn-theme" onclick="submit_form('contact-form');">Send message</button>
                        </form>       
                         <article className="map-section">
                        <h3 className="title">Our Location</h3>
                        <div id="map">
						
						
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.450988098895!2d77.4917811143546!3d13.070579516236274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae233f451c202f%3A0x82bf7bc62ebbf221!2sSoundarya+Institute+of+Management+and+Science!5e0!3m2!1sen!2sin!4v1455015737188" width="100%" height="315" frameborder="0" style={{"border":"0"}} allowfullscreen=""></iframe></div>
                    </article>
                    </article>

                   
                
                    <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
                        <section className="widget has-divider">
                                <h3 className="title">Downloads</h3>
                                <p>For your benefit we have compiled in this section some of the key features you should know about SIMS.</p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/sims/brochure.pdf"><i className="fa fa-download"></i>Download Brochure </a></p>
                                <p><a className="btn btn-theme" href="http://zenopsys.net/soundarya_forms/sims/SIMS-application-form.pdf"><i className="fa fa-download"></i>Download Application Form</a></p>
                            </section>
                        <section className="widget has-divider">
                            <h3 className="title">Postal Address</h3>
                            <p className="adr">
                                <span className="adr-group">       
                                    <span className="street-address"><b>Soundarya Institute of Management &amp; Science</b></span><br/>
                                    <span className="region">Soundarya Nagara, Sidedahalli,</span><br/>
                                    <span className="postal-code">Nagasandra Post, Bangalore-560073</span>
                                </span>
                            </p>
                        </section>   
                        
                        <section className="widget">
                            <h3 className="title">All Enquiries</h3>
                            <p className="tel"><i className="fa fa-phone"></i>Tel: 87227600601 / 080-28390260</p>
                            <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
                        </section>   

                        <section className="widget">
                            <h3 className="title">Our Institutions</h3>
                            <p><a href="http://school.soundaryainstitutions.in">Soundarya School</a></p>
                            <p><a href="http://puc.soundaryainstitutions.in">Soundarya Composite PU College</a></p>
                            <p><a href="/">Soundarya Institute of Management &amp; Science</a></p>
                            <p><a href="http://central.soundaryainstitutions.in">Soundarya Central School (CBSE)</a></p>
                        </section>   

                    </aside>
                </div>
                
            </div>
        </div>
    </div>)
    }
    }