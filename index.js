

const tasklist = [];



function closepopup  () {
    document.getElementById("popup").style.display = "none";
    document.getElementById("bg").style.filter = "blur(0px)";
    
}


function addlistpopup () {

    document.getElementById("popup").style.display ="block";
    document.getElementById("bg").style.filter = "blur(10px)";
    
}

function addlist (){
    document.getElementById("popup").style.display = "none";
    document.getElementById("bg").style.filter = "blur(0px)";
    const name =document.getElementById("card").value;
    const tempObj = {
        taskname : name
    }
    tasklist.push(tempObj);
    addlistonscreen();
    

}

function addlistonscreen () {
    const e = document.createElement("div");
    e.setAttribute("class","box");
    e.setAttribute("value","tasklist.length-1");
    
    const container = document.getElementsByClassName("flex-container");
    
    const element0 = document.createElement("div");
    element0.setAttribute("class","header");
    element0.innerText = tasklist[tasklist.length-1].taskname;
    
    const element1 = document.createElement("div");
    element1.innerHTML = "<div><hr></div>"

    const element2 = document.createElement("div");
    element2.setAttribute("class","tasks");
    
    const plus = document.createElement("i");
    plus.setAttribute("class","icon1 fa-solid fa-circle-plus");
    plus.setAttribute("onclick","addtaskpopup()")
    
    const del = document.createElement("i");
    del.setAttribute("class","icon2 fa-solid fa-trash-can");
    del.setAttribute("onclick","deletelist()");
    del.setAttribute("value","tasklist.length-1");
    
    container[0].appendChild(e);
    e.appendChild(element0);
    e.appendChild(element1);
    e.appendChild(element2);
    e.appendChild(plus);
    e.appendChild(del);

    islistempty();
}

  function deletelist(){

      const dellist = document.getElementsByClassName("box");
      
      for(let i=0;i<tasklist.length;i++)
         dellist.parentNode.delete(dellist);

      islistempty();
  }
 function islistempty() {
    const noitem = document.getElementById("noitems");

     if (tasklist.length == 0)
        noitem.style.display = "block";
    else
        noitem.style.display = "none";
 }
 

   const tasklist1 = [];

   function addtaskpopup () {

    document.getElementById("taskpopup").style.display ="block";
    document.getElementById("bg").style.filter = "blur(10px)";
}

  function addtask (){
    const name =document.getElementById("task").value;
    const tempObj2 = {
        taskname : name
    }
    tasklist1.push(tempObj2);
    addtaskonscreen();
    
}
function addtaskonscreen () {
    const n1 = document.createElement("div");
    n1.setAttribute("class","addtask");
    n1.innerText = tasklist1[tasklist1.length-1].taskname;
    n1.style.textAlign = "center";
    
    const contains = document.getElementsByClassName("tasks");
    
    contains[0].appendChild(n1);
    closetaskpopup();
}
function closetaskpopup(){
    document.getElementById("taskpopup").style.display = "none";
    document.getElementById("bg").style.filter = "blur(0px)";
}