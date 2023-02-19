const inp = document.querySelector('.input')
const nameIn = document.querySelector('.name')
const submitBtn = document.querySelector('.btnSmb')
const clearBtn = document.querySelector('.btmClr')
const gender = document.querySelector('.gender')

const arr = []
const genderPicUrl = [
    {gender: 1, url: 'https://cdn-icons-png.flaticon.com/512/74/74540.png'},
    {gender: 2, url: 'https://e7.pngegg.com/pngimages/278/881/png-clipart-gender-symbol-female-symbol-miscellaneous-cdr-thumbnail.png'},
    {gender: 3, url: 'https://static.thenounproject.com/png/1629805-200.png'}
]
submitBtn.addEventListener('click', () => {
    if (inp.value == ''){
        return
    } else if( gender.value == 1){
        arr.push( {name: inp.value, url: genderPicUrl[0].url }); 
        render(gender.value)
        return
    } else if( gender.value == 2){
        arr.push( {name: inp.value, url: genderPicUrl[1].url }); 
        render(gender.value)
        return
    } else {
        arr.push( {name: inp.value, url: genderPicUrl[2].url }); 
        render(gender.value)
        return
    } 
})

clearBtn.addEventListener('click', () => {
    arr.splice(0)
    nameIn.innerHTML = '';
})

const render = () => {
    const html = arr.map((item)  => {
        html1 = `<div class="tabl">${item.name}</div><img src="${item.url}">`
        return html1;
    })
    nameIn.innerHTML = html.join('');
}

