var databaseSection=firebase.database().ref("Section")

var sectionList=[]

databaseSection.on('child_added',function(getdata){
    var abc=getdata.val()
    sectionList=[]
    sectionList.push(abc)
    //console.log(sectionList)
    filldata()
})

function filldata(){
    var stp=document.getElementById("stp")
    for(i=0; i<sectionList.length; i++){
        var tr=document.createElement("tr")
        var td=document.createElement("td")
        td.innerHTML=sectionList[i]["Section"]
        tr.appendChild(td)
    }

    stp.appendChild(tr)

}
