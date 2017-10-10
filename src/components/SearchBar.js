import React from 'react';



class SearchBar extends React.Component {

  //state object must be made in a constructor object
  constructor(){
    //calls consstructor in the React.Component object
    super();

    // we have access of this object in our component this.state.search
    // bind data to jsx using {this.state.search}
    this.state = {
      search: ""
    }
  }

  // e = event object when object is called
  handleSearchChange = (e) => {
    this.setState({
      // since in input object we specified name as 'search'
      // this e.target.name will be target to this.state.search

      // e.target.value = what user type in
      [e.target.name]: e.target.value
    });
  }

  //gets called by react automatically when data changed
  render(){
    return (
      <div className="searchbar-container">
        <form className="search-form">
          <input
            type="search"
            name="search"
            value={this.state.search}
            className="search-input"
            placeholder="Search Restaurants"
            onChange={this.handleSearchChange}
          />
        </form>
      </div>
    );
  }
}
// export components
export default SearchBar;
