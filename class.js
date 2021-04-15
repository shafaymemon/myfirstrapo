var databaseClass=firebase.database().ref("Class")
function ObjectClass(key,classTitle){
    this.Key=key
    this.Title=classTitle
}
function funclasstitle(){
    var key=databaseClass.push().key
    var classTitle=document.getElementById("txtClassTitle").value
    var objectClass=new ObjectClass(key,classTitle)
    databaseClass.child(key).set(objectClass)
}