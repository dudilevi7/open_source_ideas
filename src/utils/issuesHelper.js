
export const getFixTags = (issue) =>{
        var tags = "";
        var labels = issue.labels;
        labels.forEach(label => {
            tags+="<a href="+"#"+">"+label.name+"</a>"+"\xa0\xa0\xa0";
        });
        return tags ;
}
export const getDataByTag = (tagName,data) => {
    var newData = [];
    data.forEach(element => {
       var labels = element.labels;
       labels.forEach(label => {
           if (label.name === tagName) newData.push(element)
       })
    });
    return newData;
}
export const getNotEmptyTags = (tags, data) => {
    var notEmptyTagsArray = [];
    var flag = false;
    tags.forEach(tag => {
        data.forEach(element => {
            var labels = element.labels;
            labels.forEach(label=> {
                if (label.name === tag.name)
                    flag = true;
            })
        })
        if(flag) notEmptyTagsArray.push(tag);
        flag = false;
    })
    return notEmptyTagsArray;
}
export const getAllTitleElements = (data)=> {
    var titleElementsArray = [];
    data.forEach(element => {
        titleElementsArray.push({label : element.title, value : element});
    });
    return titleElementsArray;
}
export const getFiveTrendingIssues = (data)=> {
    let copyOfData = [...data];
    var sort = copyOfData.sort((elementA,elementB)=> elementB.comments - elementA.comments);
    var fiveTrendingArr = [sort[0],sort[1],sort[2],sort[3],sort[4]];
    return fiveTrendingArr;
}