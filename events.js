function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
//blue background in js setting name function
const btn = document.getElementById('bg-blue');
btn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
//anonymous function
const orangeBtn = document.getElementById('bg-orange');
    orangeBtn.onclick = function (){
        document.body.style.backgroundColor = 'orange';
    }

// usin addEventListener
const goldenBtn = document.getElementById('bg-goldenrod');
    goldenBtn.addEventListener('click', goldenRod);
    function goldenRod(){
        document.body.style.backgroundColor = 'goldenrod';
    }

//
const pinkBtn = document.getElementById('bg-pink');
    pinkBtn.addEventListener('click', function (){
        document.body.style.backgroundColor = 'hotpink';
    });

//direct using id
document.getElementById('bg-lightBlue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})
    
  //fucntion handler
function show(){
    const showPara = document.getElementById('paragraph');
    showPara.innerText = 'lorem ipsum';
}

    //direct event handler
    document.getElementById('update-text').addEventListener('click', function(){
        const inpt = document.getElementById('input-text');
        const p = document.getElementById('para');
        p.innerText = inpt.value;
        inpt.value = '';

    })

//add comment event handler
document.getElementById('submit-comment').addEventListener('click', function(){
    //get user comment
    const comment = document.getElementById('comment-area');
    const userComment = comment.value;
    //create comment paragraph
    const newPara = document.createElement('p');
    newPara.innerText = userComment;
    //append comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newPara);
    comment.value = '';
})

//hide
document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('secret-info').style.display = 'none';
})
//focus
const deleteField3 = document.getElementById('delete-confirm');
deleteField3.addEventListener('focus', function(){
    document.body.style.backgroundColor = 'pink';
})
//blur
const deleteField4 = document.getElementById('delete-confirm');
deleteField4.addEventListener('blur', function(){
    document.body.style.backgroundColor = '#CCCCFF';
})
//keyup
const deleteField = document.getElementById('delete-confirm');
deleteField.addEventListener('keyup', function(event){
    if(event.target.value === 'delete'){
        document.getElementById('delete-btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('delete-btn').setAttribute('disabled', true);
    }
})

//change
const deleteField1 = document.getElementById('delete-confirm');
deleteField1.addEventListener('change', function(){
    console.log(deleteField1.value);
})

