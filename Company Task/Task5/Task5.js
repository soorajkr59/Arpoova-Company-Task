
let input=document.getElementById("inputid");
let btn=document.getElementById("btnid");
let ullist=document.getElementById("ulid");

function Item()
{
    let inputdata=input.value;
    
    let li=document.createElement("li");
   
    let span=document.createElement('span');
    li.appendChild(span);

    span.innerText=inputdata;

    
    ullist.appendChild(li);
    
    inputdata.value="";

    let Trash=document.createElement('i');
    console.log(Trash);
    
    Trash.classList.add("fas", "fa-trash");
    li.appendChild(Trash);


    let editbtn=document.createElement('i');
    console.log(editbtn);
    editbtn.classList.add("fas", "fa-edit");
    li.appendChild(editbtn);

    document.getElementById("inputid").value="";

}
function Delete(event)
{
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        item.remove();
    }
}
    function Editbtn(event)
    
    {
        if(event.target.classList[1] === "fa-edit")
        {
            let editvalue=prompt("please enter new item");
            let Additem=event.target.parentElement;
           
            let spanE1=Additem.querySelector('span');
            spanE1.innerText = editvalue;
        }
    }


btn.addEventListener("click",Item);
ullist.addEventListener("click",Delete);
ullist.addEventListener("click",Editbtn);