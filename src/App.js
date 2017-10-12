import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Contact from './Home/Contact';
import IQAC from './Home/IQAC';
import Placements from './Home/Placements';
import Downloads from './Home/Downloads';
import About from './About/About';
import Faculty from './About/Faculty';
import Milestones from './About/Milestones';
import UGCoarse from './Coarse/UgCoarse';
import PGCoarse from './Coarse/PgCoarse';
import Management from './About/KeyExecutive';
import Research from './Coarse/Research';
import ValueAdded from './Coarse/ValueAdded';
import MangementStudy from './Department/Management';
import Commerce from './Department/Commerce';
import BCA from './Department/Bca';
import Physical from './Department/Physical';
import Admissions from './Admissions/Admissions';
import Library from './Campus/Library';
import Student from './Campus/Student';
import CommerceClub from './Campus/CommerceAndManagement';
import ITClub from './Campus/ITClub';
import LiteracyClub from './Campus/LiteracyClub';
import Sports from './Campus/Sports';
import Women from './Campus/Women';
import Nss from './Campus/Nss';
import Clubs from './Campus/Clubs';
import Unique from './Campus/Unique';
import Hostels from './Campus/Hostels';
import Careers from './Home/Carrers';
import News from './Home/News';
import Gallery from './Gallery/Gallery';
import Privacy from './About/Privacy';
import NewsSingle from './About/NewsSingle';
import SpecialCoarse from './About/SpecialCoarse';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Management" component={Management}/>
            <Route exact path="/Faculty" component={Faculty}/>
            <Route exact path="/Milestones" component={Milestones}/>
            <Route exact path="/" component={Milestones}/>
             <Route exact path="/UGCoarse" component={UGCoarse} />Research
             <Route exact path="/PGCoarse" component={PGCoarse} />
             <Route exact path="/Research" component={Research} />
             <Route exact path="/ValueAdded" component={ValueAdded} />
             <Route exact path="/MangementStudy" component={MangementStudy} />
              <Route exact path="/Commerce" component={Commerce} />
               <Route exact path="/BCA" component={BCA} />
                    <Route exact path="/Physical" component={Physical} />
                      <Route exact path="/Admissions" component={Admissions} />
                        <Route exact path="/Student" component={Student}/>
                      <Route exact path="/Library" component={Library} />
                      <Route exact path="/CommerceClub" component={CommerceClub} />
                      <Route exact path="/ITClub" component={ITClub} />
                      <Route exact path="/LiteracyClub" component={LiteracyClub} />
                       <Route exact path="/Sports" component={Sports} />
                       <Route exact path="/Women" component={Women} />
                       <Route exact path="/Nss" component={Nss} />
                        <Route exact path="/Clubs" component={Clubs} />
                        <Route exact path="/Unique" component={Unique} />
                         <Route exact path="/Hostels" component={Hostels} />
                           <Route exact path="/IQAC" component={IQAC} />
                                 <Route exact path="/Placements" component={Placements} />
                                   <Route exact path="/Downloads" component={Downloads} />
                                      <Route exact path="/Contact" component={Contact} />
                                       <Route exact path="/Gallery" component={Gallery} />
                                           <Route exact path="/Carrer" component={Careers} />
                                              <Route exact path="/News" component={News} />
                                                  <Route exact path="/Privacy" component={Privacy} />
                                                   <Route exact path="/SpecialCoarse" component={SpecialCoarse} />
                                                       <Route  path="/NewsSingle" component={NewsSingle}/>
            </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
