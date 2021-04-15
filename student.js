var dbst=firebase.database().ref("Student")

var studentList=[]

dbst.on('child_added',function(getdata){
    var abc=getdata.val()
    studentList=[]
    studentList.push(abc)
    //console.log(studentList)
    filldata()
})

function filldata(){
    var tst=document.getElementById("tst")

    for(i=0; i<studentList.length; i++){
        var tr=document.createElement("tr")

        var td=document.createElement("td")
        td.innerHTML=studentList[i]["admNumber"]
        tr.appendChild(td)

        

        var td =document.createElement("td")
        td.innerHTML=studentList[i]["studentName"]
        tr.appendChild(td)

        var td=document.createElement("td")
        td.innerHTML=studentList[i]["fatherName"]
        tr.appendChild(td)

        var td=document.createElement("td")
        td.innerHTML=studentList[i]["nationality"]
        tr.appendChild(td)

        var td=document.createElement("td")
        td.innerHTML=studentList[i]["gender"]
        tr.appendChild(td)

        var td=document.createElement("td")
        td.innerHTML=studentList[i]["Domicile"]
        tr.appendChild(td)



      tst.appendChild(tr)
    }
    
}