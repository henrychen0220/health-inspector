import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar';
// component

const App = () => {

  // if there is function living inside another function
  // you need the "this" in front of the function
  this.updateSearchTerm = (searchTerm) => {
    console.log(`We are searching for ${searchTerm}`);
    // use "postman" API to fetch the data
    // 'then' is used for promise
    this.getSearchData(searchTerm).then((data)=>{
      console.log(data);
    });
  }

  // create a promise, waits the data to come back and use it
  // async helps you avoid callback
  this.getSearchData = async(searchTerm) => {
    let response;
    try {
      // javascript will run other stuffs when async
      // so we want to wait until this is finished to move on to other tasks
      // wait until this is done to move on (await)
      // fetch() is for API calls, fetch() returns a promise
      response = await fetch(`https://data.cityofchicago.org/resource/cwig-ma7x.json?$query=SELECT * where Contains(upper(dba_name), upper("${searchTerm}")) or Contains(upper(aka_name), upper("${searchTerm}"))
      `);
    } catch (e) {
      console.log(e);
    }

    let data;
    try {
      // pull out the json
      data = await response.json();
    } catch (e){
      console.log(e);
    }

    return data;
  }

  // jsx (returned html) (only return top level div that includes everything in here)
  return (
    <div>
      <SearchBar
      // makes the function accessible in our searchbar component
        updateSearchTerm={this.updateSearchTerm}
      />
    </div>
  );
}
// connects react to regular html in the index.html file
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
