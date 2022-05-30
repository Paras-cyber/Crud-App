let btn =  document.getElementById('add_btn') ;
btn.addEventListener('click', addchapter) ;
function addchapter(event)
{
  let currentBtn = event.currentTarget ;
  let currentinput = currentBtn.previousElementSibling ;
  console.log(currentinput.value) ;
  let chaptername  = currentinput.value ; 
  
  let newLi = document.createElement('Li') ;
  // newLi.classList.add('list-group-item') ;
  newLi.className = "list-group-item d-flex justify-content-between" ;
  newLi.innerHTML =  `<h3 class="flex-grow-1"> ${chaptername} </h3> <button class="btn btn-warning mx-5" id="remove" onclick="editChapter(this)">Edit</button> <button class="btn btn-danger" id="remove" onclick="removechapter(this)">Remove</button>` ;

  let parentList =  document.getElementById('parentList') ;
  parentList.appendChild(newLi) ;

}

function removechapter(currElement){
  currElement.parentElement.remove() ;
}

function editChapter(currElement){
  if(currElement.textContent == "Done") {
    currElement.textContent = "Edit" ;
    let currChapterName = currElement.previousElementSibling.value ;
    let currHeading = document.createElement('h3');
    currHeading.className = "flex-grow-1" ;
    currHeading.textContent = currChapterName ;
    currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling) ;
  }
  else{
  currElement.textContent = "Done" ;
  let currChapterName = currElement.previousElementSibling.textContent ;
  let currInput = document.createElement('input');
  currInput.type = "text" ;
  currInput.placeholder = "Chapter Name" ;
  currInput.className = "form-control" ;
  currInput.value = currChapterName ;

  currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling) ;
  }
}