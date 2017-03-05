import React, { Component } from 'react';
// above { Component } is equivalent to:
// const Component = React.Component;

// SearchBar is a "class component" that is "self-aware" of changes to it and its surroundings
class SearchBar extends Component { // defines SearchBar class and then gives it all the functionality of a React component through the "extends" statement
  // initializing state
  // only class components have state
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }
  // class components must have a render method that returns JSX
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//export statement so that index.js can use the SearchBar component
export default SearchBar;
