var gender =[]
var firstname = []
var announcement = []
var name =[]
var email = []
var grade = []
var club = []
var studentgrade
var studentclub
var studentgender
var i = 0;
var displayannouncement= "";

//gets data from teacher page and sets it onto the local storage

function getData() {

    gender[i]= document.getElementById("gender").value;
    announcement[i]= document.getElementById("announcement").value;
    name[i]= document.getElementById("name").value;
    email[i]= document.getElementById("email").value;
    grade[i]= document.getElementById("grade").value;
    club[i]= document.getElementById("club").value;

    localStorage.setItem('gender', JSON.stringify(gender));
    localStorage.setItem('announcement', JSON.stringify(announcement));
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('grade', JSON.stringify(grade));
    localStorage.setItem('club', JSON.stringify(club));
    i++;
    
    
}


//gets data from student profile page and puts it into local storage.
function getStudentData() {
    
   studentgrade = document.getElementById("studentgrade").value;
   studentclub = document.getElementById("studentclub").value;
   studentgender = document.getElementById("studentgender").value;
    
    localStorage.setItem("studentgrade", studentgrade);
    localStorage.setItem("studentclub", studentclub);
    localStorage.setItem("studentgender", studentgender);
    
    
    
    
    document.location.href="Student Viewer.html";
} 

//gets data from local storage and transfers it onto the student viewer.
function getStudentViewer(){

    
var studentgrade = localStorage.getItem("studentgrade");
var studentclub = localStorage.getItem("studentclub");
var studentgender = localStorage.getItem("studentgender");
    
var gender = JSON.parse(localStorage.getItem('gender'));
var announcement = JSON.parse(localStorage.getItem('announcement'));
var name = JSON.parse(localStorage.getItem('name'));
var email = JSON.parse(localStorage.getItem('email'));
var grade = JSON.parse(localStorage.getItem('grade'));
var club = JSON.parse(localStorage.getItem('club'));
 
//the if statements look at the information from the array and if it matches then it will display the information
for (let i=0; i < announcement.length; i++) {
    if (gender[i] == studentgender || gender[i] == "All") {
        if(grade[i] == studentgrade || grade[i] == "All") {
            if (club[i] == studentclub || club[i] == "All") {
                
        displayannouncement += announcement[i];
        
            
            }
        }
    }
    
}
        
 document.getElementById("view").innerHTML = displayannouncement;
}