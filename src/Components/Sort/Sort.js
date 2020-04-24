import React , {Component} from 'react';
import { getFiveTrendingIssues } from '../../utils/issuesHelper';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    onTrendingClick = ()=> {
            var trending = getFiveTrendingIssues(this.props.issuesArr);
            this.props.onTrendingClick(trending);
    }
    render() {

        return (
            <DropdownButton id="dropdown-basic-button" title="Sort by">
            {this.props.issuesArr.length>4 ? <Dropdown.Item onClick = {this.onTrendingClick}>Trending</Dropdown.Item> 
            : <Dropdown.Item disabled>Trending</Dropdown.Item> }
            </DropdownButton>
        );
    }
}

export default Sort;