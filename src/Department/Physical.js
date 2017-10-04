import React,{Component } from 'react';


export default class Physical extends Component{

    render(){

        return(
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Department of Physical Education</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="index.html">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Physical Education</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="welcome col-md-7 col-sm-6">   
                            <img src="http://zenopsys.net/soundarya_forms/sims_images/Departments/sports_PhysicalEducation.jpg" alt="Sports Dept" style={{margin:"40px 0",width:"70%"}}/>  
                            <p>The Department of Physical Education of SIMS provides the best opportunities for its students to maintain their physical and mental fitness by participating in various indoor and outdoor sports activities at Interclass, Inter-collegiate, University, State, National &amp; International levels.</p>
                            <p>We have facilities for both Indoor as well as Outdoor games which provide with various set of sports activities that students can play.</p>
                            <p>Every year we organize in association with Bangalore University Inter-Collegiate tournaments apart from Inter-class competitions and Annual sports meet.</p>
                            <br/>							
                        </article>
                        <aside className="page-sidebar col-md-5 col-sm-5">
							<div className="col-md-12 col-sm-12">
								<h2 className="text-center" style={{"margin-bottom":"15px"}}>Tournaments Organized By SIMS</h2>
								<table className="table table-striped table-bordered table-reponsive table-condensed">
									<thead>
										<tr><th>Date</th>
										<th>Level</th>
										<th>Game</th>
										<th>No of team Participated</th>
									</tr></thead>
									<tbody>
										<tr>
											<td col="" width="90px">13-02-17</td>
											<td>North Zone BU Inter collegiate men</td>
											<td>Volley Ball </td>
											<td>46</td>
										</tr>
										<tr>
											<td col="" width="90px">21-02-17</td>
											<td>Inter Zone BU Inter collegiate  Men</td>
											<td>Volley Ball</td>
											<td>04</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="col-md-12 col-sm-12">
								<h2 className="text-center" style={{"margin-bottom":"15px"}}>Students Achievement Sports &amp; Games</h2>
								<div className="panel-group" id="accordion">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Inter Collegiate Level</a>
											</h4>
										</div>
										<div id="collapseOne" className="panel-collapse collapse in">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th col="" width="90px">Event</th>
														<th col="" width="90px">Date</th>
														<th>Venue</th>
														<th>Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Swimming </td>
															<td>24-08-16 </td>
															<td>Basavanagudi Swimming Pool </td>
															<td>Two medals </td>
														</tr>
														<tr>
															<td>2</td>
															<td>Soft ball </td>
															<td>20-01-17 </td>
															<td>S.F.S. College </td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>3</td>
															<td>Base ball </td>
															<td>19-02-17 </td>
															<td>Jain university </td>
															<td>1<sup>st</sup> </td>
														</tr>
														<tr>
															<td>4</td>
															<td>Throw ball </td>
															<td>28-02-17</td>
															<td>Jindal College  </td>
															<td>2<sup>nd</sup> </td>
														</tr>
														<tr>
															<td>5</td>
															<td>Volley ball </td>
															<td>13-02-17 <br/> 21-02-17</td>
															<td>SIMS </td>
															<td>2<sup>nd</sup> <br/> 3<sup>rd</sup> </td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">B U Inter University Level</a>
											</h4>
										</div>
										<div id="collapseTwo" className="panel-collapse collapse">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th>Event</th>
														<th col="" width="90px">Date</th>
														<th>Venue</th>
														<th>Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Volley Ball </td>
															<td>14-09-16 </td>
															<td>Kerala M G University </td>
															<td>4 Girls </td>
														</tr>
														<tr>
															<td>2</td>
															<td>Soft ball </td>
															<td>20-01-17</td>
															<td>Kerala </td>
															<td>2 women </td>
														</tr>
														<tr>
															<td>3</td>
															<td>Softball </td>
															<td>24-01-17 </td>
															<td>Kerala </td>
															<td>7 men </td>
														</tr>
														<tr>
															<td>4</td>
															<td>Kabaddi </td>
															<td>29-01-17 </td>
															<td>Chennai </td>
															<td>1 men </td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">State Olympic Level</a>
											</h4>
										</div>
										<div id="collapseThree" className="panel-collapse collapse">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th>Event</th>
														<th col="" width="150px">Date</th>
														<th>Venue</th>
														<th>Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Volley Ball </td>
															<td>4<sup>th</sup> -11<sup>th</sup> Feb. 2017 </td>
															<td>Hubballi </td>
															<td>2<sup>nd</sup> 4 Girls</td>
														</tr>
														<tr>
															<td>2</td>
															<td>Netball </td>
															<td>4<sup>th</sup> -11<sup>th</sup> Feb. 2017 </td>	
															<td>Dharawada </td>
															<td>2<sup>nd</sup> 2 Boys</td>
														</tr>														
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">National / Inter-National / All India / KMLB</a>
											</h4>
										</div>
										<div id="collapseFour" className="panel-collapse collapse">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th col="" width="90px">Event</th>
														<th col="" width="90px">Date</th>
														<th>Venue</th>
														<th col="" width="90px">Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Soft Ball</td>
															<td>09-01-17</td>
															<td>S.F.S College</td>
															<td>1<sup>st</sup> 15 boys</td>
														</tr>
														<tr>
															<td>2</td>
															<td>Leg Cricket</td>
															<td>27-12-16</td>
															<td>Delhi</td>
															<td>3<sup>rd</sup> One Boy</td>
														</tr>
														<tr>
															<td>3</td>
															<td>Cricket(tennis ball)</td>
															<td>Jan</td>
															<td>Nepal</td>
															<td>2<sup>nd</sup> One Boy</td>
														</tr>
														<tr>
															<td>4</td>
															<td>Tchouk Ball</td>
															<td>27-12-16</td>
															<td>Karnataka</td>
															<td>3<sup>rd</sup> 4 boys <br/> 2<sup>nd</sup> one girl</td>
														</tr>
														<tr>
															<td>5</td>
															<td>Volley Ball</td>
															<td>Jan 2017</td>
															<td>Bihar</td>
															<td>2<sup>nd</sup> 4 girls</td>
														</tr>
														<tr>
															<td>6</td>
															<td>Soft Ball</td>
															<td>Oct 2016</td>
															<td>Ananthpur AP</td>
															<td>2 Boys</td>
														</tr>
														<tr>
															<td>7</td>
															<td>Base Ball</td>
															<td>25-03-17</td>
															<td>Odisha, cattac</td>
															<td>3 boys</td>
														</tr>
														<tr>
															<td>8</td>
															<td>Soft Ball</td>
															<td>23-12-16</td>
															<td>Pune Maharastra</td>
															<td>2 boys</td>
														</tr>
														<tr>
															<td>9</td>
															<td>Base Ball</td>
															<td>Dec 2016</td>
															<td>Kerala</td>
															<td>2<sup>nd</sup> one boy</td>
														</tr>
														<tr>
															<td>10</td>
															<td>Base Ball</td>
															<td>07-01-17</td>
															<td>SAI Bengaluru</td>
															<td>1<sup>st</sup> 7 boys</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Association / Inter SAI Level</a>
											</h4>
										</div>
										<div id="collapseFive" className="panel-collapse collapse">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th col="" width="90px">Event</th>
														<th col="" width="90px">Date</th>
														<th>Venue</th>
														<th>Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Volley Ball</td>
															<td>27<sup>th</sup> 30<sup>th</sup> August 2017</td>
															<td>SAI</td>
															<td>3<sup>rd</sup></td>
														</tr>
														<tr>
															<td>2</td>
															<td>Volley Ball</td>
															<td>8 To 10<sup>th</sup> JAN 2017</td>
															<td>Mandya</td>
															<td>2<sup>st</sup></td>
														</tr>
														<tr>
															<td>3</td>
															<td>Volley Ball</td>
															<td>December 2016</td>
															<td>Malleshwaram</td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>4</td>
															<td>Volley Ball</td>
															<td>December 2016</td>
															<td>B division kanteerava stadium</td>
															<td></td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">Open Inter Collegiate Level</a>
											</h4>
										</div>
										<div id="collapseSix" className="panel-collapse collapse">
											<div className="panel-body">
												<table className="table table-striped table-bordered table-reponsive table-condensed">
													<thead>
														<tr><th>#</th>
														<th col="" width="90px">Event</th>
														<th col="" width="90px">Date</th>
														<th>Venue</th>
														<th>Results</th>
													</tr></thead>
													<tbody>
														<tr>
															<td>1</td>
															<td>Yoga</td>
															<td>27-06-0216</td>
															<td>S G S International Yoga College</td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>2</td>
															<td>Chess</td>
															<td>01-07-2016</td>
															<td>Sri Krishna Hall Richmand Circle</td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>3</td>
															<td>Yoga</td>
															<td>10-07-2016</td>
															<td>Nelamangala</td>
															<td>2<sup>nd</sup></td>
														</tr>
														<tr>
															<td>4</td>
															<td>Throw Ball</td>
															<td>07-11-2016</td>
															<td>Sindhi College</td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>5</td>
															<td>Volley  Ball</td>
															<td>07-09-2016</td>
															<td>St. Pauls College</td>
															<td>2<sup>nd</sup></td>
														</tr>
														<tr>
															<td>6</td>
															<td>Throw Ball</td>
															<td>10-09-2016</td>
															<td>Maharani College</td>
															<td>2<sup>nd</sup></td>
														</tr>
														<tr>
															<td>7</td>
															<td>Chess</td>
															<td>01-10-2016</td>
															<td>East Point College</td>
	
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>8</td>
															<td>Volley Ball</td>
															<td>03-09-2016</td>
															<td>Sindhi College</td>
															<td>1<sup>st</sup></td>
														</tr>
														<tr>
															<td>9</td>
															<td>Kabaddi</td>
															<td>27-01-2017</td>
															<td>Devanga College</td>
															<td>3<sup>rd
														</sup></td></tr>
														<tr>
															<td>10</td>
															<td>Throw Ball</td>
															<td>15-02-2017</td>
															<td>VVN College</td>
															<td>2<sup>nd
														</sup></td></tr>
														<tr>
															<td>11</td>
															<td>Tug of War</td>
															<td>08-03-2017</td>
															<td>SRN Adarsha College</td>
															<td>2<sup>nd
														</sup></td></tr>
														<tr>
															<td>12</td>
															<td>Base Ball</td>
															<td>19-02-2017</td>
															<td>Jain University</td>
															<td>1<sup>st
														</sup></td></tr>														
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
                        </aside>
                    </div>
					<div className="row page-row">
                        <div className="col-md-12 col-sm-12">   
                            <h2 className="title">Sports Achievements 2016-17</h2>
							<div id="sport-table_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer"><div className="row"><div className="col-sm-6"><div className="dataTables_length" id="sport-table_length"><label></label></div></div><div className="col-sm-6"><div id="sport-table_filter" className="dataTables_filter"></div></div></div><div className="row"><div className="col-sm-12"><table id="sport-table" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" width="100%" role="grid" aria-describedby="sport-table_info" style={{"width":"100%"}}>
								<thead>
									<tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"43px"}} aria-sort="ascending" aria-label="Sl No: activate to sort column descending">Sl No</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"144px"}} aria-label="Event: activate to sort column ascending">Event</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"102px"}} aria-label="Men /Women  Students No.: activate to sort column ascending">Men /Women <br/> Students No.</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"274px"}} aria-label="Level: activate to sort column ascending">Level</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width":"47px"}} aria-label="Date: activate to sort column ascending">Date</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{"width": "114px"}} aria-label="Venue: activate to sort column ascending">Venue</th><th className="sorting" tabindex="0" aria-controls="sport-table" rowspan="1" colspan="1" style={{width: "164px"}} aria-label="Results: activate to sort column ascending">Results</th></tr></thead>
								<tbody>
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
									
								<tr role="row" className="odd">
										<td tabindex="0" className="sorting_1">1</td>
										<td className="">Yoga</td>
										<td>Men- 2</td>
										<td>Inter Collegiate</td>
										<td>27-06-16</td>
										<td>S G S International Yoga College </td>
										<td >1<sup>st</sup></td>
									</tr><tr role="row" className="even">
										<td tabindex="0" className="sorting_1">2</td>
										<td className="">Chess</td>
										<td>Both -04</td>
										<td>Inter Collegiate</td>
										<td>01-07-16</td>
										<td>Sri Krishna Hall Richmand Circle</td>
										<td >1<sup>st</sup> </td>
									</tr><tr role="row" className="odd">
										<td tabindex="0" className="sorting_1">3</td>
										<td className="">Chess</td>
										<td>Both -04</td>
										<td>Inter Collegiate</td>
										<td>31-07-16</td>
										<td>Turuvekere</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td tabindex="0" className="sorting_1">4</td>
										<td className="">Yoga</td>
										<td>Men -01</td>
										<td>Inter Collegiate</td>
										<td>10-07-16</td>
										<td>Nelamangala</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="odd">
										<td tabindex="0" className="sorting_1">5</td>
										<td className="">Speed Kho-Kho</td>
										<td>Both -03</td>
										<td>Selection For National</td>
										<td>23-07-16</td>
										<td>Maharani College</td>
										<td >One Girl</td>
									</tr><tr role="row" className="even">
										<td tabindex="0" className="sorting_1">6</td>
										<td className="">Speed Kho-Kho</td>
										<td>Both -14</td>
										<td>Selection For National</td>
										<td>03-08-16</td>
										<td>B E L High School</td>
										<td >3 Boys and 2 Girls</td>
									</tr><tr role="row" className="odd">
										<td tabindex="0" className="sorting_1">7</td>
										<td className="">Table Tennis</td>
										<td>Both -10</td>
										<td>Inter Collegiate</td>
										<td>19-08-16</td>
										<td>Seshadripuram Main College</td>
										<td >3<sup>rd</sup> Round</td>
									</tr><tr role="row" className="even">
										<td tabindex="0" className="sorting_1">8</td>
										<td className="">Swimming</td>
										<td>Men -02</td>
										<td>Inter Collegiate</td>
										<td>24-08-16</td>
										<td>Basavanagudi Swimming Pool</td>
										<td >Two medals</td>
									</tr><tr role="row" className="odd">
										<td tabindex="0" className="sorting_1">9</td>
										<td className="">Badminton</td>
										<td>Men -03</td>
										<td>Inter Collegiate</td>
										<td>25-08-16</td>
										<td>B G S Chikkaballapura</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td tabindex="0" className="sorting_1">10</td>
										<td className="">Throw ball</td>
										<td>Women-10</td>
										<td>Inter Collegiate</td>
										<td>07-11-16</td>
										<td>Sindhi College</td>
										<td >1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">11</td>
										<td className="">Volley Ball</td>
										<td>Men -15</td>
										<td>Inter Collegiate</td>
										<td>07-09-16</td>
										<td>St.Pauls College</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">12</td>
										<td className="">Chess</td>
										<td>Men-05</td>
										<td>Inter Collegiate</td>
										<td>07-09-16</td>
										<td>Vijaya College</td>
										<td >24<sup>th</sup> Rank</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">13</td>
										<td className="">Volley Ball</td>
										<td>Men-14</td>
										<td>Inter Collegiate</td>
										<td>14-09-16</td>
										<td>St. Johns College</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">14</td>
										<td className="">Throw ball</td>
										<td>Women-05</td>
										<td>District Throw ball <br/> Association Meet</td>
										<td>10-09-16</td>
										<td>Maharani College</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">15</td>
										<td className="">Hand Ball <br/> Volley Ball</td>
										<td>Both -09 <br/> Both -09</td>
										<td>Selection For B U <br/> Selection For B U</td>
										<td>14-09-16 <br/> 14-09-16</td>
										<td>DPE Ground BU <br/> DPE Ground BU</td>
										<td >4 Girls</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">16</td>
										<td className="">Kabaddi</td>
										<td>Men -06</td>
										<td>Selection For B U</td>
										<td>15-09-16</td>
										<td>DPE Ground BU</td>
										<td ></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">17</td>
										<td className="">Cricket</td>
										<td>Men -13</td>
										<td>Inter Collegiate</td>
										<td>20-09-16</td>
										<td>KG Ground Mahalakshmi Layout</td>
										<td >Semi Final</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">18</td>
										<td className="">Best Physique</td>
										<td>Men -02</td>
										<td>Inter Collegiate</td>
										<td>25-09-16</td>
										<td>Seshadripuram Kengeri College</td>
										<td >Semi Final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">19</td>
										<td className="">Chess</td>
										<td>Men-03</td>
										<td>Inter Collegiate</td>
										<td>01-10-16</td>
										<td>East Point College</td>
										<td >1<sup>st</sup> </td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">20</td>
										<td className="">Volley Ball <br/> Throw ball</td>
										<td>Both -20</td>
										<td>Inter Collegiate</td>
										<td>03-09-16</td>
										<td>Sindhi College</td>
										<td >Volley Ball 1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">21</td>
										<td className="">Kabaddi</td>
										<td>Men-06</td>
										<td>Selections</td>
										<td>14-10-16</td>
										<td>D P E ground</td>
										<td >1 selected</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">22</td>
										<td className="">Volley Ball(girls &amp;boys) <br/> Kabaddi(boys)</td>
										<td>Both -32</td>
										<td>Inter Collegiate</td>
										<td>27-09-16</td>
										<td>Aditya College</td>
										<td >Volley Ball <br/> Girls 1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">23</td>
										<td className="">Kabaddi</td>
										<td>Men-12</td>
										<td>Inter Collegiate</td>
										<td>02-09-16</td>
										<td>Devanahalli</td>
										<td >4<sup>th</sup> round</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">24</td>
										<td className="">Volley Ball</td>
										<td>Men -12</td>
										<td>Division</td>
										<td>13-10-16</td>
										<td>Kanteerava Stadium</td>
										<td >One match won</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">25</td>
										<td className="">Athletic</td>
										<td>Both-20</td>
										<td>Inter Collegiate</td>
										<td>20-09-16</td>
										<td>Kanteerava Stadium</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">26</td>
										<td className="">Ball Badminton</td>
										<td>Men-08</td>
										<td>Inter Collegiate</td>
										<td>05-01-17</td>
										<td>Vivekanada College</td>
										<td >Q. final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">27</td>
										<td className="">Ball Badminton</td>
										<td>Women-08</td>
										<td>Inter Collegiate</td>
										<td>05-01-17</td>
										<td>BMS College</td>
										<td >Q. final</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">28</td>
										<td className="">Net Ball <br/> Net Ball</td>
										<td>Men -12 <br/> women -12</td>
										<td>Inter Collegiate <br/> Inter Collegiate</td>
										<td>11-01-17 <br/> 11-01-17</td>
										<td>St. Teresa College <br/> St. Teresa College</td>
										<td >Semi final <br/> Q. final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">29</td>
										<td className="">Wrestling</td>
										<td>Men -01</td>
										<td>Inter Collegiate</td>
										<td>07-01-17</td>
										<td>Aims College</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">30</td>
										<td className="">Soft ball</td>
										<td>Men -15</td>
										<td>All India Inter Collegiate</td>
										<td>20-01-17</td>
										<td>S.F.S. College</td>
										<td >1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">31</td>
										<td className="">Soft ball</td>
										<td>Women -15</td>
										<td>Inter Collegiate</td>
										<td>09-01-17</td>
										<td>S.F.S. College</td>
										<td >2-round</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">32</td>
										<td className="">Soft ball</td>
										<td>Men-15</td>
										<td>Inter Collegiate</td>
										<td>09-01-17</td>
										<td>S.F.S. College</td>
										<td >1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">33</td>
										<td className="">Soft ball</td>
										<td>Men -07</td>
										<td>Inter university</td>
										<td>24-01-17</td>
										<td>Kerela</td>
										<td >2-round</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">34</td>
										<td className="">Softball</td>
										<td>Women -02</td>
										<td>Inter university</td>
										<td>20-01-17</td>
										<td>Kerela</td>
										<td >1-round</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">35</td>
										<td className="">Kabaddi</td>
										<td>Men -12</td>
										<td>Inter Collegiate</td>
										<td>27-01-17</td>
										<td>Devanga College</td>
										<td >3<sup>rd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">36</td>
										<td className="">Throw ball</td>
										<td>Women-15</td>
										<td>Inter collegiate</td>
										<td>30-01-17</td>
										<td>Maharani’s College </td>
										<td >Semi final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">37</td>
										<td className="">Leg cricket</td>
										<td>Men -01</td>
										<td>National</td>
										<td>27-12-16</td>
										<td>Delhi</td>
										<td >3<sup>rd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">38</td>
										<td className="">Soft ball</td>
										<td>Men -03</td>
										<td>National</td>
										<td>23-12-16</td>
										<td>Pune, Maharatra</td>
										<td >3<sup>rd</sup> round</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">39</td>
										<td className="">Base ball</td>
										<td>Men – 01</td>
										<td>National</td>
										<td>13-10-16</td>
										<td>Kerala</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">40</td>
										<td className="">Base ball</td>
										<td>Men-06</td>
										<td>Karnataka major league tournament </td>
										<td>05-01-17</td>
										<td>Sports authority of India</td>
										<td >4 boys 1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">41</td>
										<td className="">Net ball</td>
										<td>Men-02</td>
										<td>Inter University</td>
										<td>15-03-17</td>
										<td>SRTM university Maharastra</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">42</td>
										<td className="">Kabaddi</td>
										<td>Men -01</td>
										<td>Inter university</td>
										<td>29-01-17</td>
										<td>Chennai Tamilnadu</td>
										<td >4<sup>th</sup> round</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">43</td>
										<td className="">River crossing</td>
										<td>Men -01</td>
										<td>National</td>
										<td>29-01-17</td>
										<td>Vijayawada AP</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">44</td>
										<td className="">Throw ball</td>
										<td>Women -12</td>
										<td>Inter Collegiate</td>
										<td> 06-02-17</td>
										<td>SJCC</td>
										<td > Semi final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">45</td>
										<td className="">Throw ball</td>
										<td>Women -12</td>
										<td>Inter Collegiate</td>
										<td> 15-02-17</td>
										<td>VVN College</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">46</td>
										<td className="">Cricket</td>
										<td>Men -12</td>
										<td>Inter Collegiate</td>
										<td>07-02-17</td>
										<td>DPE Ground</td>
										<td ></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">47</td>
										<td className="">Cricket</td>
										<td>Men -12</td>
										<td>Inter Collegiate</td>
										<td>28-02-17</td>
										<td>DPE Ground</td>
										<td ></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">48</td>
										<td className="">Base ball</td>
										<td>Men -15</td>
										<td>Inter Collegiate</td>
										<td>19-02-17</td>
										<td>Jain university</td>
										<td >1<sup>st</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">49</td>
										<td className="">Throw ball</td>
										<td>Women -12</td>
										<td>Inter Collegiate</td>
										<td> 28-02-17</td>
										<td>Jindal College </td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">50</td>
										<td className="">Volley ball</td>
										<td>Men -12</td>
										<td>Inter Collegiate</td>
										<td>20-02-17</td>
										<td>Jain university</td>
										<td >2 round</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">51</td>
										<td className="">Volley ball</td>
										<td>Men -12</td>
										<td>Inter collegiate</td>
										<td>08-03-17</td>
										<td>SRN Adarsha College</td>
										<td >2 round</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">52</td>
										<td className="">Cricket</td>
										<td>Men -15</td>
										<td>Inter collegiate</td>
										<td>08-03-17</td>
										<td>SRN Adarsha College</td>
										<td >Q final</td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">53</td>
										<td className="">Throwball</td>
										<td>Women -12</td>
										<td>Inter collegiate</td>
										<td>08-03-17</td>
										<td>SRN Adarsha College</td>
										<td >Semi final</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">54</td>
										<td className="">Tug of war</td>
										<td>Women -12</td>
										<td>Inter collegiate</td>
										<td>08-03-17</td>
										<td>SRN Adarsha College</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">55</td>
										<td className="">Cricket for staff</td>
										<td>Staff -15</td>
										<td>Inter collegiate</td>
										<td>08-03-17</td>
										<td>SRN Adarsha College</td>
										<td >1<sup>st</sup> round</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">56</td>
										<td className="">Kabaddi</td>
										<td>Men – 12</td>
										<td>Open state meet</td>
										<td>08-03-17</td>
										<td>GFGC Chanpatanna</td>
										<td ></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">57</td>
										<td className="">Chess</td>
										<td>Men-5</td>
										<td>Open meet</td>
										<td>23-03-17</td>
										<td>HKBK college</td>
										<td >7,12,13,14,17</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">58</td>
										<td className="">Tug of war</td>
										<td>Men -01</td>
										<td> National</td>
										<td>02-05-17</td>
										<td>Panjab</td>
										<td ></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">59</td>
										<td className="">Tchoukball</td>
										<td>Men -04, women -01</td>
										<td>National</td>
										<td>20-12-16</td>
										<td>Chithrdurga</td>
										<td >3<sup>rd</sup> for men 2<sup>nd</sup> for women</td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">60</td>
										<td className="">Volley ball</td>
										<td>Men -12</td>
										<td>Nouth Zone and inert Zone inter collegiate</td>
										<td>13-02-17 <br/> 21-02-17</td>
										<td>SIMS</td>
										<td >2<sup>nd</sup> <br/> 3<sup>rd</sup></td>
									</tr><tr role="row" className="odd">
										<td className="sorting_1" tabindex="0">61</td>
										<td className="">Cricket (tennis ball)</td>
										<td>Men -01</td>
										<td>National</td>
										<td>-</td>
										<td>Nepal</td>
										<td >2<sup>nd</sup></td>
									</tr><tr role="row" className="even">
										<td className="sorting_1" tabindex="0">62</td>
										<td className="">Tchouk ball</td>
										<td>Men -4 <br/> Women -1</td>
										<td>National</td>
										<td>27-12-16</td>
										<td>Karnataka</td>
										<td >3<sup>rd</sup> <br/> 2<sup>nd</sup></td>
									</tr></tbody>
							</table></div></div><div className="row">
                                
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