import React,{Component } from 'react';


export default class Student extends Component{

    render(){

        return(
            <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Student Council</h1>
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
                            
                            <p><img className="img-responsive" src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/student-council_CampusLife.jpg" alt=""/></p>
                            <h3 className="text sub-heading">Composition of the Student Council</h3>
                            <p>Student Council is a body of students to promote quality in student life at SIMS. It is a support system for holistic development of the students. The Core Council is constituted of two College Captains (a girl and a boy, selected from the final year students); two College Vice-Captains (a girl and a boy selected from the second year batches); two Cultural Captains (a girl and a boy nominated from the final year batches) and two Sports Captains (a girl and a boy nominated from the final year batches). The larger student council comprises of the Core Council, the selected class representatives and the selected representatives of various clubs and associations.</p>

                            <h3 className="text sub-heading">Roles and Responsibilities of the Student Council</h3>
                            <p>The student council is involved in organizing the Graduation day, intra and inter-collegiate sports fests and other fests. The two College Captains are also members of IQAC. The members of the Core Council also represent in Discipline Committee and Grievance Redressal Cell. There are regular Student Council meetings every month along with principal and the student council mentors. In this meeting the students evaluate the previous month's activities, plan out the up-coming programmes and discuss relevant issues with the Management. The student council mentors are responsible for organizing the student council meetings and the other events in which the student council has a role. At the beginning of every academic year, a new student council is constituted.</p>
                            
 
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