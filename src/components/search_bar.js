import React, { Component } from 'react';
// { Component } same as const Component = React.Component

// javascript object that accesses all the functionality from React.component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

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

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}


// const SearchBar = () => {
//     return <input />; // React.createElement
// };

export default SearchBar;
