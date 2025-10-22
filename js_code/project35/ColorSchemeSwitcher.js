const boxes=document.querySelectorAll('.box');

boxes.forEach((b)=>{
b.addEventListener('click',()=>{
    document.body.style.backgroundColor=b.id;
});
});