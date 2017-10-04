import React,{Component } from 'react';


export default class PgCoarse extends Component{

    render(){

        return(
            <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Admissions - Undergraduate Courses</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Admission</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-8 col-sm-7">     
                            <p><strong>General Norms:</strong> </p>                            
                            <ul className="custom-list-style tik hand-right">
                                <li> Application for Admission should be in the prescribed form issued by the Office of Admissions. Application Folders are issued from College Office for a payment of a nominal fee.</li>
                                <li> Applications should be submitted personally by the Candidates. Incomplete Applications will not be processed.</li>
                                <li> One photocopy each of all relevant certificates is to be submitted along with the application form. No original certificates should be attached to the application form. Reservation Category candidates have to submit the photocopy of the caste/category certificate along with the Application form.</li>
                                <li> The Applicant should be present for admission along with the Parent / Guardian.</li>
                                <li> All Original Certificates along with six passport size and four stamp size photographs should be produced at the time of admission.</li>
                                <li> The Admission Process includes Payment of Fees, and Campus Culture Briefing.</li>
                                <li> Admissions are subject to the approval of the Bangalore University.</li>
                                <li> <strong>Fee Regulations :</strong>
                                    <ul className="custom-list-style tik caret-right">
                                             <li> Fees once paid will not be refunded.</li>
                                             <li> A student joining the college after the commencement of the academic year shall pay the full fees for the year.</li>
                                             <li> Students are required to pay fees for the next higher class on the date and the time intimated to them from the College Office.</li>
                                    </ul>
                                </li>                              
                            </ul>
							
							<a name="eligibility"></a>
							<h3 className="text sub-heading">Eligibility for Admission</h3>                            
							<ul className="custom-list-style tik star">
								<li> 10+2 / Pre-University Course/Equivalent.</li>
								<li> The Applicant should satisfy all other conditions set by Bangalore University.</li>
							</ul>
							<h3 className="text sub-heading">Documents</h3>                             
							<p>Along with the application, one copy each of the relevant documents mentioned below must be submitted. At the time of admission interview, all the originals along with another set of photocopies of the same have to be produced</p>   
							<ul className="custom-list-style tik check">
								<li> Transfer Certificate from School / College last attended.</li>
								<li> Class X / SSLC Certificate.</li>
								<li> PUC or Equivalent Marks Card.</li>
								<li> Conduct Certificate.</li>
								<li> Migration Certificate in the case of student who have passed any exam other than Karnataka PU Exam.</li>
								<li> SC / ST / Backward Class Minority Certificates from Tahasildar.</li>
								<li> Six passport size and four stamp-size photographs.</li>
							</ul>

                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
								<h3 className="title">Downloads</h3>
								<p>For your benefit we have compiled in this section some of the key features you should know about Soundarya School.</p>
								<p><a className="btn btn-theme" href="send_attachment.mako?attachment_type=SIMS-application-form"><i className="fa fa-download"></i>Application Form for UG-Courses</a></p>
								<p><a className="btn btn-theme" href="send_attachment.mako?attachment_type=brochure"><i className="fa fa-download"></i>Brochure</a></p>
								<p><a className="btn btn-theme" href="send_attachment.mako?attachment_type=leaflet"><i className="fa fa-download"></i>Leaflet</a></p>
                            </section>
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
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )

    }
}
