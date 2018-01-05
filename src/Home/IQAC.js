import React,{Component } from 'react';
import './Home.css';

export default class Home extends Component{

    render(){

        return(<div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">IQAC</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">IQAC</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="col-md-8 col-sm-7">                            
							<h3 style={{"margin-bottom":"10px"}}><strong>VISION &amp; MISSION</strong></h3>
							<p><b>The Vision statement of the IQAC:</b></p>
							<p>Determined to tackle the need of quality and assurance to excellence at Soundarya institute of management and science. </p>
							<p><b>The Mission statement of the IQAC:</b></p>
							<ul className="custom-list-style tik pl2">
								<li>In keeping with its Jesuit heritage and identity, IQAC models and experts excellence in academic and professional pursuits.</li>
								<li>IQAC inculcates the capability and dispositions for thoughtful and significant thought, inventiveness, and innovation in its main stakeholders, that is staff and students of Soundarya institute of management and science. </li>
								<li>IQAC also aims to identify and inculcates extra-curricular talent and potential of both staff and students, which will go towards intensification.</li>
							</ul>
							<h3 style={{"margin-bottom":"10px"}}><strong>TEAM IQAC</strong></h3>
							<p><b>Total Quality Management (TQM) Team</b></p>
							<table className="table table-bordered table-responsive table-condensed table-striped">
								<thead>
									<tr><th colspan="2">Internal Members</th>									
								</tr></thead>
								<tbody>
									<tr>
										<td>Dr . Suresh C Hegadi</td>
										<td>Principal</td>
									</tr>
									<tr>
										<td>Mr. Keerthan Kumar</td>
										<td>Chief executive officer, SET</td>
									</tr>
									<tr>
										<td>Mrs. Haritha M</td>
										<td> IQAC &amp; PG Co-Ordinator</td>
									</tr>
									<tr>
										<td>Mr.  Naveen </td>
										<td>HOD: B.Com</td>
									</tr>
									<tr>
										<td>Mr. Praveen</td>
										<td>HOD: BCA</td>
									</tr>
									<tr>
										<td>Mr. Kishore Kumar</td>
										<td>HOD: Humanities</td>
									</tr>
									<tr>
										<td>Ms. Nischitha </td>
										<td>Staff In-charge </td>
									</tr>
									<tr>
										<td> Dr. Harish PM </td>
										<td> Physical education Director </td>
									</tr>
									<tr>
										<td>Mr. Ranganath </td>
										<td>Chief Librarian </td>
									</tr>
									<tr>
										<td>Mrs. Prithvii Heggade </td>
										<td>Staff in charge IQAC</td>
									</tr>
								</tbody>
							</table>
							<table className="table table-bordered table-responsive table-condensed table-striped">
								<thead>
									<tr><th colspan="2">External Members</th>									
								</tr></thead>
								<tbody>
									<tr>
										<td> David  </td>
										<td>Student</td>
									</tr>
									<tr>
										<td>Ms. Rukmini </td>
										<td>Alumni</td>
									</tr>
								</tbody>
							</table>
							<table className="table table-bordered table-responsive  table-condensed table-striped">
								<thead>
									<tr><th colspan="2">Industry representatives</th>									
								</tr></thead>
								<tbody>
									<tr>
										<td>Mr.Sai   Krishna Vyas</td>
										<td>C.A</td>
									</tr>
								</tbody>
							</table>
							<h3 style={{"margin-bottom":"20px"}}><strong>STRATEGIES OF IQAC</strong></h3>
							<p>IQAC shall progress mechanisms and measures for:</p>
							<ul className="custom-list-style tik pl2">
								<li>Ensuring judicious, well-organized and progressive presentation of academic, administrative responsibilities</li>
								<li>The significance and excellence of academic and research programmers.</li>
								<li>Optimization and incorporation of modern methods of teaching and learning. </li>
								<li>Ensuring the competence, maintenance and implementation of the support structure &amp; services.</li>
								<li>Research distribution institutions. </li>
							</ul>
							<h3 style={{"margin-bottom":"20px"}}><strong>FUNCTIONS OF IQAC</strong></h3>
								<ul className="custom-list-style tik pl2">
									<li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.</li>
									<li>Documentation of the various programmers/activities leading to quality improvement.</li>
									<li>Acting as a documentary centre of the Institution for coordinating quality-related activities, including implementation and spreading of best practices.</li>
									<li>Expansion and relevance of quality benchmark for various academic and administrative activities of the institution.</li>
									<li>Facilitating the conception of a learner-centric environment conducive to quality education for participatory teaching and learning process.</li>
									<li>Collection of feedback response from students, parents and other   stakeholders on quality-related institutional processes.</li>
									<li>Distribution of information on various quality Bench marks of higher education.</li>
									<li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.</li>
								</ul>
							<h3 style={{"margin-bottom":"20px"}}><strong>IQAC REPORT: </strong></h3>
							<p>The foremost   task of the IQAC is to expand a system for conscious, reliable and systematic improvement in the presentation of the institution. The Internal Quality Assurance Cell (IQAC) has a significant contribution in the functioning of the Institution. </p>
							<p><b>Reports</b></p>
							<p>AQAR -2015</p>
							<p>NAAC/AQAR ACK/ SEPT/ 2015/ KACOGIN18476</p>
							<p>AQAR- 2016</p>
							<p>NAAC/AQAR ACK/JULY/ 2016/ KACOGIN18476</p>
						</article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                            <section className="widget has-divider">
                                <h3 className="title">Related Links</h3>
                                <ul className="job-list custom-list-style">
                                        <li><i className="fa fa-caret-right"></i><a href="/#/SpecialCoarse">Curriculum</a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Research">Assesment Plan </a></li>
                                        <li><i className="fa fa-caret-right"></i><a href="/#/Faculty">Teaching Staff</a></li>
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