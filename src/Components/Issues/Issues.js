import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Comments from '../Comments/Comments';
import TagsBar from '../TagsBar/TagsBar';
import TitlesSearch from '../TitlesSearch/TitlesSearch';
import './Issues.css'
import Sort from '../Sort/Sort';
import { getFixTags } from '../../utils/issuesHelper';
var marked = require('marked');

class Issues extends  Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {  
           issues : {},
           allIssuesArray : {},
           currIndex : '',
           showBody : false
        };
    }
    componentDidMount(){
        this._isMounted = true;
        this.fetchIssues();
    }
    componentDidUpdate(prevProps, prevState) {
		// if (this.state.currentSelectedCityKey !== prevState.currentSelectedCityKey) {
		//   this.fetchCurrentTemperature();
        // }
        // console.log("new state" ,this.state)
        // console.log("prev state",prevState)
        
	}
    componentWillUnmount(){
        this._isMounted = false;
    }
    fetchIssues = () => {
        var url = "https://api.github.com/repos/open-source-ideas/open-source-ideas/issues";
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => {
            if (this._isMounted){
                this.setState({issues : data});
                this.setState({allIssuesArray : data})
			}
        })
    }
    onCommentsClick = (comments,index)=> {
        if(comments!==0 && this.state.currIndex!==index)
        this.setState({currIndex : index});
        else this.setState({currIndex : ""});
    }
    onTagClick = (data) => {
        this.setState({showBody : false});
        this.setState({issues : data})
    }
    onTitleClick = (data) => {
        this.setState({showBody : true});
        this.setState({issues : data})
    }
    onTrendingClick = (trendingIssues) => {
      this.setState({showBody : false});
      this.setState({issues : trendingIssues})
    }
    onIssueClicked = (issue) => {
        this.setState({showBody : true})
        var data = [issue];
        this.setState({issues : data})
    }
    render() {
        if(!this.state.issues[0] && !this.state.issues.title) return  <Spinner animation="border" />
        var issuesTemp = this.state.issues;
        const issuesArr = issuesTemp.map((user,i)=>{
            return (
                    <Card id = "issue" key ={i}>
                    <Card.Body>
                        <Card.Title id = "issueTitle" style = {{cursor : 'pointer',color : '#0275d8',textDecoration : 'underline'}} 
                        onClick = {()=> this.onIssueClicked(issuesTemp[i])}>{issuesTemp[i].title}</Card.Title>
                        <div id = "tags"
                             dangerouslySetInnerHTML = {{__html : marked(getFixTags(issuesTemp[i]))}}></div>              
                      {this.state.showBody?  <div id = "bodyText"
                             dangerouslySetInnerHTML = {{__html : marked(issuesTemp[i].body)}}></div> : ""}
                        <div id = 'buttons'>
                          <Button id = "commentsBtn" variant = "dark" onClick = {()=> this.onCommentsClick(issuesTemp[i].comments,i)}>{issuesTemp[i].comments} comments</Button>
                          <Button id = "gitBtn" onClick ={()=>window.open(issuesTemp[i].html_url, '_blank').focus()}>View on GitHub</Button>
                        </div>
                        {this.state.currIndex === i ? 
                                <div id={"div"+i} style = {{margin : '10px'}}>
                                  <Comments url = {issuesTemp[i].comments_url}/>
                                </div> 
                         : ""}
                    </Card.Body>
                    </Card>
            );
        });
        return (
            <div id = "issuesContainer">
               <TagsBar issuesArr = {this.state.allIssuesArray} onTagClick = {this.onTagClick}/>
               <div id = "issuesArray">
                    <div id = "search">
                        <TitlesSearch issuesArr = {this.state.allIssuesArray} onTitleClick = {this.onTitleClick}/>
                        <Sort issuesArr = {this.state.issues} onTrendingClick = {this.onTrendingClick}/>
                    </div>
               {issuesArr}
               </div>
               
             </div>
        );
    }
}
export default Issues;
