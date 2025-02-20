const div_Global = document.querySelector('#contentGlobal')
const ipt_Item = document.querySelector('#item-input');
const btn_add_item = document.querySelector('#btnAdd');
btn_add_item.addEventListener('click', addItemFunction)
const btn_deleteItem = document.getElementById('item-list');
btn_deleteItem.addEventListener('click',quitar_Item)
const btn_deleteAll = document.getElementById('clear');
btn_deleteAll.addEventListener('click',deleteAll);
const iptFilter = document.getElementById('filter');
iptFilter.addEventListener('input',filtrarItems )

var AllItemsList = []    

function addItemFunction(e){
    AllItemsList.push(ipt_Item.value)
    OcultarItems()
    btn_deleteItem.innerHTML = ""
    AllItemsList.forEach(element => {
      btn_deleteItem.innerHTML += `
        <li>
          ${element}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>`
      
    });
  
    ipt_Item.value = ""
}

function quitar_Item(e){

  if ( e.srcElement.classList.value == "fa-solid fa-xmark"){
    btn_deleteItem.removeChild(e.target.parentElement.parentElement)
  }
  AllItemsList.pop()
  OcultarItems()
}
function deleteAll(e){
  btn_deleteItem.innerHTML = "";
  AllItemsList = []   
  OcultarItems()
  

}

function filtrarItems(e){
  console.log(AllItemsList)
  // console.log()
  const arraFilger = AllItemsList.filter(item => item.toLowerCase().includes(iptFilter.value.toLowerCase()) )
  console.log(arraFilger)
  btn_deleteItem.innerHTML = ""
  arraFilger.forEach(element => {
    btn_deleteItem.innerHTML += `
      <li>
        ${element}
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>`
    
  });
  if (iptFilter.value == ""){
    btn_deleteItem.innerHTML = ""
    AllItemsList.forEach(element => {
      btn_deleteItem.innerHTML += `
        <li>
          ${element}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>`
      
    });
  }
  
 

}
function OcultarItems(e){
  if (AllItemsList.length == 0){
    btn_deleteAll.style.visibility = "hidden"
    iptFilter.style.visibility = "hidden"
    btn_deleteItem.style.visibility = "hidden"
  }else{

    btn_deleteAll.style.visibility = "visible"
    iptFilter.style.visibility = "visible"
    btn_deleteItem.style.visibility = "visible"
  }

}

