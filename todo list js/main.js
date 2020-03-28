// function {
//     var name = promt('Enter your Name')
// }


const name = document.querySelector('input')
const proceed = document.querySelector('button')
const uolist = document.querySelector('ul')
const mains = document.querySelector('h2')





proceed.onclick = function() {
    let names = name.value

    if (names !== '') {
        console.log(names)
        const inputva = document.querySelector('input')
        inputval = inputva

        proceed.textContent = 'add'
        name.value = ''
        console.log(inputval)
        mains.textContent = names

        proceed.onclick = function() {

            // creating list item
            const list = document.createElement('li')

            // creating checkbox
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.setAttribute('class', 'box')

            // creating label item 
            const work = document.createElement('span')

            // creating remove button
            const remove = document.createElement('button')
            remove.textContent = 'remove'

            remove.setAttribute('class', 'rmvbtn')



            list.appendChild(checkbox)
            list.appendChild(work)
            work.textContent = inputval.value;
            // console.log(work)
            list.appendChild(remove)
            uolist.appendChild(list)
            inputva.value = ''





            remove.onclick = function() {
                list.remove(list)
            }
        }



    } else {
        console.log('Name is important')
    }





}