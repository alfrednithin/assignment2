 
function doAdd(){
               var time = new Date().getHours();
               var minutes = new Date().getMinutes();
               var seconds = new Date().getSeconds();
               var studentname= document.getElementById("studentname").value+ "";
               var studentmajor= document.getElementById("studentmajor").value+ "";
               var studentyear= document.getElementById("startyear").value+ "";

/* Conditions to validate the year fields */

               if (studentyear <= 2000)
                                {
                                  alert ("Please enter an year greater than or equal to 2000");
                                             }
                 if (studentname == " ")
                {
                                alert ("Please enter name");
                }
      if(studentmajor == " ")
                {
                                alert ("Please enter major");
                }
 
               if (studentyear >= 2000 && studentname != " " && studentmajor != " ")
               {

/* To display the entered records */

               document.getElementById("records").innerHTML += "<br />" + time + ":" + minutes + ":" + seconds + " ;" + studentname + ", " + studentmajor + ", " + studentyear;
               document.MyFormDetails.studentname.value=" ";
               document.MyFormDetails.studentmajor.value=" ";
               document.MyFormDetails.startyear.value=" ";
                }
 
               }