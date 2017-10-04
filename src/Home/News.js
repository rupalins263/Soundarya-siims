import React,{Component } from 'react';
import './Home.css';

export default class Home extends Component{

    render(){

        return(<div className="content container">
            <div className="page-wrapper">
                <header className="page-heading clearfix">
                    <h1 className="heading-title pull-left">News</h1>
                    <div className="breadcrumbs pull-right">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-label">You are here:</li>
                            <li><a href="index.html">Home</a><i className="fa fa-angle-right"></i></li>
                            <li className="current">News</li>
                        </ul>
                    </div>
                </header> 
                <div className="page-content">
                    <div className="row page-row">
                        <div className="news-wrapper col-md-8 col-sm-7">

                       
                       
                        </div>
                        <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">  
                            

                        <section className="widget has-divider">
                            <h3 className="title">Latest Events</h3>
                                <article className="events-item row page-row">                                    
                                    <div className="date-label-wrapper col-md-3 col-sm-4 col-xs-4">
                                        <p className="date-label">                          
                                            <span className="month">Aug</span>
                                            <span className="date-number"> 19</span>
                                        </p>
                                    </div>
                                    <div className="details col-md-9 col-sm-8 col-xs-8">
                                        <h5 className="title">National Level Seminar on G S T &amp; IT' S IMPLICATIONS </h5>  
                                        <p className="time text-muted">Soundarya Institute of Management and Science</p>                  
                                    </div>
                                </article>
                        </section>                                  
                        </aside>
                    </div>
                </div>
            </div>
        </div>)
    }
}