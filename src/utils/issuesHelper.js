
export const getFixTags = (issue) =>{
        var tags = "";
        var labels = issue.labels;
        labels.forEach(label => {
            tags+="<a href="+"#"+">"+label.name+"</a>"+"\xa0\xa0\xa0";
        });
        return tags ;
}
