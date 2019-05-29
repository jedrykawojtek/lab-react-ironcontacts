import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Celeb from "./Celeb.js"

class App extends Component {

  state = {
    celebsSelection:  contacts.splice(0, 4),
    celebs: contacts, 
    // celebsSelection: deleteContactCopy
  }

  addRandom = ()=> {
    //Copy state, because react state should be immutable. 
    //(Only change state with this.setState method).
    const selectionCopy = [...this.state.celebsSelection]
    const allCelebsCopy = [...this.state.celebs];

    //Genegerate random number between 0 and length of celeb array.
    const randomIndex = Math.floor(Math.random() * this.state.celebs.length);
    
    //Get random object from celeb array. Splice cuts it out.
    const randomCeleb = allCelebsCopy.splice( randomIndex , 1 )[0]

    //Push object in array.
    selectionCopy.push(randomCeleb) 
    
    //Update state and call render method with new state.
    this.setState({celebsSelection: selectionCopy, celebs:allCelebsCopy })
  }

  sortByName = ()=> {
    const sortSelectionCopy = [...this.state.celebsSelection];
    const allSortSelectionCopy = sortSelectionCopy.sort( (a, b) =>  {
      if(a.name > b.name) return 1; 
      if(a.name < b.name) return -1;
      return 0; 
      }
    );

    this.setState({celebsSelection: allSortSelectionCopy });
    }
  
  sortByPopularity = ()=> {
    const sortPopularityCopy = [...this.state.celebsSelection];
    const allSortPopularityCopy = sortPopularityCopy.sort( (a, b) => {
      return b.popularity - a.popularity
    });


  this.setState({celebsSelection: allSortPopularityCopy });

  }

  deleteContact = (index)=> {
    const deleteContactCopy = [...this.state.celebsSelection];
    const allDeleteContactCopy= deleteContactCopy.splice( index , 1 )
    this.setState({celebsSelection: deleteContactCopy });
    // create copy from celebsSelction
    // remove contact with index from copy
    // set celebSelection equal to modified copy
  }   
   
  render() {
    let celebsJsx = this.state.celebsSelection.map((celeb, index)=> (
        // add index prop to celeb
        // add deleteContact to celeb as a prop
        <Celeb picture={celeb.pictureUrl} 
               name={celeb.name} 
               popularity={celeb.popularity} 
               index={index}
               delete={this.deleteContact}
               />
    ));

    return (
    
      <div className="App">
        <header className="App-header">
          <div className="button-container">
            <button className="button" onClick={e => this.addRandom()}>Add random contact</button>
            <button className="button" onClick={e => this.sortByName()}>Sort by name</button>
            <button className="button" onClick={e => this.sortByPopularity()}>Sort by popularity</button>
        </div>    
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div className="Celeb-chart">
          <div className="picture-header">
            <h2>Picture</h2>
          </div>
          <div className="text-container">
            <h2>Name</h2>
          </div>           
          <div className="text-container">
            <h2>Popularity</h2>
          </div>
           <div className="spacer"></div>          
        </div>
        {celebsJsx}
      </div>
    );
  }
}

export default App;
