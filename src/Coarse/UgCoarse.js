import React,{Component } from 'react';


export default class Nav extends Component{

    render(){

        return(
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Courses Offered</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">UG courses</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <div className="col-md-12 col-sm-12">
							<div className="col-md-12 p0">
								<p>Our college has a number of courses to offer at the under-graduate as well as post-graduate level. The under-graduate courses consist of B.Com, BBA and BCA and post-graduate course consist of M.Com. Students can also choose from different elective subjects offered within these courses as per their interests. These mainstream courses are conducted as per the Bengaluru University curriculum with the aim of imparting the best academic education to our students. Additional value-added programs are also conducted with the intention of enhancing the employable capability of our students.</p>  
								<ul className="custom-list-style tik hand-right">
									<li>B.Com</li>
									<li>BBA</li>
									<li>BCA</li>
									<li>B.Sc</li>
								</ul>
								<br/>
                            </div>
							<div className="col-md-12 p0">
								<div className="exTab2">
									<ul className="nav nav-tabs">
										<li className="active"><a href="#tab1" data-toggle="tab" aria-expanded="true">B.Com</a></li>
										<li className=""><a href="#tab2" data-toggle="tab" aria-expanded="false">BBA</a></li>
										<li className=""><a href="#tab3" data-toggle="tab" aria-expanded="false">BCA</a></li>
										<li className=""><a href="#tab4" data-toggle="tab" aria-expanded="false">B.Sc</a></li>
									</ul>
									<div className="tab-content col-md-12">
										<div className="tab-pane active" id="tab1">
											<h3 className="title" style={{"margin":"10px 0 20px","padding-left":"15px"}}>B.Com (Bachelor of commerce)</h3>
											<div className="col-md-6 col-xs-12">
												<table className="table table-bordered table-responsive table-condensed table-striped">
													<thead>
														<tr><th colspan="2">DEPARTMENT DETAILS</th>									
													</tr></thead>
													<tbody>
														<tr>
															<td>Name of the Department</td>
															<td>Department of Commerce and Management</td>
														</tr>
														<tr>
															<td>Year of Establishment</td>
															<td>2007-2008</td>
														</tr>
														<tr>
															<td>Name of the Programme</td>
															<td>B.Com </td>
														</tr>
														<tr>
															<td>Additional Courses</td>
															<td>Tally ERP 9, Diploma in Banking and Finance</td>
														</tr>
														<tr>
															<td>Specialization Offered</td>
															<td>Accounting and Taxation <br/> Banking &amp; Insurance <br/> Finance<br/> Human Resource Management<br/> Marketing</td>
														</tr>
														<tr>
															<td>Total No. of faculties</td>
															<td>13</td>
														</tr>
														<tr>
															<td>Students teacher’s Ratio</td>
															<td>44:1</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div className="col-md-6 col-xs-12">
												<div className="panel-group" id="accordion1">
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion1" href="#collapseOne">VISION</a>
															</h4>
														</div>
														<div id="collapseOne" className="panel-collapse collapse in">
															<div className="panel-body">
																<p>To develop corporate leaders with multi-disciplinary talents to face the socio economic and global challenges with excellent ethical practices of commerce and management.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo">MISSION</a>
															</h4>
														</div>
														<div id="collapseTwo" className="panel-collapse collapse">
															<div className="panel-body">
																<ul className="custom-list-style tik pl2">
																	<li>To impart superior quality education with modern teaching methods.</li>
																	<li>To provide maximum practical exposure to students to bridge the gap between academics and industry.</li>
																	<li>To continuously develop value added programs to meet stakeholder requirements.</li>
																</ul>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion1" href="#collapseThree">OBJECTIVES</a>
															</h4>
														</div>
														<div id="collapseThree" className="panel-collapse collapse">
															<div className="panel-body">
																<p>Consistent with the SIMS Vision, Department of Commerce and Management is also pursuing excellence in education by imbibing the spirit of college motto 'COURAGE, CONFIDENCE and COMMITMENT'. The program emphasizes on strong foundation in theory and practice to make each student fit for employment and higher studies. Practical exposure and emphasis on soft skills training make the B.Com and BBA courses unique from other colleges.</p>
																<p>Department of Commerce and Management has committed in its pursuit of excellence and adopted the following objectives to achieve the college vision and mission to become a transformational leader in education.</p>
																<ul className="custom-list-style tik pl2">
																	<li>To train and develop the students with the much-needed soft skills so that they are more competitive for employment and higher studies.</li>
																	<li>To inculcate and promote humane values in students to mould them as highly responsible citizens of tomorrow catering to the wellbeing of each fellow being and the society at large.</li>
																	<li>To create a positive mindset that care for the upliftment of underprivileged and marginalized sections of the society.</li>
																</ul>
															</div>
														</div>
													</div>									
												</div>
											</div>
											<div className="col-md-12 col-xs-12">
												<div className="panel-group" id="accordion2">
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse1">MAJOR INSTITUTIONAL HAPPENINGS AND ACTIVITIES</a>
															</h4>
														</div>
														<div id="collapse1" className="panel-collapse collapse in">
															<div className="panel-body">
																<p>The college inaugural function on 1<sup>st</sup> July 2016 was conducted to all the first years students at Amphi-theatre, Dr. Hiremath was invited as chief guest for the function were his motivational speech inspired the students. On the same day CA/CPT pre-Orientation program by Mr.Shripaul Jain designed to assist students was conducted by K2 LEARNING INSTITUTE OF CHARTERED ACCOUNTANT, the students were enlightened with advantages of doing CA course and also hurdles in it.</p>
																<p> From 3<sup>rd</sup>  July to 5<sup>th</sup> July 2016 the motivational work-shop and the personality development program was organised for 1<sup>st</sup> and 2<sup>nd</sup> year students (batch wise), at ocarina, speakers were Mr. Kiran Sagar and Mrs. Shwetha Sagar the students were taught about the  person's psychological qualities to life and also how the person deals with the world around him. </p>
																<p>From 4<sup>th</sup> July to 7<sup>th</sup> July 2016 an Adventurous Camp was conducted for the students and organised by Mrs. Rukmini at SIMS campus different events were conducted like Blind trucking, Commander bridge, Frame walking etc., It was a camp conducted for 4 days were the students had a great experience of an adventurous world and also they were explored to the outer world to develop confidence and team spirit among the students.</p>
																<p>On July 22<sup>nd</sup> 2016 Fresher’s party celebration was organised by students of SIMS to welcome their Juniors and the day was colourful with the cultural with cultural programs and games and guest was also invited Dr. Suresh.C.Hegadi, Principal,SIMS. </p>
																<p>On 5<sup>th</sup> August 2016, a communication skills seminar was organised for all the students of B.Com and BBA by Language department, SIMS.</p>
																<p>On August 15<sup>th</sup> Independence Day was celebrated at SIMS, by hoisting the flag and with cultural activities.</p>
																<p>On 18<sup>th</sup> September 2016 Parents Teachers meeting was conducted to all the students of SIMS at Ocarina, with an intention to convey the parents their children’s academic and non-academic performance. </p>
																<p>On September 23<sup>rd</sup> and 24<sup>th</sup> 2016 Inter College Fest was organised by SIMS “COMBIZIT” around 60 colleges participated in the fest, the event was inaugurated by Anand Joshi, the vice chancellor of CMR University. </p>
																<p>On 27<sup>th</sup> September 2016, An orientation programme on “Business Choices” was organised to all the final year B.Com and BBA students by Omkar &amp; Prathik, with an intention of creating awareness among the students regarding the various business opportunities.</p>
																<p>On 29<sup>th</sup> September 2016, An orientation programme on “Career Development” was organised to 3<sup>rd</sup> sem B.Com students, with an intention to make a dream of career to all commerce and management graduates.</p>
																<p>On 22<sup>nd</sup> October 2016 last working day and interaction with students of SIMS, at Amphi Theatre.</p>
																<p>From 24<sup>th</sup> October 2016 to 3<sup>rd</sup> November 2016, Pre-Final Examination for all the B.Com, BBA students, from 8:30 to 11:30.</p>
																<p>From 11<sup>th</sup> NOV to 8<sup>th</sup> DEC Final Examination of Bangalore University for all B.Com, BBA &amp; BCA Streams.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse2">EVEN SEM</a>
															</h4>
														</div>
														<div id="collapse2" className="panel-collapse collapse">
															<div className="panel-body">
																<p>On 26<sup>th</sup> DEC, Re-Opening of college for the Odd Semester.</p>
																<p>On January 26<sup>th</sup> Republic Day was celebrated at SIMS, with cultural activities.</p>
																<p>From 30<sup>th</sup> JAN to 2<sup>nd</sup> Feb 2017 First internals was conducted for all the students of SIMS. </p>
																<p>From 14<sup>th</sup> MAR to 17<sup>th</sup> MAR 2017 Second Internals was conducted for all B.Com and BBA students.</p>
																<p>From 20<sup>th</sup> MAR to 25<sup>th</sup> MAR 2017 various themes performed for final year B.Com &amp; BBA students on behalf of farewell program for the academic year 2016-17.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse3">DEPARTMENTAL ACTIVITIES</a>
															</h4>
														</div>
														<div id="collapse3" className="panel-collapse collapse">
															<div className="panel-body">
																<p>On 5<sup>th</sup> August 2016, a Guest Lecture was organised on “Business Taxation” for all final year B.Com ‘A’ students by Prof. Satisha.H.K, Govt R.C. College. The lecture was conducted on a topic “Excise Duty” (Syllabus) Initiative taken by Mr. Naveen, SIMS.</p>
																<p>On 6<sup>th</sup> August 2016, a Guest Lecture was organised on “International Financial Reporting Standards” for all final year B.Com ‘A’ students by Prof. Ganesh. The lecture was conducted on the syllabus and examination pattern in the university, Initiative taken by Mrs. Sunitha, SIMS.</p>
																<p>On 29<sup>th</sup> August 2016 a one day workshop was conducted for 2<sup>nd</sup> and final year B.Com and BBA students at Ocarina by Mr. Ravichandran and Mr. Ganesh, to create an awareness among the students regarding the importance of soft skills for the individuals.</p>
																<p>On 15<sup>th</sup> September 2016 One day State Level seminar was organised by SIMS on the topic “Goods and Sales Tax and Its Impact”, at Ocarina, SIMS.</p>
																<p>On 6<sup>th</sup> JAN 2017, One day workshop “What Next after Graduation” was organised for Final year B.Com and BBA students, by Gnana Gangothri Institute of Competitive Exams, to create an awareness among the students about the Govt and PVT jobs and also how to crack the competitive exams successfully.</p>
																<p>On 16<sup>th</sup> JAN 2017, One day workshop “Diploma in Banking &amp; Finance” was organised for all B.Com and BBA students, by a resources person Mr. Manjunath &amp; Mr. Sai Krishna Vyas, Tally Consultant to enlighten students with various Banking Diploma Program “Indian Institute of Banking &amp; Finance”. </p>
																<p>On 20<sup>th</sup> &amp; 25<sup>th</sup> of JAN 2017, One day workshop “Career Development” was organised for all B.Com and BBA students, by Dheya, Rajath Rashmi, to create awareness among the students regarding their future and also conducted career Interest test for students.</p>
																<p>On 27<sup>th</sup> JAN 2017, One day workshop “Goods &amp; Sales Tax” was organised for Final year B.Com and BBA students, by Industrial Expert, Mr. Ravichandra Kammar, the session was covered by GST and its Implications.</p>
																<p>On 10<sup>th</sup> FEB 2017, One day workshop “Mock Stock Exchange”, ICICI Bank, Mrs. Sunithi Varma at Ocarina was organised for all B.Com &amp; BBA students, regarding the virtual money provided in the real trading share market.</p>
																<p>On 21<sup>th</sup> FEB 2017, One day workshop “Graphic designing by Dream Zone”,at Ocarina was organised for all B.Com &amp; BBA students, to create the awareness about the opportunities in the field of graphics and web designing.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse4">STUDENT'S ACTIVITIES</a>
															</h4>
														</div>
														<div id="collapse4" className="panel-collapse collapse">
															<div className="panel-body">
																<p>Like every other year, this year also several student centered activities were organized.  Independence Day, Republic Day, Teachers’ Day and International Women’s Day were celebrated with great involvement and enthusiasm by our students and staff.</p>
																<p>On July 27<sup>th</sup> 2016 the students of final year BBA were taken an initiation to conduct a program to give a tribunal to Dr. A.P.J Abdul Kalam, on the remembrance of his first death anniversary, Principal of SIMS delivered a speech about the simplicity and achievements of Dr. Kalam. </p>
																<p>On August 2<sup>nd</sup> 2016 The students of 3<sup>rd</sup> sem B.com ‘B’ organised a presentation on Union Budget 2016 for all the B.Com and BBA students with a intension of sharing knowledge about the Budget-2016.</p>
																<p>On 12<sup>th</sup> JAN 2017, Youth Day was celebrated by the final year BBA students of SIMS, 154<sup>th</sup> Birthday of Swami Vivekananda Jayanthi.</p>
																<p>On 7<sup>th</sup> MAR 2017, Thanking Day For all the teachers from the students of final year B.Com students was organised at Ocarina.</p>
																<p>0n 8<sup>th</sup> MAR 2017, The students of 2<sup>nd</sup> year BBA organised International women’s Day, at Ocarina to create awareness about the role of women in life, and presented a gift.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse5">COMMUNITY DEVELOPMENT ACTIVITIES AND EXTENSION ACTIVITIES</a>
															</h4>
														</div>
														<div id="collapse5" className="panel-collapse collapse">
															<div className="panel-body">
																<p>On July 21<sup>st</sup> 2016, The students of final year B.com ‘A’ conducted an development programme at Tottada Gudadhahalli Government School, Bangalore with an intension to create awareness among the students about the importance of education in the present world the event was organised by Mrs. Prithvi Heggade,SIMS .</p>
																<p> On July 23<sup>rd</sup> 2016 the students of final year BBA conducted a development activity at Yeshwanthpur Slum Area, to create a awareness among the slum people about various issues like cleanliness and health issues education etc., and also students conducted a survey on the life style of the people there and interacted for their problems the event was organised by Ms. Nishchitha.H.</p>
																<p>On 26<sup>th</sup> August 2016 the students of final year B.Com ‘B’ organised an extension activity with the intention to distributing the basic necessities to the students of Redemption convent, Nelmangala Bangalore, initiated by MRS. Shubha.</p>
																<p>On 31<sup>th</sup> August 2016 the students of 2<sup>nd</sup> year B.Com ‘B’ organised an extension activity with the intention to distribute the food provisions and clothes to a old age care centre, Om Ashram Trust Oldage,J.P.Nagar, Bangalore, initiated by MRS. Sunitha.</p>
																<p>On 1<sup>st</sup> September 2016 the students of 1<sup>st</sup> and 3<sup>rd</sup> year BBA students organised an extension activity with the intention to distribute the food provisions and clothes to a old age care centre, Soluru, Bangalore, initiated by MRS. Suguna and Ms. Nishchitha.H.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse6">ALUMNI MEET</a>
															</h4>
														</div>
														<div id="collapse6" className="panel-collapse collapse">
															<div className="panel-body">
																<p>On 15<sup>th</sup> August 2016,The final year students were taken the initiative to organise an Alumni meet foe all the Alumni’s batch starting from 2007-2015, and also the guest was invited Dr. Suresh.C.Hegadi, SIMS initiative taken by Ms. Nischitha H and Faculty of the Department.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse7">INDUSTRIAL VISITS</a>
															</h4>
														</div>
														<div id="collapse7" className="panel-collapse collapse">
															<div className="panel-body">
																<p>On 17<sup>th</sup> August 2016 one day Industrial Visit was organised for 2<sup>nd</sup> and 3<sup>rd</sup> Year BBA students to “Stock Market Institution”, Jayanagar, Bangalore to enhance the practical knowledge about the functioning of stock marke, initiated by Ms.Nishchitha.H.</p>
																<p>On 26<sup>th</sup> August 2016 one day Industrial Visit was organised for 2<sup>nd</sup> year B.com ‘A’ students to KSDCL Yeshwanthpur, Bangalore, to give the practical exposure regarding Industrial Production Process, initiated by MRS. Nethravathi.</p>
																<p>On 6<sup>th</sup> September 2016 one day Industrial Visit was organised for 1st year B.com ‘C’ students to KSDCL Yeshwanthpur, Bangalore, to give the practical exposure regarding Industrial Production Process, initiated by MR. Ramesh.D</p>
																<p>On 20<sup>th</sup> September 2016 one day Industrial Visit was organised for final year B.com students to Rane Engine Valves LTd, Tumkur, to give the practical exposure regarding Industrial Production Process, initiated by MRS. Shubha and Mrs. Prithvi Heggade.</p>
																<p>On 1st October 2016 one day Industrial Visit was organised for 2<sup>nd</sup> year B.com ‘B’ students to KMF, Tumkur, to give the practical exposure regarding Industrial Production Process, initiated by Mrs. Sunitha.N.</p>
																<p>On 14<sup>th</sup> October 2016 one day Industrial Visit was organised for first year B.com ‘B’ &amp; ‘A’ BBA students to KSIC (MYSORE SILK) Govt of Karnataka Enterprises, Mysore, to give the practical exposure regarding Industrial Production Process, initiated by MRS. Suguna, Mr. Ravi.B.A, Mr. Anil Kumar.</p>
															</div>
														</div>
													</div>
													<div className="panel panel-default">
														<div className="panel-heading">
															<h4 className="panel-title">
																<a data-toggle="collapse" data-parent="#accordion2" href="#collapse8">ACADEMIC ACHIEVEMENTS</a>
															</h4>
														</div>
														<div id="collapse8" className="panel-collapse collapse">
															<div className="panel-body">
																<ul className="custom-list-style tik pl2">
																	<li>More than 20 students got 70 out of 70 in various subjects.</li>
																	<li>More than 10 final year B.Com students got aggregate around 9 CGPA Points.</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="tab-pane" id="tab2">
											<h3 className="title" style={{"margin": "10px 0 20px"}}>BBA (Bachelor of Business Administration)</h3>
											<p>The broad objective of Bachelor of  Business Administration course is :-</p>
											<ul className="custom-list-style tik pl2">
												<li>To develop ethical managers with inter-disciplinary knowledge</li>
												<li>To develop entrepreneurs</li>
												<li>To prepare students to take the responsibility of full line of finance, marketing and human resource To develop ethical managers with inter-disciplinary knowledge functions of a company.</li>
												<li>To develop IT enabled global middle level managers.</li>
												<li>To develop business analyst for companies, capital markets &amp; commodity markets.</li>
											</ul>
											<p><strong>Eligibility: </strong> 10+2/Two years pre-university course of Karnataka state or its equivalent.</p>
											<p><strong>Duration: </strong> 3 years (6 semesters)</p>
											<p><strong>Scheme: </strong> Choice based credit system</p>
											<p><strong>Medium of instruction: </strong> English</p>
											<p><strong>Course matrix : </strong> As prescribed by Bangalore University</p>
											<p><strong>Elective group: </strong>
											</p><ul style={{"list-style-type": "decimal"}}>
											<li>Finance</li>
											<li>Marketing</li>
											<li>Human Resource</li>
											</ul><p></p>
										</div>
										<div className="tab-pane" id="tab3">
											<h3 className="title" style={{"margin": "10px 0 20px"}}>BCA (Bachelor of Computer Application )</h3>
											<p>BCA is a new age degree course in the field of computer applications. The duration of the course is normally three years. After completion of the BCA course, students can opt for masters or they can even try for job opportunities.</p>
											<p>Bachelor of Computer Applications is a course that is customized for students wishing to shine in the field of computers and information technology. If you are interested in computer related field, then BCA is the perfect course for you.</p>
											<p>BCA graduates can start up their career in either Government sector or private sector since there are a lot of employment opportunities in both these sectors. This degree helps the students to get a sound knowledge on computer applications with the help of which they can have a perfect launch pad for challenging career in the field of information technology. </p>
											<p style={{"margin-bottom":"30px"}}>Most of the students doing their higher secondary education think that science students alone can apply for the BCA course. But, this is not true, even commerce students can apply for the BCA course. The only eligibility criteria in most of the universities offering BCA course is that the student should have studied mathematics as a subject in their 10+2 level. So, commerce students with mathematics as a subject in their +2 level can apply for the BCA course.</p>
											<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506931380/bca-1_wvyncr.png" alt="" className="img-responsive"/>
											<p style={{"margin":"30px 0"}}><b>After BCA Master Degree </b></p>
											<img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1506931422/bca-2_ze2ef0.png" alt="" className="img-responsive"/>
											<p style={{"margin":"20px 0"}}><b>Job Opportunity </b></p>
											<p>We know that India is an IT power thus it is obvious that the course of BCA will provide jobs in the IT sector. The companies such as Wipro, InfoTech, Satyam, [TCS] Tata Consultancy Service, Siemens Communications, and even International companies such as Vodafone, and Essar Communications are hiring Students every year.</p>
											<p>It is of out sounding news to know that even the Students are getting placements in dairy firms, banking firms. The firms are hiring more of the BCA applicants for there software based queries. o If one wishes to become a Software Developer or web-designer or wants to take up a career in Systems Management, then BCA is the best course to get an early start for their careers. Job opportunities can be found in both large and small software development organizations as well as hardware companies. </p>
											<p style={{"margin":"30px 0"}}><b>Special Features at SIMS:</b></p>
											<ul className="custom-list-style tik pl2">
												<li>Highly Equipped Computer Laboratory with Computers, Servers, switches, Hubs, LCD Monitors, etc.</li>
												<li>Internet Facility to assist Student and Faculty around Clock.</li>
												<li>All Practical are performed by individual students.</li>
												<li>Various events organized to develop students’ technical mind throughout the year for example Techno Savvy Club events, interclass competitions.</li>
												<li>Seminars and Guest Lectures. </li>
												<li>In- house Project in the final year of BCA, assisting one faculty to each student personally. </li>
												<li>Assessing each student progress monthly through Unit test for each subject at end of the month. </li>
												<li>Student progress report discussion with parents on Parent’s meeting once /twice in a year.</li>
												<li>Campus interviews.</li>
											</ul>
										</div>
										<div className="tab-pane" id="tab4">
											<h3 className="title" style={{"margin": "10px 0 20px"}}>B.Sc (Bachelor of Science )</h3>
											<p>Bachelor of Science (B.Sc.) is one of the most popular academic degree courses among the science students after class 12th. The duration of B.Sc. degree course ranges from 3 years to 5 years, depending upon the country in which you are studying for eg. In India the course is generally of 3 years whereas in Argentina the course duration is 5 years.</p>
											<p>The B.Sc. degree course is a graduate degree course in Science this can be a part-time or full-time course but at SIMS we have full-time B.Sc. programs. This course forms the basis of science and comprises of the subjects like physics, chemistry, biology, zoology, botany, Bio-Technology, mathematics and many more.</p>
											<p>With the advancements in the area of science and technology, this programme has become a one of the highly studied degree courses in the Institutions of India.</p>
											<p style={{"margin-bottom":"30px"}}>After the completion of the B.Sc degree there are various options available for the science students, they can go for master degree in Science i.e. M.Sc, go in a research area and can even look for professional job oriented courses. Often, in some reputed universities or colleges in India and abroad the students are recruited directly by big MNC’s after their completion of the course.</p>
											<div className="panel-group" id="accordion3">
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<a data-toggle="collapse" data-parent="#accordion3" href="#collapse-One" aria-expanded="false" className="collapsed">Courses &amp; Duration</a>
														</h4>
													</div>
													<div id="collapse-One" className="panel-collapse collapse" aria-expanded="false" style={{"height": "0px"}}>
														<div className="panel-body">
															<p>There are a wide range of courses available for the students in the Science stream. The students may go for a plain B.Sc or he/she might choose B.Sc. (honors). The students who are interested in the computer and information technology field can go for B.Sc. (Computer Science/IT).</p>
															<p>Students who have an academic background of science at 10+2 level, they can pursue B.Sc programme in various branches.</p>
															<p>The duration of the program is based on the choice of the B.Sc program choose by student, usually it will be for 3 years.</p>
															<p>At present in SIMS we have the following B.Sc programs</p>
															<ul className="custom-list-style tik pl2">
																<li>B.Sc (PCM)</li>
																<li>B.Sc (PME)</li>
																<li>B.Sc (PMCs)</li>
																<li>B.Sc (CBZ)</li>
																<li>B.Sc (CZBT)</li>
																<li>B.Sc (CBBT)</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<a data-toggle="collapse" data-parent="#accordion3" href="#collapse-Two" className="collapsed" aria-expanded="false">Eligibility</a>
														</h4>
													</div>
													<div id="collapse-Two" className="panel-collapse collapse" aria-expanded="false" style={{"height": "0px"}}>
														<div className="panel-body">
															<ul className="custom-list-style tik pl2">
																<li>The admission to the various B.Sc. courses is done on the basis of qualifying class 12thexaminations in (PCM/B) stream.</li>
																<li>Candidates must have passed/appearing in the class 12th can apply for the B.Sc programmes as per their choice and preference.</li>
															</ul>
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<a data-toggle="collapse" data-parent="#accordion3" href="#collapse-Three" className="collapsed" aria-expanded="false">Admission</a>
														</h4>
													</div>
													<div id="collapse-Three" className="panel-collapse collapse" aria-expanded="false" style={{"height": "0px"}}>
														<div className="panel-body">
															<p>The admission to the B.Sc courses is based on Class 12th percentage. Some universities also conduct their entrance exam for admission.</p>
															<p>Some professional B.Sc. courses like fashion technology, interior design, multimedia, animation allow the students of other stream (other than science) to take admission.</p>
															<p>There are various colleges which offer 3 to 5 years Bachelor of Science (B.Sc) programme. Each college has different admission procedure for this programme. They give admission on the basis of the merit of Class 12th.</p>
															<p>Some public and private college also conducts examinations for the admission to various B.Sc. degree courses.</p>
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<a data-toggle="collapse" data-parent="#accordion3" href="#collapse-Four" className="collapsed" aria-expanded="false">PG Courses after B.Sc</a>
														</h4>
													</div>
													<div id="collapse-Four" className="panel-collapse collapse" aria-expanded="false" style={{"height": "0px"}}>
														<div className="panel-body">
															<p>B.Sc graduates have a wide variety of options available in terms of topics, subjects, &amp; field. They have an option to pursue a post graduation degree in their respective field. Students can also join non-science master degree courses such as animation, management, journalism, computer technology, etc after the completion of B.Sc degree.</p>
														</div>
													</div>
												</div>
												<div className="panel panel-default">
													<div className="panel-heading">
														<h4 className="panel-title">
															<a data-toggle="collapse" data-parent="#accordion3" href="#collapse-Five" className="collapsed" aria-expanded="false">Career &amp; Jobs</a>
														</h4>
													</div>
													<div id="collapse-Five" className="panel-collapse collapse" aria-expanded="false" style={{"height": "0px"}}>
														<div className="panel-body">
															<p>Just like an academic courses, students who have a B.Sc degree also have an excellent employment opportunities.  Jobs for B.Sc graduates are not just restricted in the field of science but also they can explore other areas like management, engineering, law etc.</p>
														</div>
													</div>
												</div>
											</div>
											<div className="exTab2" style={{"margin-top":"30px"}}>
												<ul className="nav nav-tabs">
													<li className="active"><a href="#1" data-toggle="tab" aria-expanded="false">B.Sc (PCM/PME)</a></li>
													<li className=""><a href="#2" data-toggle="tab" aria-expanded="false">B.Sc (PMCs)</a></li>
													<li className=""><a href="#3" data-toggle="tab" aria-expanded="false">B.Sc (CBZ)</a></li>
													<li className=""><a href="#4" data-toggle="tab" aria-expanded="false">B.Sc (Bio-Technology)</a></li>
												</ul>
												<div className="tab-content ">
													<div className="tab-pane active" id="1">
														<h3 style={{"margin":"20px 0"}}><b>Scope</b></h3>
														<p>Higher learning students deeply interested in pursuit of advanced studies in Physics, Chemistry, Mathematics, Electronics and Computer Science can find opportunities in</p>
														<ul className="custom-list-style tik hand-right">
															<li>M.Sc in the respective disciplines</li>
															<li>Many interdisciplinary post-graduate courses like M.Tech, M.Sc and M.C.A and Ph.D degree in many    prestigious institutions all over India and abroad.</li>
															<li>Master of Business Administration and Master of Computer Applications.</li>
															<li>Teaching in schools &amp; colleges where any of the science subjects is an important discipline</li>
															<li>Indian Administrative Services and other state and central Govt. Services where knowledge of science subjects is a definite advantage especially at the entrance examinations.</li>
															<li>In C.A /ICWA/GRE/GMAT etc. leading to very rewarding and self-satisfactory careers.</li>
															<li>Careers in Computer Science, Computer Application, Science and Technology and Management where a high level of competence and dependence on many of the science subjects like Physics, Mathematics and Electronics is demanded.</li>
															<li>Careers in the electronics industries like BEL, BPL etc. situated in and around Bangalore particularly for PCM and PME students</li>																
														</ul>
														<p></p>
													</div>
													<div className="tab-pane" id="2">
														<p>It is a 3 years, 6 Semesters full time degree course, affiliated to Bangalore University, Bangalore and recognized by Govt.of Karnataka.</p>
														<ul className="custom-list-style tik pl2">
															<li>To learn the fundamental science as well as higher pure sciences such as Astrophysics, quantum mechanics, classical mechanics, optics.    </li>
															<li>To learn the complete, theory and practical skill needed to develop effective software.</li>
															<li>To learn advance mathematics this helps in software development. </li>
														</ul>
													</div>
													<div className="tab-pane" id="3">
														<p>After doing your B.Sc in Chemistry, Botany and Zoology, you can pursue M.Sc in any of these subjects. You can also think of doing your B.Ed; which will make you eligible for teaching in high schools. The options are vast and many. Once your post graduation is done prepare well for you NET/JRF/SLET; qualifying which will make you eligible for lectureship. After B.Ed if you also do your M.Ed you will be eligible for teacher training institutes. You can also think of studying genetics or other super specialized fields like plant anatomy, physiology, floriculture, neurobiology, biotechnology, biochemistry. Research and development is also a sort after field. You can try for government jobs (with 7th pay commission it does pay you well) banks and other competitive exams in various fields. The advantage of a science graduate is you are never restricted entry from any field.</p>
														<p>One can join any reputed organization as plant explorers, conservationists, ecologists, environment consultants, horticulturist, plant biochemist, nursery manager, genetics, molecular biologist, taxonomist, plant pathologist, environmental consultant and farming consultant.</p>
														<div className="panel-group" id="accordion4">
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion4" href="#collapse_One">Few Job Titles</a>
																	</h4>
																</div>
																<div id="collapse_One" className="panel-collapse collapse in">
																	<div className="panel-body">
																		<ul className="custom-list-style tik hand-right">
																			<li>Mycologist</li>
																			<li>Administrators</li>
																			<li>Ecologist</li>
																			<li>Fruit Growers</li>
																			<li>Plant Biochemist</li>
																			<li>Forester</li>
																			<li>Researchers</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion4" href="#collapse_Two">Few Job Sectors</a>
																	</h4>
																</div>
																<div id="collapse_Two" className="panel-collapse collapse">
																	<div className="panel-body">
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik hand-right">
																				<li>Biotechnology Firms</li>
																				<li>Seed and Nursery Companies</li>
																				<li>Plant Resources Laboratory</li>
																				<li>Educational Institutions</li>
																				<li>Plant Health Inspection Services</li>
																				<li>Oil Industry</li>																				
																				<li>Arboretum</li>
																			</ul>
																		</div>
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik hand-right">
																				<li>Forest Services</li>
																				<li>Land Management Agencies</li>
																				<li>National Parks</li>
																				<li>Chemical Industry</li>
																				<li>Food Companies</li>
																				<li>Biological Supply Houses</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion4" href="#collapse_Three">Career Options </a>
																	</h4>
																</div>
																<div id="collapse_Three" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p style={{"margin-bottom":"20px"}}>As your major specialization is Biology and you belongs to bio background you have following career options along with higher studies</p>
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik pl2">
																				<li>Geneticist</li>
																				<li>Horticulturist</li>
																				<li>Molecular Biologist</li>
																				<li>Plant Biochemist</li>
																				<li>Weed Scientist</li>
																				<li>Science Adviser</li>
																				<li>Botanist</li>
																				<li>Plant Explorer</li>
																				<li>Forest Ranger</li>
																				<li>Farming Consultant</li>
																				<li>Florist</li>
																				<li>Forester</li>
																				<li>Biology Content Developer</li>
																				<li>Biological Technician</li>
																				<li>Conservationist</li>																				
																			</ul>
																		</div>
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik pl2">
																				<li>Ecologist</li>
																				<li>Mycologist</li>
																				<li>Environmental Science</li>
																				<li>pathology labs as a microbiologist</li>
																				<li>Medical laboratories</li>
																				<li>Testing Laboratories</li>
																				<li>Seed and Nursery organizations</li>
																				<li>Agricultural Research Organizations</li>
																				<li>Hospital Administration</li>
																				<li>Medical research</li>
																				<li>Food Institutes</li>
																				<li>Wildlife and Fishery Departments</li>
																				<li>Pharmaceutical Companies</li>
																				<li>Medical Equipment companies</li>
																				<li>Herbal Products and Life care products manufacturer</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion4" href="#collapse_Four">Further Studies</a>
																	</h4>
																</div>
																<div id="collapse_Four" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p style={{"margin-bottom":"20px"}}>You can also go for Further Studies for better job opportunities like</p>
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik pl2">												
																				<li>Master of Science in Biology</li>
																				<li>Master of Science in Biological Sciences</li>
																				<li>Master of Science in Applied Biology</li>
																				<li>Master of Science in Conservation Biology</li>
																				<li>Master of Science in Computational Biology</li>
																				<li>Master of Science in Environmental Biology</li>
																				<li>Master of Science in Environmental Microbiology</li>
																				<li>Master of Science Bio-chemistry</li>
																				<li>Master of Science Biomedical Science</li>
																			</ul>
																		</div>
																		<div className="col-md-6 col-xs-12">
																			<ul className="custom-list-style tik pl2">
																				<li>Master of Science Bio-technology</li>
																				<li>Master of Science Botany</li>
																				<li>Master of Science Food science</li>
																				<li>Master of Science Genetics</li>
																				<li>Master of Science Molecular Biology</li>
																				<li>Master of Science Toxicology</li>
																				<li>Master of Science Virology</li>
																				<li>Master of Science in Zoology</li>
																			</ul>
																		</div>
																		<p style={{"margin-top":"20px"}}>Choose stream or subject or career option as per your strength and skills. Every option has its own importance.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion4" href="#collapse_Five">Pay Package</a>
																	</h4>
																</div>
																<div id="collapse_Five" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p>Pay scale in this field is very high, but the pay scale varies for a botanist in the private and government sector. The pay scale depends on the factors such as qualification, designation, experience and skills of an individual. Those who want to start their career as a teacher or researcher can expect a salary ranging from Rs18, 000 to Rs.20, 000 per month. For those working in other sectors can initially earn a salary in between Rs.15, 000 to Rs. 25,000 per month and the salary might reach up to Rs.80, 000 per month depending on the above factors.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="tab-pane" id="4">
														<p>Biotechnology is a combination of two subjects- Biology and Technology. Broadly speaking, it brings together concepts of Biology and Engineering and aims at putting concepts of both these subjects together, in a bid to enrich our lives and make innovative developments. Biotechnology course material can be classified into two sections- theory section and practical section. In theory section, students will have to deal with subjects related to biology as well as basic technology concepts.</p>
														<p>Practical section is also very important. Students will have to spend good amount of time in laboratory, performing practical lessons as well as lab training. </p>
														<p>At the end of the course, research project is also held. Lab activities form a major part of project.</p>
														<div className="panel-group" id="accordion5">
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-1">ELIGIBILITY CRITERIA</a>
																	</h4>
																</div>
																<div id="collapse-1" className="panel-collapse collapse in">
																	<div className="panel-body">
																		<p>12th Science stream students are eligible to apply for this course. Both PCM (Physics, Chemistry and Mathematics) as well as PCB (Physics, Chemistry and Biology) group students are eligible for this course.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-2">COURSE DURATION</a>
																	</h4>
																</div>
																<div id="collapse-2" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p> B.Sc. Biotechnology course is a 3 years long course. Theory, practical and research project- all these parts have to be dealt with in these 3 years duration.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-3">ADVANTAGES OF DOING B.SC. BIOTECHNOLOGY</a>
																	</h4>
																</div>
																<div id="collapse-3" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p>The major advantage of doing a B.Sc. course in this subject is that the course duration is short, when compared to a B.E./B.Tech. Program. B.Sc. course takes 3 years to complete. Whereas B.E./B.Tech. Program takes 4 years.</p>
																		<p>Another advantage is the relatively low saturation level in this field. From facts and figures, it is quite evident that B.Sc. Biotechnology is not a very popular professional course among 12th Science students. Students prefer courses like B.E./B.Tech., MBBS, BDS etc. On seeing the ‘B.Sc.’ label, they tend to ignore Biotechnology course. This has resulted in relatively less number of takers for this course. Ultimately, this has resulted in low job market saturation too! So, it is safe to say that finding a good job after graduation won’t be a tough task, when compared to heavily saturated courses!</p>
																		<p>Then comes the attractive prospect of availability of lucrative scholarships. Many State Governments are offering all studies expense covering scholarships to meritorious students, who choose to pursue B.Sc. course. Such scholarships are provided to students scoring above 85% merit marks only.</p>
																		<p>Biotechnology is a rapidly developing sector. Advancements are being made at good pace in this sector. Big firms are pouring in big money into it and new business opportunities are developing in this sector. These things have led to huge increase in job openings in this sector. In short, Biotechnology graduates are in huge demand these days.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-4">PG COURSES THAT CAN BE DONE AFTER B.SC. BIOTECHNOLOGY</a>
																	</h4>
																</div>
																<div id="collapse-4" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p> After B.Sc. Biotechnology, one may go for M.Sc. Biotechnology, the Masters course. M.Sc. course will take two years to complete. After completing B.Sc. and M.Sc. Degrees, one may venture into PhD also!</p>
																		<p>Another post graduate course that can be done after B.Sc. Biotechnology is M.B.A. It will take 2 years to get an M.B.A. Degree.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-5">CAREER PROSPECTS, JOB OPPORTUNITIES, SALARY AND SCOPE</a>
																	</h4>
																</div>
																<div id="collapse-5" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p>This is a rapidly developing field. Many private businesses are exploring this field and heavily investing in it. It is safe to say that there are ample job opportunities for Biotechnology graduates in private sector. Government sector too offers job opportunities, but not in the scale in which private sector does.</p>
																		<p> Some prominent industries where Biotechnology professionals may find jobs are- Pharmaceuticals Industry, Healthcare sector, Chemical Industry and Research sector.</p>
																	</div>
																</div>
															</div>
															<div className="panel panel-default">
																<div className="panel-heading">
																	<h4 className="panel-title">
																		<a data-toggle="collapse" data-parent="#accordion5" href="#collapse-6">RESEARCH SECTOR</a>
																	</h4>
																</div>
																<div id="collapse-6" className="panel-collapse collapse">
																	<div className="panel-body">
																		<p>Research sector in particular is quite lucrative. One may build a rewarding career in this field. To thrive in this field, one must possess B.Sc. as well as M.Sc. Degree! Average starting salary generally is between 2- 5 Lakh Rupees per year.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>								
							</div>                            
						</div>
                    </div>
                </div>
            </div>
        </div>
                )
    }
}