import React,{Component} from 'react';
import './News.css';
import axios from 'axios';
export default class NewsSingle extends Component{
         constructor(){
        super();
        this.state={
            events:[],
            currentEvent:{
                eventdate:"Mon Jan 22 2018 12:12:23 GMT+0530 (IST)",
                    img:"",
                eventname:""
            }
        }
    }
    componentDidMount(){
   
       var a= window.location.hash.split("id=")[1]

             console.log(a,"apa")
           axios.get(`http://ec2-18-217-223-214.us-east-2.compute.amazonaws.com/SIMS/Events`)
             .then((res)=>{
                    
                    var _this=this;
                        var current={};
                        current=res.data.response.filter(function(element) {
                           return element.eventid==a;
                       
                        }
                            
                        )
                        console.log(current)
                        
                     _this.setState({
                         currentEvent:current[0],
                       
                    })
             })
    
    }
    render(){
        var year,month,day;
        if(this.state.currentEvent.eventdate)
        {
         year=new Date(this.state.currentEvent.eventdate).getFullYear();
         month=new Date(this.state.currentEvent.eventdate).toDateString().split(" ")[1];
          day=new Date(this.state.currentEvent.eventdate).toDateString().split(" ")[2];
        }
        
        return(

            <div className="content container" style={{marginTop:"30px"}}>
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">News</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                            <li><a href="/#/News">News-Events</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">Events</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">                         
                      
                        <div className="jobs-wrapper col-md-8 col-sm-7">
                            
                            <h3 className="title">{this.state.currentEvent.eventname}</h3> 
                               
							<div className="box box-border page-row">
                                    <ul className="list-unstyled">
                                            <li><strong>{this.state.currentEvent.eventname}</strong></li>
											<li><strong>Date:</strong> {day + " " +month+" "+year }</li>
                                        <li><strong>Location:</strong> Soundarya Institute of Management ans Science</li>
                                        <li><strong>Map link:</strong> 
											<a href="https://www.google.co.in/maps/place/Soundarya+Institute+of+Management+and+Science/@13.0705795,77.4917757,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae233f451c202f:0x82bf7bc62ebbf221!8m2!3d13.0705743!4d77.4939698" target="blank">View Map</a>
										</li>
                                    </ul>                                
                                </div>
							
                            <p></p><div></div><div><br/></div><div><span className="stylingNews"><img width="100%" src={this.state.currentEvent.event_url}/><b><br/></b></span></div><p></p>
                            
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">      
                            {/*<section className="widget has-divider">
                                <h3 className="title">Other Events</h3>
                                <ul className="job-list custom-list-style">
                                </ul>
                            </section>   */}
                                                                   
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}