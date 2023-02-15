const NEW_ALBUM_PROGRESS = 7/12
link('stylesheet', 'css/main.css')
appendAll([
  create({
    type: 'h1',
    content: 'Rokade'
  }),
  create({type:'p'}),
  create({
    type: 'div',
    class: 'w3-bar w3-white',
    children: [
      create({
        type: 'a',
        class: 'w3-bar-item w3-white w3-button w3-hover-dark-gray',
        href: 'albums',
        content: 'albums'
      }),
      create({
        type: 'a',
        class: 'w3-bar-item w3-white w3-button w3-hover-dark-gray',
        href: 'updates.html',
        content: 'updates'
      }),
      create({
        type: 'a',
        class: 'w3-bar-item w3-white w3-button w3-hover-dark-gray',
        href: 'visual-art.html',
        content: 'visual art'
      })
    ]
  }),
  create({
    type: 'p',
    content: 'Hello! I\'m Rokade. I\'m a music composer/producer from Indonesia. I usually make chiptune music, but I also like trying out new genres sometimes. I never release singles or EPs, I only release 12 track albums. My music is licensed CC BY 4.0'
  }),
  br, br,
  create({
    type: 'p',
    class: 'w3-text-gray',
    content: 'by the way, Rokade means Castling in Indonesian.'
  }),
  hr,
  create({
    type: 'h1',
    content: 'New Album Progress'
  }),
  create({
    type: 'div',
    class: 'w3-dark-gray',
    children: [
      create({
        type: 'div',
        class: 'w3-white w3-container',
        style: `height:24px;width:${NEW_ALBUM_PROGRESS*100}%`,
        content: `${Math.round(NEW_ALBUM_PROGRESS*100)}%`
      })
    ]
  }),
  br,br,br,br,br,br,br,br,
])