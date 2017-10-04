import React,{Component } from 'react';


export default class Library extends Component{

    render(){

        return(
            <div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">LIBRARY AND INFORMATION CENTRE</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="index.html">Home</a><i className="fa fa-angle-right"></i></li>
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
                                           
                                        </ol>


                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-1_LibrarySlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-2_LibrarySlideShow.jpg" alt=""/>
                                            </div>
                                            <div className="item ">
                                                <img src="http://zenopsys.net/soundarya_forms/sims_images/CampusLife/library-3_LibrarySlideShow.jpg" alt=""/>
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
                            
                            <p style={{"margin-top":"30px"}}>The library facility here is of the state-of-the art. The library is fully computerized with library software (LIBSOFT &amp; DELNET e-resources).     The library has a huge collection of 8,000 reference and text books alongwith CDs and DVDs apart from reputed National and International journals, magazines and periodicals in the field of Commerce, Management and Computer Science.</p>

                            <p>The project reports,  question papers, journals, magazines and periodicals of previous years are made available in the library for faculty and students reference.</p>
                        
                            <p>The mission is to provide comprehensive resources and services in support of the research, teaching, and learning needs of the faculty and students community. </p>


                            <h3 className="text sub-heading">Library Resources Statistics</h3>                            
                            <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                        <tr className="success">
                                            <td>Total class </td>
                                            <td>7307</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>Total number of volumes </td>
                                            <td>4120</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>Total number of rference books</td>
                                            <td>2009</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>Ratio of students to teachers</td>
                                            <td>3700</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>Total number of periodicals </td>
                                            <td>46</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>National journals </td>
                                            <td>19</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>INTL. journals </td>
                                            <td>05</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>Magazines</td>
                                            <td>12</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>News Papers</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>Back volumes </td>
                                            <td>158</td>
                                        </tr>      
                                        <tr className="success">
                                            <td>CD's</td>
                                            <td>130</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>E-journals database</td>
                                            <td>J-GATE</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>Inter library loan</td>
                                            <td>DELNET, Bangalore University, Bitish Library</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>University, British Library
                                                Library Software
                                                </td>
                                            <td>LIBSOFT</td>
                                        </tr>    
                                        <tr className="success">
                                            <td>Library Classifications</td>
                                            <td>DDC 21ST ED.</td>
                                        </tr>
                                        <tr className="danger">
                                            <td>Ratio of Students to Teachers</td>
                                            <td>Open Access</td>
                                        </tr>    
                                       
                                </tbody>
                            </table>
                            </div>
                            <h3 className="text sub-heading">Staff Details</h3>
                            <strong>Mr.Ranganatha T.L.</strong>   M.A., M.Sc.(LIS),  M.Phil.   

                            <h3 className="text sub-heading plus-tab"><a data-toggle="collapse" data-parent="#accordion5" href="#collapse-4" aria-expanded="false" className="collapsed"><i className="fa fa-plus" aria-hidden="true"></i></a> Library Rules and Regulations</h3>
                            <div className="sliding" id="collapse-4">
                            <p><strong>Library Timings – 9.00 a.m. to 5.00 p.m.</strong></p>
                            <ul className="custom-list-style tik hand-right">
                                <li> Students are requested to enter their name and sign in the register kept at the check point while entering the library </li>
                                <li> Issuing and returning of books is between 9:00a.m.to4.00p.m.</li>
                                <li> 2 Books for students &amp; 4 Books for faculty members will be issued.</li>
                                <li> Must promptly display the books and other documents which are being taken out of the library to the staff at the check Point.</li>
                                <li> Library books should be returned within 15 days else of Rs. 1/- per day will be collected as fine.</li>
                                <li> Borrower must replace lost - damaged books.</li>
                                <li> Personal books/ Files/ Blazers/ Jerkins should not be carried inside the Library. </li>
                                <li> Reference books/ Journals/ Students Project Report are only for reference.</li>
                                 <li> Students should bring their Identity Card /Borrower’s Card whenever they enter the Library.</li>
                                <li> Students have to Maintain Silence inside the Library.</li>
                                <li> If any student found misbehaving inside the Library, he/she will be suspended from the library for one week.</li>
                                <li> All borrowed books must be returned and Dues must be settled prior to receiving examination hall tickets.</li>
                                <li> Borrower’s card is not transferable</li>
                                <li> Loss of borrower `s card to be reported immediately in writing to the Librarian </li>
                                <li> Contact the Librarian /section staff on duty for any queries</li>
                                <li> Renewals are allowed only time, when there is no claim by others</li>
                                <li> Keep the library premises tidy</li>
                                <li> Mobile phones strictly prohibited inside the library</li>                              
                            </ul>
                            </div>

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
        </div>
        )
    }
}