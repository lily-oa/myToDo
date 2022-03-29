// localStorage.clear();
const list = document.querySelector('.list');   //ul
const sendData = document.querySelector('.send');  //送出鈕
const textValue = document.querySelector('.text'); //輸入欄位
const reset = document.querySelector('.reset'); // 重新設定鈕
const data = JSON.parse(localStorage.getItem('listData')) || []; //data是陣列的名字


sendData.addEventListener('click', addData);
list.addEventListener('click', deleteData);
reset.addEventListener('click', cleanAllData);
updateList(data);


//新增
function addData(e){
  e.preventDefault();
  const txt = textValue.value;
  if(txt==''){
    alert('你忘了輸入內容了喔!');
    return;
  }
  const todo = {
    content: txt,
  }
  data.push(todo);
  localStorage.setItem('listData', JSON.stringify(data));
  textValue.value = '';
  updateList(data);
}

//更新
function updateList(data){
  let str = '';
  const len = data.length;
  for(let i=0; i<len; i++){
    str += `<li><a href="#" data-index="${i}" class="me-2">刪除</a><span class="wordColor">${data[i].content}</span></li>`;
  }
  list.innerHTML = str;
  
}

//刪除
function deleteData(e){
  e.preventDefault;
  if(e.target.nodeName !== "A"){return;}
  const index = e.target.dataset.index;
  data.splice(index, 1);
  localStorage.setItem('listData', JSON.stringify(data));
  updateList(data);
}

// 重新設定 為了清空 localStorage 以及重新渲染畫面
function cleanAllData(){
  const data = [];
  localStorage.setItem('listData', JSON.stringify(data));
  updateList(data);
  // localStorage.clear();     //清除localStorage 裡的所有資料
  // window.location.reload();  //重新刷新頁面
}
