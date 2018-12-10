
const butt = document.getElementById('testButton');
const input = document.getElementById('testInput')

butt.addEventListener('click', () => {
    console.log(input.value);
    // post route -todo/create
    fetch('/todo/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todoItem: input.value })
    })
        .then(item => item.json())
        .then(item => {
            console.log('item', item)
            let items = Object.values(item);
            items = items[0];
            console.log(items)
        })


})

butt.addEventListener('click', () => {
    console.log(document.querySelectorAll('li'))
})

// Button to change background color 

const btn = document.createElement('button');
btn.setAttribute('id', 'test-btn');
btn.innerText = 'Change color'

document.body.appendChild(btn);

// btn.addEventListener('click', () => {
//     const color = document.getElementsByTagName('body');

//     color.style.backgroundColor = organge;
//     // if (body.style.backgroundColor === pink) {
//     //     body.style.backgroundColor = orange;
//     // } else {
//     //     body.style.backgroundColor = pink
//     // }
// });

// adding a id to body tag


