import React,{Component } from 'react';


export default class Downloads extends Component{

    render(){

        return(

            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">Download Centre</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Downloads</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <article className="col-md-8 col-sm-7">                         
                            
                            <table className="table table-reponsive table-condensed table-bordered">
								<thead>
									<tr><th>Filename</th>
									<th>Download Links</th>
								</tr></thead>
                                <tbody>
               
                                    <tr>
                                        <td>College Application </td>
                                        <td><a href="http://zenopsys.net/soundarya_forms/sims/downloads/SIMS-application-form.pd"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Question Papers </td>
                                        <td>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BBA-QP.zip"><i className="fa fa-file-pdf-o"></i> Download BBA Papers</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BCA-QP.zip"><i className="fa fa-file-pdf-o"></i> Download BCA Papers</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BCOM-QP.zipf"><i className="fa fa-file-pdf-o"></i> Download B.Com Papers</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/LANGUAGE-QP.zip"><i className="fa fa-file-pdf-o"></i> Download Language Papers</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href=" http://zenopsys.net/soundarya_forms/sims/downloads/QMB-QP.zip"><i className="fa fa-file-pdf-o"></i> Download QMB Papers</a>
										</td>                                    
                                    </tr>
                                    <tr>
                                        <td>Lecture Notes </td>
                                        <td><a href="#"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>                                    
                                    </tr>
									<tr>
                                        <td>Syllabus</td>
                                        <td>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BBA-CBCS-SYLLABUS.pdf"><i className="fa fa-file-pdf-o"></i> Download BBA Syllabus</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BCA.pdf"><i className="fa fa-file-pdf-o"></i> Download BCA Syllabus</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/BCOM-CBCS-SYLLABUS.pdf"><i className="fa fa-file-pdf-o"></i> Download B.Com Syllabus</a><br/>
											<a style={{"padding":"5px 0",width:"100%",float:"left"}} href="http://zenopsys.net/soundarya_forms/sims/downloads/Bsc.zip"><i className="fa fa-file-pdf-o"></i> Download B.Sc Syllabus</a><br/>
										</td>                                    
                                    </tr>
									<tr>
                                        <td>Brochure</td>
                                        <td><a href="http://zenopsys.net/soundarya_forms/sims/downloads/brochure.pdf"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>                                    
                                    </tr>
									<tr>
                                        <td>Leaflet</td>
                                        <td><a href="http://zenopsys.net/soundarya_forms/sims/downloads/leaflet.pdf"><i className="fa fa-file-pdf-o"></i> Download PDF</a></td>                                    
                                    </tr>
                                </tbody>
                            </table>
 
                        </article>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
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
        </div>
        )
    }
}