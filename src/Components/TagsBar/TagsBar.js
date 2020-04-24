import React , {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'
import './TagsBar.css'
import { getDataByTag, getNotEmptyTags } from '../../utils/issuesHelper';

class TagsBar extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            tags : {}
        };
    }
    componentDidMount() {
        this._isMounted = true;
        this.fetchTags();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }

    fetchTags = () =>{
        var url = "https://api.github.com/repos/open-source-ideas/open-source-ideas/labels";
        var req = new Request(url);
        fetch(req)
        .then(response => response.json())
        .then(data => {
            if(this._isMounted)
                this.setState({tags : data})
        });
    }
    onLabelClick =  (labelName)=>{
        if (labelName==="All"){
            this.props.onTagClick(this.props.issuesArr);
        }else {
            var data = getDataByTag(labelName,this.props.issuesArr);
            this.props.onTagClick(data);
        }
    }
    render() {
        if (!this.state.tags[0]) return <Spinner animation="border" />;
        var tagsTemp = getNotEmptyTags(this.state.tags,this.props.issuesArr) 

        const tagsArr = tagsTemp.map((user,i)=>{
            return   <ListGroup.Item as="li" href={ tagsTemp[i].name} key = {i} onClick = {()=>this.onLabelClick(tagsTemp[i].name)}>
            {tagsTemp[i].name}
        </ListGroup.Item>
        });
        return (
            <div id = "tagsBarContainer">
                <h4>Tags</h4>
                <ListGroup as="ul" defaultActiveKey="AllIdeas">
                <ListGroup.Item as="li" href="AllIdeas" key = "00" onClick = {()=>this.onLabelClick("All")}>
                      All ideas
                </ListGroup.Item>
                    {tagsArr}
                    </ListGroup>
             </div>
           
        );
    }
}

export default TagsBar;