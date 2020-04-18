import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import Spinner from 'react-bootstrap/Spinner';
import { getFixTags } from '../../utils/issuesHelper';
import './Issues.css'
import Comments from '../Comments/Comments';
var marked = require('marked')
class Issues extends  Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {  
           issues : {},
           currIndex : ''
        };
    }
    componentDidMount(){
        this._isMounted = true;
        this.fetchIssues();
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
				this.setState({issues : data})
			}
        })
    }
    onCommentsClick = (comments,index)=> {
        if(comments!==0 && this.state.currIndex!==index)
        this.setState({currIndex : index});
        else this.setState({currIndex : ""});
    }
    render() {
        if(!this.state.issues[0]) return  <Spinner animation="border" />
        var issuesTemp = this.state.issues;

        const issuesArr = issuesTemp.map((user,i)=>{
            return (
                    <Card id = "issue" style = {{margin : '20px' }} key ={i}>
                    <Card.Body>
                        <Card.Title id = "issueTitle" >{issuesTemp[i].title}</Card.Title>
                        <div style ={{color : '#ff0000', margin :'15px' }} 
                             dangerouslySetInnerHTML = {{__html : marked(getFixTags(issuesTemp[i]))}}></div>              
                        <div id = "bodyText" style = {{margin : '10px'}}
                             dangerouslySetInnerHTML = {{__html : marked(issuesTemp[i].body)}}></div>
                        <div id = 'buttons'>
                          <Button onClick = {()=> this.onCommentsClick(issuesTemp[i].comments,i)}>{issuesTemp[i].comments} comments</Button>
                          <Button onClick ={()=>window.open(issuesTemp[i].html_url, '_blank').focus()}>View on GitHub</Button>
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
              {issuesArr}
             </div>
        );
    }
}
export default Issues;
