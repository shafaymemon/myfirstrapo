var databaseSection=firebase.database().ref("Section")
function ObjectSection(key,section){
    this.Key=key
    this.Section=section
}
function funsectionTitle(){
    var key=databaseSection.push().key
    var section=document.getElementById("txtSectionTitle").value
    var objectSection=new ObjectSection(key,section)
    databaseSection.child(key).set(objectSection)
}
