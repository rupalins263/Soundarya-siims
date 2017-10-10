import React,{Component } from 'react';


export default class Career extends Component{

    render(){

        return(
            <div class="content container">
            <div class="page-wrapper">
                <header class="page-heading clearfix">
                    <h1 class="heading-title pull-left">New Vacancies</h1>
                    <div class="breadcrumbs pull-right">
                        <ul class="breadcrumbs-list">
                            <li class="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i class="fa fa-angle-right"></i></li>
                            <li class="current">Careers</li>
                        </ul>
                    </div>
                </header> 
                <div class="page-content">
                    <div class="row page-row">
                        <div class="jobs-wrapper col-md-8 col-sm-7">  

			   <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507037726/Recruitment_g8lehc.jpg"/><br/><br/>

         
                     
                                                                 
                        </div>
                        <aside class="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            
                            <section class="widget">
                                <h3 class="title">Contact</h3>
                                <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                                <p class="tel"><i class="fa fa-phone"></i>Tel: <a href="tel:080 28390260">080-28390260 </a></p>
                                <p class="email"><i class="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}