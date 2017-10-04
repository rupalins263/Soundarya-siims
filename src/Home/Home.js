import React,{Component } from 'react';
import './Home.css';
import $ from 'jquery';
import axios from 'axios';

export default class Home extends Component{
	 constructor(){
        super();
        this.state={
            corosel:[],
           
        }
    }
    componentWillMount(){
         axios.get(`http://198.12.154.44:3333/PUC/Image/1`)
             .then((res)=>{
                    console.log(res)
                    this.setState({
                        corosel:res.data.response,
                       
                    })
             })
         
             
    }
	comonentDidMount(){

	}
    render(){
		         let val="";
		  let num="";
                if(this.state.corosel.length>0)
                {
                    val=this.state.corosel.map((item,index)=>{
                          if(index==0)
                          {
                              return(
                                       <div className="item active">
                                                <img src={item.image_url} alt="Los Angeles" style={{width:"100%",height:500}}/>

                                            </div>  
                              )
                          }
                          else{
                            return(
                                    <div className="item ">
                                            <img src={item.image_url} alt="New york" style={{width:"100%",height:500}}/>
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
			<div id="video-slider" className="slider flexslider">
				<ul className="slides">
					<li className="" style={{width: "100%", float: "left","margin-right":"-100%", position: "relative", "display": "none"}}><a href="http://www.youtube.com/watch?v=v9ytLhID46E?rel=0&amp;showinfo=0" className="html5lightbox"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060396/video-1_hey0ri.jpg" alt="" className="img-responsive"/><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060598/play-btn_nxozgd.png" alt="" className="play-btn"/></a></li>
					<li style={{width: "100%", float: "left","margin-right":"-100%", position: "relative", "display": "none"}}><a href="http://www.youtube.com/watch?v=jYIikr0xEu4?rel=0&amp;showinfo=0" className="html5lightbox"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060400/video-2_iov5av.jpg" alt="" className="img-responsive"/><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060598/play-btn_nxozgd.png" alt="" className="play-btn"/></a></li>
					<li style={{width: "100%", float: "left","margin-right":"-100%", position: "relative", "display": "none"}}><a href="http://www.youtube.com/watch?v=qdaitDnGuhg?rel=0&amp;showinfo=0" className="html5lightbox"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060401/video-3_ifqgj2.jpg" alt=""  className="img-responsive"/><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060598/play-btn_nxozgd.png" alt="" className="play-btn"/></a></li>
					<li style={{width: "100%", float: "left","margin-right":"-100%", position: "relative", "display": "none"}}><a href="http://www.youtube.com/watch?v=6o8Px9aR60s?rel=0&amp;showinfo=0" className="html5lightbox"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060396/video-4_cdz4nt.jpg" alt="" className="img-responsive"/><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060598/play-btn_nxozgd.png" alt="" className="play-btn"/></a></li>
					<li style={{width: "100%", float: "left","margin-right":"-100%", position: "relative", "display": "none"}} className="flex-active-slide"><a href="http://www.youtube.com/watch?v=sGTA2HsqCWA?rel=0&amp;showinfo=0" className="html5lightbox"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060399/video-5_nxygwj.jpg" alt="" className="img-responsive"/><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1507060598/play-btn_nxozgd.png" alt="" className="play-btn"/></a></li>
				</ul>
			<ol className="flex-control-nav flex-control-paging"><li><a className="">1</a></li><li><a className="">2</a></li><li><a className="">3</a></li><li><a className="">4</a></li><li><a className="flex-active">5</a></li></ol><ul className="flex-direction-nav"><li><a className="flex-prev" href="#">Previous</a></li><li><a className="flex-next" href="#">Next</a></li></ul></div>
		</div>
	</div>
	<div className="row cols-wrapper mt20">
		<div className="col-md-9 col-xs-12 col-sm-6">
			<div className="col-md-12 our-programs">
				<div className="col-md-3 col-xs-12 program-left">
					<h4 className="sub-headings">Our Programs</h4>
					<p>We have introduced 5 new programs this year. Learn More &amp; Apply</p>
					<a href="ug-courses.mako" className="btn btn-primary trans-btn"> All Programs &gt;</a>
				</div>
				<div className="col-md-9 col-xs-12 p0">
					<div className="programs owl-carousel owl-theme owl-responsive-1024 owl-loaded">
						
						
						
						
						<div className="owl-stage-outer">
									<div className="col-md-12 ">
													<div className="carousel slide" id="myCarousel">
													<div className="carousel-inner">
														<div className="item active">
														<div className="col-md-4"><a href="#"><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bcom_HomeBottomSlideShow.jpg" className="img-responsive"/></a></div>
														</div>
														<div className="item ">
														<div className="col-md-4"><a href="#"><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bba_HomeBottomSlideShow.jpg" className="img-responsive"/></a></div>
														</div>
														<div className="item">
														<div className="col-md-4"><a href="#"><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/bca_HomebottomSlideShow.jpg" className="img-responsive"/></a></div>
														</div>
														<div className="item">
														<div className="col-md-4"><a href="#"><img src="http://zenopsys.net/soundarya_forms/sims_images/Home/mcom_HomebottomSlideShow.jpg" className="img-responsive"/></a></div>
														</div>
													
													</div>
													<a className="left carousel-control" href="#myCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
													<a className="right carousel-control" href="#myCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
													</div>
													</div>


												<div className="container">
												<h1>Use Bootstrap's carousel to show multiple items per slide.</h1>
												<div className="row">
													<div className="col-md-12">
													<div className="carousel slide multi-item-carousel" id="theCarousel">
														<div className="carousel-inner">
														<div className="item active">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/f44336/000000" className="img-responsive"/></a></div>
														</div>
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/e91e63/000000" className="img-responsive"/></a></div>
														</div>
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/9c27b0/000000" className="img-responsive"/></a></div>
														</div>
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/673ab7/000000" className="img-responsive"/></a></div>
														</div>
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/4caf50/000000" className="img-responsive"/></a></div>
														</div>
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/8bc34a/000000" className="img-responsive"/></a></div>
														</div>
														
														
														<div className="item">
															<div className="col-xs-4"><a href="#1"><img src="http://placehold.it/300/8bc34a/000000" className="img-responsive"/></a></div>
														</div>
														
													
														</div>
														<a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
														<a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
													</div>
													</div>
												</div>
												</div>
			
						</div>
			
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-3 col-xs-12 col-sm-6">
			<div className="col-md-12 col-xs-12 col-sm-12 events all-events">
				<h3 className="heading">Events</h3>
				<div className="section-content">
							<div className="event-item">
								<p className="date-label">
									<span className="month">Aug</span>
									<span className="date-number">19</span>
								</p>
								<div className="details">
									<h2 className="title"><a href="news-single.mako?news_id=1">National Level Seminar on G S T &amp; IT' S IMPLICATIONS </a></h2>
									<p className="location"><i className="fa fa-map-marker"></i>Soundarya Institute of Management and Science</p>                            
								</div>
							</div>
					<a className="read-more" href="news-events.mako">All events<i className="fa fa-chevron-right"></i></a>
				</div>
			</div>
		</div>
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
					<a href="admission-ug-courses.mako" className="btn btn-primary more-btn">Read More &gt;&gt;</a>
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
			<div id="testimonial-slider" className="slider flexslider mb20" style={{"background": "#eee"}}>
				<ul className="slides">
					<li className="flex-active-slide" style={{"width": "100%","float": "left", "margin-right": "-100%",position: "relative",display: "list-item"}}><p className="text-center">SIMS educates students in a very creative way and encourages them to think out of the box. However, the college not only helps us to excel in the academics, but also focuses a lot on extracurricular activities.</p><p className="text-center"><strong>- Sagar</strong></p></li>
					<li style={{width: "100%",float: "left","margin-right": "-100%", position: "relative", display: "none"}} className=""><p className="text-center">SIMS gave me the tools to go out in the world with confidence.The concepts I learned are priceless. The staff are one of the best who care for the overall growth of the students.</p><p className="text-center"><strong>- Rekha</strong></p></li>
					<li style={{width: "100%",float: "left","margin-right": "-100%", position: "relative", display: "none"}} className=""><p className="text-center">At SIMS, you meet all the good, friendly people – from students to lecturers. You enjoy freedom to think, to express yourself and to succeed.</p><p className="text-center"><strong>- Neha</strong></p></li>
				</ul>
			<ol className="flex-control-nav flex-control-paging"><li><a className="flex-active">1</a></li><li><a className="">2</a></li><li><a className="">3</a></li></ol><ul className="flex-direction-nav"><li><a className="flex-prev" href="#">Previous</a></li><li><a className="flex-next" href="#">Next</a></li></ul></div>
		</div>
		<div className="col-md-4 col-xs-12">
			<h3 className="heading">Useful Links</h3>
			<div className="col-md-6 col-xs-12">
				<ul className="p0">
					<li><a href="admission-ug-courses.mako"><i className="fa fa-caret-right"></i> Admissions</a></li>
					<li><a href="ug-courses.mako"><i className="fa fa-caret-right"></i> Courses</a></li>
					<li><a href="placements.mako"><i className="fa fa-caret-right"></i> Placements</a></li>
				</ul>
			</div>
			<div className="col-md-6 col-xs-12">
				<ul className="p0">
					<li><a href="research-facilities.mako"><i className="fa fa-caret-right"></i> Research Facilities</a></li>
					<li><a href="value-added-courses.mako"><i className="fa fa-caret-right"></i> Value Added Courses</a></li>
					<li><a href="downloads.mako"><i className="fa fa-caret-right"></i> Downloads</a></li>
				</ul>
			</div>
			<div className="col-md-6 col-xs-12 mt20">
				<strong>Connect With Us</strong>
			</div>
			<div className="col-md-6 col-xs-12 mt20">
				<p style={{float:"right"}}>
					<a target="_blank" href="#"><img className="img-responsive" src="assets/images/social/ln-icon.png" alt=""/></a>
					<a target="_blank" href="#"><img className="img-responsive" src="assets/images/social/ins-icon.png" alt=""/></a>
				</p>
				<p style={{float:"right"}}>
					<a target="_blank" href="#"><img className="img-responsive" src="assets/images/social/tw-icon.png" alt=""/></a>
					<a target="_blank" href="https://www.youtube.com/channel/UCDC5YDdZO_KG5vN4LEEry3g/"><img className="img-responsive" src="assets/images/social/yb-icon.png" alt=""/></a>			
				</p>
				<p style={{float:"right"}}>
					<a target="_blank" href="https://www.facebook.com/Soundarya-Institute-of-Management-Science-519268908134711/"><img className="img-responsive" src="assets/images/social/fb-icon.png" alt=""/></a>
				</p>
			</div>
		</div>
	</div>
</div>
                
          )
    }
}