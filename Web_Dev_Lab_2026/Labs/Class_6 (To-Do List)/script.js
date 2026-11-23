let titleElement=document.getElementById("title");
let descriptionElement=document.getElementById("description");
let dateElement=document.getElementById("date");

let addTodoElement=document.getElementById("addTodo");

let todoList=[];

addTodoBtnElement.addEventListener('click',function(){
    let title=titleElement.value;
    let description=descriptionElement.value;
    let date=titleElement.value;

    if (!title || !description || !date)
    {
        alert("Enter all values");
        return;
    }
    todoList.push({
        title,
        description,
        date
    });
    titleElement.value="";
    descriptionElement.value="";
    dateElement.value="";
    renderElement
});

let listTodoElemt=document.getElementById("listTodo");
let listFragmentElement=document.createDocumentFragment();

function renderElement()
{
    for (let i=0;i<todoList.length;i++)
    {
        let displayTitle=todoList[i].title;
        let displayDescription=todoList[i].description;
        let displayDate=todoList[i].date;
        
        let divElement=document.createElement("div");
        let titleParaElement=document.createElement("p");
        let descriptionParaElement=document.createElement("p");
        let dateParaElement=document.createElement("p");

        titleParaElement.textContent=displayTitle;
        descriptionParaElement.textContent=displayDescription;
        dateParaElement.textContent=displayDate;

        let removeBtnElement=document.createElement("button");
        removeBtnElement.textContent="remove";

        removeBtnElement.addEventListener('click',function(){
        });

        divElement.append(titleParaElement,descriptionParaElement,dateParaElement,removeBtnElement);
        listFragmentElement.appendChild(divElement);
    }
    listTodoElemt.append(listFragmentElement);
}