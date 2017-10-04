import React,{Component } from 'react';


export default class Sports extends Component{

    render(){

        return(
        <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Literary Club</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Campus Life</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">                         
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                             <li data-target="#myCarousel" data-slide-to="3"></li>
                                            <li data-target="#myCarousel" data-slide-to="4"></li>
                                             <li data-target="#myCarousel" data-slide-to="5"></li>
                                           
                                        </ol>


                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide1_CampusLife.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide2_CampusLife.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide3_CampusLife.jpg" alt=""/>
                                            </div>
                                                <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide4_CampusLife.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide5_CampusLife.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/sports-slide6_CampusLife.jpg" alt=""/>
                                            </div>
                                          
                                        </div>

  
                                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                             </div>
                            <p>The Sports facilities are established to develop athleticism, to keep students HEALTHY in body and in mind. The Club provides coaching in athletics and games for committed performers. The Sports Club takes up the responsibility of organizing the inter & intra-collegiate events. Organizing Inter-collegiate athletics meet and tournaments are also the responsibilities of the Sports Club. Regular coaching is provided. The College has a full-time Physical Education Instructor who takes care of the activities of the Sports Club. The SIMIans have won sporting accolades at the inter-collegiate, university, state, South Zone & at National Levels.</p>   <h3 className="text sub-heading">Major Events::</h3>
                             <ul className="activities">
                              <ul className="activities">
                                <li>Games &amp; Competitions for the students</li>
                                <li>Inter-collegiate Sports Meet</li>
                                <li>Inter-collegiate Tournaments</li>
                                <li>Regular Coaching in Games and Athletics</li>
                            </ul>

                            </ul>
 
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="special-courses.mako">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="research-facilities.mako">Assesment Plan </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="#faculty.mako">Teaching Staff</a></li>
                                </ul>
                                
                            </section>
                            <section className="widget">
                                    <h3 className="title">Contact</h3>
                                    <p><b>SIMS</b><br/>Soundarya Nagara, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                                    <p className="tel"><i className="fa fa-phone"></i>Tel: <a href="tel:080 28390260">080-28390260 </a></p>
                                    <p className="email"><i className="fa fa-envelope"></i>Email: <a href="mailto:degreesoundarya@gmail.com">degreesoundarya@gmail.com</a></p>
                                </section>
                            <section className="widget has-divider">
                                <h3 className="title">Gallery</h3>
                               <div className="row ">
                           
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928252/gallery-1_fsdguv.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928258/gallery-2_fmucas.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928263/gallery-3_dmkzpy.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928268/gallery-4_jnrein.jpg" alt=""/>                                                                                                         
                                    </a>
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928275/gallery-5_xewr0f.jpg" alt=""/>                                                                                                         
                                    </a>  
                                   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="/Gallery">                    
                                    <img className="img-responsive bg-img" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506928280/gallery-6_biczsb.jpg" alt=""/>                                                                                                         
                                    </a>         
                         
                                </div>
                                
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>)
    }
}