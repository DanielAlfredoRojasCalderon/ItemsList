const btn_add_item = document.querySelector("#btnAdd");
btn_add_item.addEventListener('click', addItemFunction)
const btn_deleteItem = document.querySelector('#item-list');
btn_deleteItem.addEventListener('click',quitar_Item)
const btn_deleteAll = document.querySelector('#clear');
btn_deleteAll.addEventListener('click',deleteAll)
var AllItemsList = []



function addItemFunction(e){
    const Item_fathers = document.querySelector('#item-list');
    const ipt_Item = document.querySelector('#item-input');
    const add_ItemHtml = document.createElement('li');
    add_ItemHtml.innerHTML = `
          <p>${ipt_Item.value}</p>
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
    `
    Item_fathers.appendChild(add_ItemHtml)
    ipt_Item.value = ""


}

function quitar_Item(e){

  if ( e.srcElement.classList.value == "fa-solid fa-xmark"){
    btn_deleteItem.removeChild(e.target.parentElement.parentElement)
  }
}
function deleteAll(e){
  btn_deleteItem.innerHTML =``
  // console.log(btn_deleteItem.children[0].textContent)

  
  

}