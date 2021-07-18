showNotes();
let txt = document.getElementById('addTxt');
txt.addEventListener('click',function(){
    let txt = document.getElementById('txt');
    let note =localStorage.getItem("notes");
    if(note==null){
      notesObj=[];
    }
    else{
      notesObj=JSON.parse(note);
    }
    notesObj.push(txt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    txt.value="";
    console.log(notesObj);
    showNotes();
    

});
function showNotes(){
  let note =localStorage.getItem("notes");
  if(note==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(note);
  }
   let html="";
   notesObj.forEach((element,index) => {
    html+=`  <div class="card mx-2 my-2 notecard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button id="${index}" onclick="dltnote(this.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>`;
   }); 
   let noteshow = document.getElementById('shownote');
   if(notesObj.length !=0){
    noteshow.innerHTML=html;
   }
   else{
     noteshow.innerHTML="Nothing to show please add notes.";
   }
  
}
function dltnote(index){
  let note=localStorage.getItem("notes");
  if(note==null){
    notesObj=[];
  }
  else{
    notesObj=JSON.parse(note);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
  let val= search.value;
  let div = document.getElementsByClassName('notecard');
  Array.from(div).forEach(function(element){
  
    let disp=element.getElementsByTagName('p')[0].innerText;
    if(disp.includes(val)){
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }

  });

  

});