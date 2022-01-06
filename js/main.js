console.log('main');

const addNoteBtn = document.querySelector('.btn');
const data = document.querySelector('#current_data');
a = new Date();
data.value = `${a.getFullYear()}-0${a.getDate()}-0${a.getDate()}`;

//'2017-06-01'

console.log(a);

let name = '',
    category,
    content = '',
    dates;

function showRes(){
    console.log(name);
    console.log(content);
    console.log(dates);
    console.log(category);
}


function getDynamicInformation(selector){

    const input = document.querySelector(selector);

    input.addEventListener('input', () =>{

        // if(input.value.match(/\D/g)){
        //     input.style.border = "2px solid red";
        // } else {
        //     input.style.border = "none";
        // }

        switch(input.getAttribute('id')){
            case 'name':
                name = input.value;
                break;
            case 'content':
                content = input.value;
                break;
            case 'dates':
                dates = input.value;
                break;
            case 'categories':
                category = input.value;
                break;
            // case 'current data':
            //     input.value = new Date();
            //     break;
        }
        showRes()
    });
}

getDynamicInformation('#name');
getDynamicInformation('#content');
getDynamicInformation('#dates');
getDynamicInformation('#categories');

//name,content,dates, category, data

function createNote(){
    const noteDiv = document.querySelector('.notes');

    const note = document.createElement('div');

    note.textContent =
        `<div class="notesList">
            <div class="name">${name}</div>
    
    
            <div class="created">${data.value}</div>
        
        
            <div class="category">${category}</div>
        
        
            <div class="content">${content}</div>
        
        
            <div class="dates">${dates}</div>
        
        
            <div class="options"> Options</div>
        </div>
    `

    noteDiv.append(note);
}

addNoteBtn.addEventListener('click' , createNote);
