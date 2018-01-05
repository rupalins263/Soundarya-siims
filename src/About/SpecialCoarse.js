import React,{Component } from 'react';


export default class Privacy extends Component{

    render(){
        return(
            <div className="content container">
               <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Special Courses</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Special Courses</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                    
                            <h2 className="title sub-heading">CA / CPT classes for B.Com &amp; B.B.M</h2>
                            <p style={{"text-align":"justify"}}>Graduates to enhance their skills further &amp; the pupils who are aspiring to become CA in the near future. Students will realize value for their money after undergoing a training sessions of this course @ SIMS campus.</p>                           
                            <h2 className="title sub-heading" id="net">.NET course for BCA</h2>                                                        
                            <p style={{"text-align":"justify"}}> students was introduced @ SIMS for our future aesthetic designer professionals. The students who undergo training of this course can become a master in designing a website and it will be helpful to the students to set up their own website designing organization or can even become free lancers in the near future.</p>                                                                                                    
                            <div className="clearfix"></div>                                                  
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="/SpecialCoarse">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/Research">Assesment Plan </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/Faculty">Teaching Staff</a></li>
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
        </div>)
    }
}