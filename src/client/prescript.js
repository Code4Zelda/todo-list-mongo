window.onload = () => {

    const div = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');

    button.setAttribute('id', 'testButton');
    button.innerText = 'Test';

    div.appendChild(input);
    div.appendChild(button);

    document.body.appendChild(div);

    fetch('/todo/all')
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(items => {
            items = Object.values(items);
            items = items[0];
            const orderedList = document.createElement('ol');
            items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerText = item.toDoItem;
                return orderedList.appendChild(listItem);
            })

        })

    document.body.appendChild(orderedList)

};
