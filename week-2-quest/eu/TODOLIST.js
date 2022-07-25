const input = document.getElementById('input');
const list = document.getElementById('list');
function todolist(){
    const createlist = document.createElement('li');
    createlist.innerHTML = `<span class="checkbox"><input type="checkbox"><input class="add" value = '${input.value}' type="text" width="450px"></input></span>`;
    createlist.innerHTML += `<span><input class="edit" type="button"  value="수정" onclick="readOnlyFalse(this)"><input class="save" type="button" value="저장" onclick="readOnlyTrue(this);"></span>`;

    list.appendChild(createlist);

    if(input.value===''){
        alert('할 일을 입력하세요.')
    }else{
        input.value='';
    }
}

function readOnlyFalse(e){
    e.parentNode.previousSibling.lastChild.readOnly=false;
}

function readOnlyTrue(e){
    e.parentNode.previousSibling.lastChild.readOnly=true;
}


function selectall(){
    const checkboxes = document.getElementsByName('checkbox'); 
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == false){
            checkboxes[i].checked = true;
        }
    }
}
    

function deselect(){
    const checkboxes = document.getElementsByName('checkbox');  
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            checkboxes[i].checked = false;
        }
    }
}

function seldelete(){
    const checkboxes = document.getElementsByName('checkbox');  
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked == true){
            checkboxes[i].parentElement.parentElement.remove();

        }
    }
}




