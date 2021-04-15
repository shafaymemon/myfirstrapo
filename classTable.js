var databaseClass=firebase.database().ref("Class")

var classList=[]

databaseClass.on('child_added',function(getdata){
    var abc=getdata.val()
    classList=[]
    classList.push(abc)
    //console.log(classList)
    filldata()
})

function filldata(){
    var pst=document.getElementById("pst")
    for(i=0; i<classList.length; i++){
        var tr=document.createElement("tr")
        var td=document.createElement("td")
        td.innerHTML=classList[i]["Title"]
        tr.appendChild(td)
    }


    pst.appendChild(tr)
}




