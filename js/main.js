let $ = document;
let section = $.querySelector('.section');
let inputText = $.querySelector('.input-text');
let btn = $.querySelector('.button');

loadEventListeners();

//Load all event listeners
function loadEventListeners() {

    // Add task
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        //Create li element
        const newTask = $.createElement('li');
        newTask.classList = 'item';

        //Create childern li: div.item-information
        const divInformation = $.createElement('div');
        divInformation.classList = 'item-information';

        //Create childern div.item-information: input and p.item-text

        //input
        const inputCheckBox = $.createElement("input");
        inputCheckBox.setAttribute('type', 'checkbox');

        //div.item-text
        const itemText = $.createElement('p');
        itemText.classList = 'item-text';
        itemText.appendChild($.createTextNode(inputText.value));

        divInformation.appendChild(inputCheckBox);
        divInformation.appendChild(itemText);




        //Create childern li: div.item-icons
        const divIcon = $.createElement('div');
        divIcon.classList = 'item-icons';

        //Create childern div.item-icons: icon

        //icon
        const icon = $.createElement('i')
        icon.classList = 'bx bxs-trash'

        divIcon.appendChild(icon)


        newTask.appendChild(divInformation);
        newTask.appendChild(divIcon);

        //Add newTask to ul 
        if (inputText.value === '') {
            alert('please add task')
        } else {
            section.appendChild(newTask)
        }

        //Clear input
        inputText.value = ''


    })


    //Remov task
    section.addEventListener('click', function (e) {
        if (e.target.parentElement.classList.contains('item-icons')) {
            e.target.parentElement.parentElement.remove()
        }
    })





    //Uncompelet task
    section.addEventListener('click', function (e) {
        if (e.target.parentElement.classList.contains('item-information')) {
           
            if (e.target.attributes.type.ownerElement.checked) {

                e.target.nextElementSibling.classList = 'item-text uncompleted'

            } 
            else {

                e.target.nextElementSibling.classList = 'item-text'

            }

        }
    })


}