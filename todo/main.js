const list = document.querySelector('ul');
const addBtn = document.querySelector('.addBtn');

list.addEventListener('click', (event) =>  {
    event.target.classList.toggle('checked');
});

addBtn.addEventListener('click', () => {

  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let text = document.createTextNode(inputValue);
  
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something!");
  }else {
    list.appendChild(li)
  }
    
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
    
  const close = document.getElementsByClassName("close");

  // J'arrive pas à faire un foreach ou même une fonction flechée click
  // sûrement prsq getElementsByClassName renvoie un tableau jcp
    
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
})

