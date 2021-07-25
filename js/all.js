let one = document.querySelector('.one');
let two = document.querySelector('.two');
let NavClick = document.querySelector('.click')
let menu =document.querySelector('.Ph')
//觸發反應及觸發點
menu.style.width = innerWidth+"px";
window.onresize = function(){
    menu.style.width = innerWidth+"px";
}


NavClick.addEventListener('click',menuClick,false);

function menuClick(e){
    if(e.target.className=='click'||e.target.className=="two"||e.target.className=="one"){
        NavClick.setAttribute("class","clickB")
        two.setAttribute("class","twoC");
        one.setAttribute("class","oneC");
        menu.setAttribute("class","PhNone")
        // 選單展開
    }else{
        NavClick.setAttribute("class","click")
        two.setAttribute("class","two");
        one.setAttribute("class","one");
        menu.setAttribute("class","Ph")
        // 選單收合
    }
   
    console.log(e.target.className)
    // one.classList.add('oneC')
    // two.classList.add('twoC')
    console.log('觸發成功')
}