const divBox = document.querySelector('.div1');
const divBox2 = document.querySelector('.div2');
const divBox3 = document.querySelector('#d1')
console.log(document.getElementById("d"));

sessionStorage.setItem("total",0);
let tableOneTotal=0;
let tableItemsTotal =0;
//divBox
divBox.addEventListener("dragstart",(e) => {
      e.dataTransfer.setData('text/plain', e.target.id);
      console.log("Drag start fired");
});
divBox.addEventListener("dragend",() => {
    // e.dataTransfer.setData('text/plain', e.target.id);
       console.log("Dragend fired");
});

//divBox1
divBox3.addEventListener("dragstart",(e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log("Drag start fired");
});
divBox3.addEventListener("dragend",() => {
  // e.dataTransfer.setData('text/plain', e.target.id);
     console.log("Dragend fired");
});

//divBox2
divBox2.addEventListener("dragover",(e) => {
       divBox2.style.backgroundColor = "red"
       e.preventDefault();
       console.log("dragover triggered");
})

divBox2.addEventListener("dragenter",(e) => {
        // divBox2.style.backgroundColor = "red"
        e.preventDefault();
        console.log("dragEnter triggered");

})

divBox2.addEventListener("dragleave",() => {
       divBox2.style.backgroundColor = "";
        console.log("dragleave triggered");
  
})

divBox2.addEventListener("drop",(e) => {
         console.log("dropped");
         divBox2.style.backgroundColor = "";
         console.log(e);
        const id = e.dataTransfer.getData('text');
        
        const dr = document.getElementById(id);
        // t += Number(sessionStorage.getItem("total"));
        tableOneTotal+=Number(dr.textContent)
        if(!sessionStorage.setItem("total",tableOneTotal) && sessionStorage.getItem(id)==null){
                sessionStorage.setItem(id,1);
                tableItemsTotal++;
                console.log(tableItemsTotal);
        }
        
        console.log(dr.textContent);
        // const total = Number(sessionStorage.getItem("total"))
        divBox2.textContent = "items:"+tableItemsTotal+" | "+"total:"+sessionStorage.getItem("total");
})

window.onload = () =>
{
    sessionStorage.clear()
}