import React,{Component } from 'react';


export default class Faculty extends Component{

    render(){
        return(<div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Milestones</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">About Us</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">   
                            <h3 className="text sub-heading">University Rank Holders</h3>
                            <div className="row" style={{"margin-top": "30px","margin-bottom":"30px"}}>          
                                <div className="col-sm-6" style={{"text-align": "center","padding-right":"0"}}>
                                    <div className="avatar"> 
                                        <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-rukmini_Milestones.jpg" alt="" draggable="false"/> 
                                        
                                    </div>

                                    <div className="rank-holders" style={{"background-color": "#2D7197 "}}>
                                              <h5 style={{"color": "#FF0"}}>Ms. Rukmini M</h5>
                                              <p className="font-lora" style={{"color":"#eee"}}>3rd Rank in BBM<br/>Bangalore University</p>
                                            <p style={{"padding":"15px","text-align":"justify","color":"#eee"}}>“ i’ve a great deal of support from my lecturers and professors. Everyone here encourages to succeed. SIMS has opened me to many opportunitiesyo encash. I aim to help and touch the lives of as many peoples as i can with all trhe skills and knowledge  i have gained through my studies.”</p>
                                        </div> 
                                </div>
                                <div className="col-sm-6" style={{"text-align": "center", "padding-left":"0"}}> 
                                    <div className="avatar"> 
                                        <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-sobha_Milestones.jpg" alt="" draggable="false"/> 
                                    </div>  
                                    <div className="rank-holders" style={{"background-color":"#ADD4F5"}}>
                                              <h5 style={{"color":"#274251"}}>Ms. Sobha Rani</h5>
                                              <p>5th Rank in BCA<br/>Bangalore University</p>
                                              <p style={{"padding":"15px","text-align":"justify"}}>“ i really like the professors here. They do a good job of relating to the students, not by trying to use words and terminology to fit in, but by pointing out stuff we see and playing off it smoothly, by creative usage of the infrastructure.”<br/> &nbsp;</p>
                                              
                                        </div>          
                                </div>
                            </div>
                            

                                <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                            <li data-target="#myCarousel" data-slide-to="3"></li>
                                            <li data-target="#myCarousel" data-slide-to="4"></li>
                                            <li data-target="#myCarousel" data-slide-to="5"></li>
                                            <li data-target="#myCarousel" data-slide-to="6"></li>
                                            <li data-target="#myCarousel" data-slide-to="7"></li>
                                            <li data-target="#myCarousel" data-slide-to="8"></li>
                                            <li data-target="#myCarousel" data-slide-to="9"></li>
                                            <li data-target="#myCarousel" data-slide-to="10"></li>
                                            <li data-target="#myCarousel" data-slide-to="11"></li>
                                        </ol>


                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide1_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide2_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide3_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide4_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide5_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide6_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide7_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide8_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide9_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide10_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide11_MilestonesSlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/Aboutus/mil-slide12_MilestonesSlideShow.jpg" alt=""/>
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




                            <h3 className="text sub-heading plus-tab"><button style={{background:"#282222"}} data-toggle="collapse" data-target="#demo"><i className="fa fa-plus" aria-hidden="true"></i></button> Milestones</h3>

                            <div id="demo" className="collapse">        
 
                            
                            
                            
                            <ul className="custom-list-style tik hand-right">
                                <li> BBM and B.Com courses were instituted. (2007-08) </li>
                                <li> Cafeteria facility was set. (2007-08)</li>
                                <li> BCA courses started. (2009-10)</li>
                                <li> Inter-collegiate IT-quiz “Brain Storm” was organized. (2011-12)</li>
                                <li> Organized state level seminar on “Knowledge Economy”. (2011-12)</li>
                                <li> Inter-collegiate debate competition “MOOT”.(2011-12)</li>
                                <li> Inter-collegiate press-meet competition-MOCK PRESS. (2012-13)</li>
                                <li> Inter-collegiate Business quiz competition was organised by dept. Of commerce-2012</li>
                                 <li> NAAC Accreditation 2014.</li>
                                <li> National level conference in sports and games.(2014-15)</li>
                                <li> Mega job fair. 2014-15</li>
                                <li> COMBIZIT- mega event at university level-2015-16.</li>
                                <li> One day national conference on human resource management- recent trends 2015-16</li>
                                                           
                            </ul>
                            </div>

                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">
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
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-7.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-7.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-8.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-8.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-9.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-9.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-10.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-10.jpg" alt=""/>                                                                                                         
                                    </a>
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-11.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-11.jpg" alt=""/>                                                                                                         
                                    </a>  
                                   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-12.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-12.jpg" alt=""/>                                                                                                         
                                    </a>                        
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-13.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-13.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-14.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-14.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-15.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-15.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-16.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-16.jpg" alt=""/>                                                                                                         
                                    </a>
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-17.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-11.jpg" alt=""/>                                                                                                         
                                    </a>  
                                   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-18.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-18.jpg" alt=""/>                                                                                                         
                                    </a>  <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-9.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-19.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-10.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-20.jpg" alt=""/>                                                                                                         
                                    </a>
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-11.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-21.jpg" alt=""/>                                                                                                         
                                    </a>  
                                   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-12.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-22.jpg" alt=""/>                                                                                                         
                                    </a>                        
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-13.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-23.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-14.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-24.jpg" alt=""/>                                                                                                         
                                    </a>                        

                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-15.jpg">                    
                                    <img className="img-responsive bg-img hide" src="assets/images/gallery/gallery-25.jpg" alt=""/>                                                                                                         
                                    </a>  
                                </div>
                                <div className="row ">   
                                    <a className="prettyphoto col-md-4 col-sm-6 bg-pad" rel="prettyPhoto[gallery]" title="" href="assets/images/gallery/gallery-16.jpg">                    
                                    <img className="img-responsive bg-img  hide" src="assets/images/gallery/gallery-26.jpg" alt=""/>                                                                                                         
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