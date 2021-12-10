import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPost";

export default class Home extends Component {



handleSearchBarSubmit = function(query) {
  console.log('trying to handle submit for query', query);
  this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <div>
          <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <RecentPosts/>
          </div>
        </div>
      </div>
    );
  }
}
