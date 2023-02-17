/** row generator **/
(() => {
  let row = create({
    type: 'div',
    class: 'w3-row w3-black'
  })
  row.appendChild(create({
    type: 'div',
    class: 'w3-col m2 l3 w3-container',
  }))
  let maincol = create({
    type: 'div',
    class: 'w3-col m8 l6 w3-container'
  })
  maincol.appendChild(create({
    type: 'div',
    class: 'w3-container',
    id: 'main',
  }))
  row.appendChild(maincol)
  row.appendChild(create({
    type: 'div',
    class: 'w3-col m2 l3 w3-container'
  }))
  display([row])
  document.getElementsByTagName('head')[0].appendChild(create({
    type: 'title',
    content: 'Rokade',
    id: 'title'
  }))
})()
let main = document.getElementById('main')
let appendAll = docs => {
    for(let i = 0;i<docs.length;i++){
        main.appendChild(docs[i])
    }
}
let changeTitle = title => document.getElementById('title').innerText += ` // ${title}`
link('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/w3-css/4.1.0/w3.css')
let script = src => document.body.appendChild(create({
  type: 'script',
  src: src
}))