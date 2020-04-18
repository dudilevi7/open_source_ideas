import React , {Component} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Comments.css';

class Comments extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = { 
            comments : {}
         };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) 
            this.fetchComments();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    fetchComments = () => {
        var url = this.props.url;
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => this.setState({comments : data}));
    }
    render() {
        if(!this.state.comments[0]) return  <Spinner animation="border" />
        var commentsTemp = this.state.comments;
        const commentsArr = commentsTemp.map((user,i)=>{
            return (
                <div key={i}>
                    <h5>{commentsTemp[i].user.login}</h5>
                    {commentsTemp[i].body}
                    <div id = "time">{commentsTemp[i].created_at}</div>
                    <hr></hr>
                </div>
            )
        });
        return (
            <div id = "commentsContainer">
             {commentsArr}
             </div>
        );
    }
}

export default Comments;