const inp = document.querySelector('.input')
const nameIn = document.querySelector('.name')
const submitBtn = document.querySelector('.btnSmb')
const clearBtn = document.querySelector('.btmClr')
const gender = document.querySelector('.gender')

const arr = []
const genderPicUrl = [
    {gender: 1, url: 'https://cdn-icons-png.flaticon.com/512/74/74540.png'}
]
submitBtn.addEventListener('click', () => {
    if (inp.value == ''){
        return
    } else if( gender.value == 1){
        render(gender.value)
        return
    } else {
        return
    }
})

clearBtn.addEventListener('click', () => {
    arr.splice(0)
    nameIn.innerHTML = '';
})

const render = (about) => {

    arr.push( {name: inp.value, male: about} );   
    const html = arr.map((item)  => {
        html1 = `<div class="tabl">${item.name}</div><img src="">`
        return html1;
    })
    nameIn.innerHTML = html.join('');
}

