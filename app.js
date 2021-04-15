//console.log(firebase)
var databaseStudent= firebase.database().ref("Student")

var gender="male"
function funMale(){
    gender="male"
}
function funcfemale(){
    gender="female"
}
var nationality="pakistan"
function funnat(){
    nationality="pakistan"
}
function funforigener(){
    nationality="forigener"
}
var domicile="Rural"
function funcRural(){
    domicile="rural"
}
function funurban(){
    domicile="Urban"
}

var studentList=[]

function Objectstudent(key, admNumber,studentName,fatherName,dob,domicileType,gender,nationality){
    this.Key=key
    this.admNumber=admNumber
    this.studentName=studentName
    this.fatherName=fatherName
    this.dob=dob
    this.Domicile=domicileType
    this.nationality=nationality
    this.gender=gender
}

function funcAdd(){
    var studentName=document.getElementById("txtstudentName").value
    var admNumber=document.getElementById("txtadmNumber").value
    var fatherName=document.getElementById("txtfatherName").value
    var dob=document.getElementById("txtdob").value 
    
    var key=databaseStudent.push().key

    var objectstudent=new Objectstudent(key,admNumber,studentName,fatherName,dob,domicile,gender,nationality)
     
    databaseStudent.child(key).set(objectstudent)

    console.log(objectstudent)

    

}