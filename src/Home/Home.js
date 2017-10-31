import React,{Component } from 'react';
import './Home.css';
import $ from 'jquery';
import axios from 'axios';

export default class Home extends Component{
	 constructor(){
        super();
        this.state={
            corosel:[],
			 events:[]
           
        }
    }
    componentWillMount(){
         axios.get(`http://198.12.154.44:3333/SIMS/Image/1`)
             .then((res)=>{
                  let filter= res.data.response.sort((a,b)=>{
						if(a.imageid>b.imageid)
						{
							return -1;
						}
						else{
							return 1;
						}
				  })
                    this.setState({
                        corosel:filter,
                       
                    })
             })
         
             
    }
	componentDidMount(){
	
		 axios.get(`http://198.12.154.44:3333/SIMS/Events`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        events:res.data.response,
                       
                    })
             })

         
	}
    render(){
		let events="";

        if(this.state.events.length>0){
			console.log(this.state.events)
            events=this.state.events.map((item,index)=>{
                if(index<1){
                    var month=new Date(item.eventdate).toDateString().split(" ")[1];
                     var day=new Date(item.eventdate).toDateString().split(" ")[2];
                     var href=`/NewsSingle?id=${item.eventid}`;
                    return(
                 			 <div className="col-md-3 col-xs-12 col-sm-6">
								<div className="col-md-12 col-xs-12 col-sm-12 events all-events">
									<h3 className="heading" style={{textAlign:"left"}}>Events</h3>
									<div className="section-content" >
												<div className="event-item">
													<div className="col-md-3 col-sm-3">
												
														<div className="date-label">
														<span className="month">{month}</span>
														<span className="date-number">{day}</span>
														</div>
													</div>
													<div  className="col-md-9 col-sm-9">
													<div className="details" >
														<h2 className="title" style={{"font-size": "20px"}}><a href={href}>{item.eventname}</a></h2>
														<p className="location"><i className="fa fa-map-marker"></i>Soundarya Institute of Management and Science</p>                            
													</div>
													</div>
												</div>
										<a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>
										</div>
									</div>
								</div>
              
                                 )
                          }
                     
                        else{
                            return (	 <div className="col-md-3 col-xs-12 col-sm-6">
								<div className="col-md-12 col-xs-12 col-sm-12 events all-events">
									<h3 className="heading">Events</h3>
									<div className="section-content" style={{marginTop:"10px"}}>
												<div className="event-item">
													<p className="date-label">
													
													</p>
													<div className="details">
														</div>
												</div>
										<a className="read-more" href="/News">All events<i className="fa fa-chevron-right"></i></a>
										</div>
									</div>
								</div>)

                            }
                
             
                           
            })
        }
		         let val="";
		  let num="";
		  console.log(this.state.corosel)
                if(this.state.corosel.length>0)
                {
                    val=this.state.corosel.map((item,index)=>{
                          if(index==0)
                          {
                              return(
                                       <div className="item active">
                                                <img src={item.image_url} alt="" style={{width:"100%",height:500}}/>

                                            </div>  
                              )
                          }
                          else{
                            return(
                                    <div className="item ">
                                            <img src={item.image_url} alt="" style={{width:"100%",height:500}}/>
											<p className="flex-caption">
												<span className="main">Welcome to Soundarya Institute of Management &amp; Science</span>
												<br/>
												<span className="secondary clearfix">Join us to experience the charm of ignite, innovate and excel</span>
											</p>
                                    </div>
                            )
                          }

                    })
                     num=this.state.corosel.map((item,index)=>{
                            if(index==0)
                            {
                                return(
                                         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                )
                            }
                            else{
                                 return(
                                    <li data-target="#myCarousel" data-slide-to={index}></li>
                            )
                            }
                        
                    })
                }
               

        return( 
                <div className="container content ">
					    
								<div id="myCarousel" className="carousel slide" data-ride="carousel">
							
											<ol className="carousel-indicators">
												{num}
											</ol>

							
											<div className="carousel-inner">
									

											{val}

												
											
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
               
	
	<div className="row cols-wrapper">
		<div className="col-md-9 col-xs-12 col-sm-6">
			<h3 className="heading">introducing SIMS</h3>
			<p className="text-justify">Soundarya institute of Management and Science is a prestigious institute as a part of Soundarya Educational Trust, has come a long way since its modest beginning in 2007. It is established by the great visionary Shri. Soundarya P Manjappa, a founder chairman of SET. SIMS is committed to developing the students with positive attitude, behaviour, values, skills and competencies expected from global service providers.</p>
			<p className="text-justify">The college is growing by leaps and bounds, and various infrastructural developments have taken place in the recent past. The college is now seven floors structure with an annex to accommodate the growing strength of students. Spacious, well-lit and airy classrooms are most suited for effective learning and teaching. Anybody who enters this college will feel and experience the silken touch of care, compassion and concern, which embody the philosophy of learning pursued.</p>
		</div>
		<div className="col-md-3 col-xs-12 col-sm-6">
			<h3 className="heading">SIMS experience</h3>
					
					
                                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="200">
 
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                            <li data-target="#myCarousel" data-slide-to="1"></li>
                                            <li data-target="#myCarousel" data-slide-to="2"></li>
                                            <li data-target="#myCarousel" data-slide-to="3"></li>
                                            <li data-target="#myCarousel" data-slide-to="4"></li>
                                    
                                        </ol>


                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060396/video-1_hey0ri.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060400/video-2_iov5av.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060401/video-3_ifqgj2.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060396/video-4_cdz4nt.jpg" alt=""/>
                                            </div>   
											  <div className="item ">
                                                <img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060399/video-5_nxygwj.jpg" alt=""/>
                                            </div>              
                                        </div>

  
                                    {/*<a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                        <span className="sr-only">Next</span>
                                    </a>*/}
                                    </div>
							



		
		</div>

	</div>
	<div className="row cols-wrapper mt20">
		<div className="col-md-9 col-xs-12 col-sm-6">
			<div className="col-md-12 our-programs">
				<div className="col-md-3 col-xs-12 program-left">
					<h4 className="sub-headings">Our Programs</h4>
					<p>We have introduced 5 new programs this year. Learn More &amp; Apply</p>
					<a href="/UGCoarse" className="btn btn-primary trans-btn"> All Programs &gt;</a>
				</div>
				   <div id="myCarouseli" className="col-md-9 carousel slide">
                
             
                                        {/*<ol className="carouseol-indicators">
                                            <li data-target="#myCarouseli" data-slide-to="" className="active"></li>
                                            <li data-target="#myCarouseli" data-slide-to=""></li>
                                            <li data-target="#myCarouseli" data-slide-to=""></li>
                            
                                    
                                        </ol>*/}
                <div className="carousel-inner">
                    <div className="item active">
                        <div className="row">
                            <div className="col-sm-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bcom_HomeBottomSlideShow.jpg" alt="Image" /></a>
							<h4 class="program-title">B.Com</h4>
						    </div>
                            <div className="col-sm-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bba_HomeBottomSlideShow.jpg" alt="Image" /></a>
							 <h4 class="program-title">BBA</h4>   
                            </div>
                            <div className="col-sm-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bca_HomebottomSlideShow.jpg" alt="Image" /></a>
                            <h4 class="program-title">BCA</h4>   
						    </div>
                          
                        </div>
                      
                    </div>
                    {/*<!--/item-->*/}
                    <div className="item">
                        <div className="row">
							<div className="col-sm-4 col-md-4 col-lg-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bba_HomeBottomSlideShow.jpg" alt="Image" /></a>
								             <h4 class="program-title">BBA</h4>      
								              </div>
							 <div className="col-sm-4 col-md-4 col-lg-4"><a ><img style={{width:"117%"}} src="http://zenopsys.net/soundarya_forms/sims_images/Home/mcom_HomebottomSlideShow.jpg" alt="Image" /></a>
                            <h4 class="program-title">M.Com</h4> 
							</div>
                             <div className="col-sm-4 col-md-4 col-lg-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bcom_HomeBottomSlideShow.jpg" alt="Image" /></a>
                                <h4 class="program-title">B.Com</h4> 
						    </div>
                           
                          
                        </div>
                        {/*<!--/row-->*/}
                    </div>
                    {/*<!--/item-->*/}
                    <div className="item">
                        <div className="row">
							<div className="col-sm-4 col-md-4 col-lg-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bba_HomeBottomSlideShow.jpg" alt="Image"/></a>
							   <h4 class="program-title">BBA</h4>    
                            </div> 
                             <div className="col-sm-4 col-md-4 col-lg-4"><a ><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bcom_HomeBottomSlideShow.jpg" alt="Image" /></a>
                           <h4 class="program-title">B.Com</h4> 
						    </div>
                            
							 <div className="col-sm-4 col-md-4 col-lg-4"><a><img style={{width:"117%"}} src="http://zenopsys.net/soundarya_forms/sims_images/Home/mcom_HomebottomSlideShow.jpg" alt="Image"/></a>
                           <h4 class="program-title">M.Com</h4> 
						    </div>
                        </div>
                        {/*<!--/row-->*/}
                    </div>
                    {/*<!--/item-->*/}
                </div>
                {/*<!--/carousel-inner--> <a className="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>*/}

              	<a className="left carousel-control" href="#myCarouseli" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left"></span>
											<span className="sr-only">Previous</span>
									</a>
									<a className="right carousel-control" href="#myCarouseli" data-slide="next">
											<span className="glyphicon glyphicon-chevron-right"></span>
											<span className="sr-only">Next</span>
									</a>
            </div>
			
			</div>
		</div>
		{events}
	</div>
	<div className="row cols-wrapper">
		<div className="col-md-12 col-xs-12">
			<div className="col-md-12 col-xs-12 big-banner">
				<div className="col-md-4 col-xs-12">
					<h3 className="heading">SIMS Life</h3>
					<p className="text-justify mb40">The college empowers individual to challenge conventional thinking in pursuit of original ideas. It’s a place for highly ambitious students and professionals who want to excel in career and become hardcore experts in their area of interest. </p>
				</div>
				<div className="col-md-3 col-md-offset-2 col-xs-12">
					<h3 className="heading">Join The Experience</h3>
					<p className="text-justify">SIMS is committed to excellence in education that meets the expectations of the students aspiring for enriching academic and professional careers.</p>
					<a href="/Admissions" className="btn btn-primary more-btn">Read More &gt;&gt;</a>
				</div>
			</div>
		</div>
	</div>
	<div className="row cols-wrapper mt20">
		<div className="col-md-4 col-xs-12">
			<h3 className="heading">Campus</h3>
			<p className="text-justify mb40">The college is located in a very peaceful place in 9 acres without being disturbed by offering a great ambience for wholesome development of students. The college is emerging as one of the top notch graduate colleges, affiliated to Bangalore University. It is accredited by NAAC for the high standards of excellence that the institution has set for itself with an ever growing enthusiasm for education and overall development.</p>
		</div>
		<div className="col-md-4 col-xs-12" style={{"background": "#eee","min-height":"218px"}}>
			<h3 className="heading">Testimonials</h3>
					<div id="myCarouselo" className="carousel slide" data-ride="carousel">
						
							<ol className="carousel-indicators">
								<li data-target="#myCarouselo" data-slide-to="0" className="active"></li>
								<li data-target="#myCarouselo" data-slide-to="1"></li>
								<li data-target="#myCarouselo" data-slide-to="2"></li>
							</ol>

	
							<div className="carousel-inner" style={{listStyleType:"none"}}>
								<div className="item active">
								<li style={{"width":"100%",float: "left","margin-right":"-100%", position:"relative" ,display: "list-item"}} className="flex-active-slide"><p className="text-center">SIMS gave me the tools to go out in the world with confidence.The concepts I learned are priceless. The staff are one of the best who care for the overall growth of the students.</p><p className="text-center"><strong>- Rekha</strong></p></li>
								</div>

								<div className="item">
						<li style={{"width":"100%",float: "left","margin-right":"-100%", position:"relative" ,display: "list-item"}}className=""><p className="text-center">At SIMS, you meet all the good, friendly people – from students to lecturers. You enjoy freedom to think, to express yourself and to succeed.</p><p className="text-center"><strong>- Neha</strong></p></li>			</div>

								<div className="item">
							<li style={{"width":"100%",float: "left","margin-right":"-100%", position:"relative" ,display: "list-item"}} className="flex-active-slide"><p className="text-center">SIMS gave me the tools to go out in the world with confidence.The concepts I learned are priceless. The staff are one of the best who care for the overall growth of the students.</p><p className="text-center"><strong>- Rekha</strong></p></li>
									</div>
							</div>

							
							<a className="left carousel-control" href="#myCarouselo" data-slide="prev">
								<span className="glyphicon glyphicon-chevron-left"></span>
								<span className="sr-only">Previous</span>
							</a>
							<a className="right carousel-control" href="#myCarouselo" data-slide="next">
								<span className="glyphicon glyphicon-chevron-right"></span>
								<span className="sr-only">Next</span>
							</a>
							</div>
			
			
				</div>
		<div className="col-md-4 col-xs-12">
			<h3 className="heading">Useful Links</h3>
			<div className="col-md-6 col-xs-12">
				<ul className="p0" style={{textAlign:"left",listStyleType:"none"}}>
					<li><a href="/Admissions"><i className="fa fa-caret-right"></i> Admissions</a></li>
					<li><a href="/UGCoarse"><i className="fa fa-caret-right"></i> Courses</a></li>
					<li><a href="/Placements"><i className="fa fa-caret-right"></i> Placements</a></li>
				</ul>
			</div>
			<div className="col-md-6 col-xs-12" >
				<ul className="p0" style={{textAlign:"left",listStyleType:"none"}}>
					<li><a href="/Research"><i className="fa fa-caret-right"></i> Research Facilities</a></li>
					<li><a href="/ValueAdded"><i className="fa fa-caret-right"></i> Value Added Courses</a></li>
					<li><a href="/Downloads"><i className="fa fa-caret-right"></i> Downloads</a></li>
				</ul>
			</div>
			<div className="col-md-6 col-xs-12 mt20">
				<strong>Connect With Us</strong>
			</div>
			<div className="col-md-6 col-xs-12 mt20">
				<p style={{float:"right"}}>
					<a target="_blank" href="#"><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507104192/ln-icon_ogfop3.png" alt=""/></a>
					<a target="_blank" href="#"><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507104233/ins-icon_wzlvng.png" alt=""/></a>
				</p>
				<p style={{float:"right"}}>
					<a target="_blank" href="#"><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507104151/tw-icon_g8zdwv.png" alt=""/></a>
					<a target="_blank" href="https://www.youtube.com/channel/UCDC5YDdZO_KG5vN4LEEry3g/"><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507104111/yb-icon_g3rtll.png" alt=""/></a>			
				</p>
				<p style={{float:"right"}}>
					<a target="_blank" href="https://www.facebook.com/Soundarya-Institute-of-Management-Science-519268908134711/"><img className="img-responsive" src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507104058/fb-icon_js7fya.png" alt=""/></a>
				</p>
			</div>
		</div>
	</div>
</div>
                
          )
    }
}