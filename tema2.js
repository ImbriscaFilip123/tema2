const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".addBtn");
const friendsList = document.querySelector(".addFriend-content");
const editBtns = document.querySelectorAll(".edit");
const hideBtn = document.querySelector(".hideCheckbox");
const cards = document.querySelectorAll(".card");


hideBtn.addEventListener("click", () => {


    cards.forEach((card) => {

       if(!card.classList.contains("checked")){
        card.classList.toggle("dnone");
       }

    })
})





addBtn.addEventListener("click", () => {

    let text = addInput.value;
    
    if(text){

        friendsList.appendChild(addItem(text));

    }
})

function addItem(item){

    let newItem = document.createElement("div");
    newItem.classList.add("card");
  
    newItem.innerHTML = ` <h2>${item}</h2>
                     <div>
                         <label for="checkbox">Coming</label>
                         <input type="checkbox" class="checkbox">
                     </div>
                     <button class="edit">Edit</button>
                     <button class="remove">Remove</button>`
   

     console.log(newItem);

    return newItem;
}


friendsList.addEventListener("click", (event) => {

    let object = event.target;

    
    if(object.classList.contains("edit")){
        
        let card = object.parentNode;
        
        let cardName = card.firstElementChild.textContent;
        
        card.innerHTML =  ` <input value="${cardName}" class="editInput">
        <div>
            <label for="checkbox">Coming</label>
            <input type="checkbox" class="checkbox">
        </div>
        <button class="save">save</button>
        <button class="remove">Remove</button>`
        
        
    }
    else if(object.classList.contains("save")){

        let card = object.parentNode;

        let cardName = card.firstElementChild.value;

        card.innerHTML =  ` <h2>${cardName}</h2>
                     <div>
                         <label for="checkbox">Coming</label>
                         <input type="checkbox" class="checkbox">
                     </div>
                     <button class="edit">Edit</button>
                     <button class="remove">Remove</button>`     
    }

    else if(object.classList.contains("remove")){

        object.parentNode.style.display = "none";
    }

    else if(object.classList.contains("checkbox")){

         object.parentNode.parentNode.classList.add("checked");

    }
})