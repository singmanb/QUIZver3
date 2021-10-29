var qno=1;
var attempt=0;
var correct=0;
var answer1;
var names;
var qcnt=0;
var questions =[{
    question: "What is the state tree of North Carolina?",
    answers: ["Dogwood", "Longleaf Pine", "Bald Cypress","Fraser Fir"],
    correctAnswer: "Dogwood",
    
  },
   { 
    question: "North Carolina grows the most what in the nation?",
    answers: ["Tomatoes", "Sweet Potatoes", "Broccoli", "Soybeans"],
    correctAnswer: "Sweet Potatoes",
    
  }, 
  {
  question: "What is the state bird of North Carolina?",
    answers: ["Bald Eagle", "Blue Jay", "Cardinal", "Wild Turkey"],
    correctAnswer: "Cardinal",
    
  },
  {
    question: "CSS stands for -",
    answers: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None"],
    correctAnswer: "Cascading style sheets",
    
  },
   {
    question: "The property in CSS used to change the text color of an element is -",
    answers: ["bgcolor", "color", "background-color", "None"],
    correctAnswer: "color",
    
  },
   {
    question: "The HTML attribute used to define the inline styles is -",
    answers: ["style", "styles", "class", "None"],
    correctAnswer: "style",
    
  },
  {
    question: "Choose the correct HTML elements for the lasting heading -",
    answers: ["heading", "head", "h6", "h1"],
    correctAnswer: "h1",
    
  },
  
  {
    question: "What is the correct HTML element for playing audio files? -",
    answers: ["mp3", "audio", "sound", "mp3.audio"],
    correctAnswer: "audio",
    
  },
  {
  
  question: "How do you call a function named myFun? -",
    answers: ["call myFun()", "myFun()", "call function myFun()", "None"],
    correctAnswer: "myFun()",
  
  },
  {
  
    question: "In Java Script Which operator is used to assign a value to a variable? -",
      answers: ["=", "X", "-", "*"],
      correctAnswer: "=",
    
  }
  ];  
  
function show_questions()
{
    var checkbox1=document.getElementById("chk1");
    
         checkbox1.checked=false;   
         var checkbox2=document.getElementById("chk2");
    
         checkbox2.checked=false;  
         var checkbox3=document.getElementById("chk3");
    
         checkbox3.checked=false; 
         var checkbox4=document.getElementById("chk4");
    
         checkbox4.checked=false;      
         if(correct>0)
         {
         document.getElementById("lblcorrect").innerHTML=correct; 
         }
    if(qno==1)
    {
                       
            document.getElementById("lblq1").innerHTML= questions[0].question;
            document.getElementById("lbl1").innerHTML= questions[0].answers[0];
            document.getElementById("lbl2").innerHTML= questions[0].answers[1];
            document.getElementById("lbl3").innerHTML= questions[0].answers[2];
            document.getElementById("lbl4").innerHTML= questions[0].answers[3];
            document.getElementById("lblqno").innerHTML=qno;
            document.getElementById("quiz").style.display = 'inline';
            document.getElementById("page1").style.display = 'none';
            document.getElementById("page3").style.display = 'none';
    }
    else
    {
                  
        document.getElementById("lblq1").innerHTML= questions[qno-1].question;
        document.getElementById("lbl1").innerHTML= questions[qno-1].answers[0];
        document.getElementById("lbl2").innerHTML= questions[qno-1].answers[1];
        document.getElementById("lbl3").innerHTML= questions[qno-1].answers[2];
        document.getElementById("lbl4").innerHTML= questions[qno-1].answers[3];
            
    
}
document.getElementById("lblqno").innerHTML=qno;
document.getElementById("lblqno1").innerHTML=qno;

};
function answers()
{
  attempt+=1;
  
  if(attempt>10)
  {
    var percent=(((correct/qno)*100).toFixed(2));
    // var percent=((correct/qno)*100);
    // percent=percent.toFixed(0);
    percent=percent + "%"
    document.getElementById("page3").style.display="inline";
    document.getElementById("quiz").style.display="none";
    document.getElementById("page1").style.display = 'none';
    document.getElementById("lblpercent").innerHTML=percent;
    return false;
  }

    var corrans=questions[qno-1].correctAnswer;
    var userans=questions[qno-1].answers[answer1];
    

    if(userans==undefined)
    {
      document.getElementById("lblcomment").innerHTML="Invalid Selection";
        return false;
    }
    if(corrans==userans)
    {
                document.getElementById("lblcorrect").innerHTML=qno;
        qno=Number(qno) + 1;
        correct+=1;
    }
    else
    {
        
        qno=Number(qno) + 1;
    }
    
      if(qno<11)
      {
        show_questions();
      }      
         
};

function chk_click1()
{
    
    var checkbox=document.getElementById("chk1");
   
    if(checkbox.click)
    {
        answer1="0";
    }

};
function chk_click2()
{
    
    var checkbox=document.getElementById("chk2");
   
    if(checkbox.click)
    {
        answer1="1";
    }

};
function chk_click3()
{
    
    var checkbox=document.getElementById("chk3");
   
    if(checkbox.click)
    {
        answer1="2";
    }

};
function chk_click4()
{
    
    var checkbox=document.getElementById("chk4");
   
    if(checkbox.click)
    {
        answer1="3";
    }

};


