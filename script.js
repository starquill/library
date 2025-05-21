const library=[];
const addButton=document.querySelector(".add");
const titleInput=document.querySelector("#title");
const authorInput=document.querySelector("#author");
const pagesInput=document.querySelector("#pages");
const readInput=document.querySelector("#read");
const popup=document.querySelector(".box");
const submitButton=document.querySelector("#submit");
const makecard=document.querySelector(".makeCard");

function Book(title,author,pages,read){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
function addBookToLibrary(title,author,pages,read){
let newBook= new Book(title,author,pages,read);
library.push(newBook);
makeCard(newBook);
}

function makeCard(newBook){
    const card=document.createElement("div");
    const title=document.createElement("div");
    const author=document.createElement("div");
    const pages=document.createElement("div");
    const checked=document.createElement("input");
    checked.type="checkbox";
    checked.disabled=true;
    title.textContent=`Title: ${newBook.title}`;    
    author.textContent=`Author: ${newBook.author}`;  
    pages.textContent=`Pages: ${newBook.pages}`;  
    checked.checked=newBook.read;  
    card.append(title,author,pages,checked);
    card.classList.add("card");
    makecard.appendChild(card);

}

addButton.addEventListener("click",()=>{
    popup.style.display="flex";
})

submitButton.addEventListener("click",()=>{
    popup.style.display="none";
    addBookToLibrary(titleInput.value,authorInput.value,pagesInput.value,readInput.checked);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
})



