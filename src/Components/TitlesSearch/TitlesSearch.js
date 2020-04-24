import React , {Component} from 'react';
import AsyncSelect from 'react-select/async';
import './TitlesSearch.css';
import { getAllTitleElements } from '../../utils/issuesHelper';

class TitlesSearch extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {  
            defaultValue : {
                label : "",
                value : null
            }
        };
    } 
    componentDidMount(){
        this._isMounted = true;
    }
  
    filterTitles = (inputValue) => {
        const IssuesAndTitlesArray = getAllTitleElements(this.props.issuesArr);
        
        return IssuesAndTitlesArray.filter(issue => {
            return issue.label.toLowerCase().includes(inputValue.toLowerCase())
         }
        );
      }

    promiseOptions = (inputValue) =>
    new Promise(resolve => {
      setTimeout(() => {
          resolve(this.filterTitles(inputValue));
      }, 1500);
    });

    onSelectTitle = (selectedTitle) => {
        if(selectedTitle){
        this.setState({defaultValue : {
            label : selectedTitle.label,
            value : selectedTitle.value
        }})
        var data = [selectedTitle.value];
        if(this._isMounted)
             this.props.onTitleClick(data);
        }
    }
    render() {
        return (
            <div id = "selectTitleInput">
            <AsyncSelect
             cacheOptions 
             defaultOptions
             defaultValue = {this.state.defaultValue.value}
             loadOptions={this.promiseOptions}
             onChange = {this.onSelectTitle}
             placeholder="Search by title..."
             isClearable
            /> 
            </div>
        );
    }
}

export default TitlesSearch;