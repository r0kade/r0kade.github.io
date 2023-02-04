(() => {
  // generate rows
  let row = create({
    type: 'div',
    class: 'w3-row w3-black'
  })
  
  row.appendChild(create({
    type: 'div',
    class: 'w3-col l2 w3-container',
  }))
  
  let maincol = create({
    type: 'div',
    class: 'w3-col l8 w3-container'
  })
  
  maincol.appendChild(create({
    type: 'div',
    class: 'w3-container',
    id: 'main'
  }))
  
  row.appendChild(maincol)
  
  row.appendChild(create({
    type: 'div',
    class: 'w3-col l2 w3-container'
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