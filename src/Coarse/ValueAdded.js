import React,{Component } from 'react';


export default class Research extends Component{

    render(){

        return (
        <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Value Added Courses</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Value Added Courses</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                                                    
                            <h2 className="title sub-heading">Value Added Programs</h2>
                            <ul className="custom-list-style tik pl2">
                                <li>Tally (ERP 9.0)</li>
                                <li>CA/CPT/CS coaching</li>
                                <li>IBPS/Banking exam </li>
                                <li>Web designing</li>     
                                <li>A+ hardware</li>  
                                <li>A+, N+, 70-646 Micro processor</li>  
                                <li>Spoken English training</li>
                                <li>Coaching for competitive examination</li>                       
                            </ul>                                                                                                  
                            <div className="clearfix"></div>
                            <h2 className="title sub-heading">Industry Oriented Programs</h2>
                            <ul className="custom-list-style tik pl2">
                                <li>.Net</li>
                                <li>SAP</li>
                                <li>Advanced Excel</li>                    
                                <li>Android App Development Program</li>
                                <li>Big-data Analysis</li>
                            </ul>                                                                                                  
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