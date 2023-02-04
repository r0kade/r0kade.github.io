// bar
let bar = create({
  type: 'div',
  class: 'w3-bar w3-white'
})

bar.appendChild(create({
  type: 'a',
  class: 'w3-bar-item w3-button w3-hover-gray',
  href: 'album.html',
  content: 'albums'
}))

bar.appendChild(create({
  type: 'a',
  class: 'w3-bar-item w3-button w3-hover-gray',
  href: 'updates.html',
  content: 'updates'
}))


let elements = [
  create({
    type: 'h1',
    content: 'Rokade'
  }),
  create({type:'p'}),
  bar,
  create({
    type: 'p',
    content: 'Hello! I\'m Rokade. I\'m a music composer/producer from Indonesia. I usually make chiptune music, but I also like trying out new genres sometimes. I never release singles or EPs, all of my releases are 12 track albums.'
  })
]

link('stylesheet', 'css/main.css')
appendAll(elements)