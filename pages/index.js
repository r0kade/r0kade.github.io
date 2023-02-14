const NEW_ALBUM_PROGRESS = '58%'

// bar
let bar = create({
  type: 'div',
  class: 'w3-bar w3-white'
})

bar.appendChild(create({
  type: 'a',
  class: 'w3-bar-item w3-button w3-hover-gray',
  href: 'albums.html',
  content: 'albums'
}))

bar.appendChild(create({
  type: 'a',
  class: 'w3-bar-item w3-button w3-hover-gray',
  href: 'updates.html',
  content: 'updates'
}))

// album progress bar
// html
// <div class="w3-light-grey">
//   <div class="w3-white" style="height:24px;width:50%">50%</div>
// </div>

let progressBase = create({
  type: 'div',
  class: 'w3-light-gray'
})

let progress = create({
  type: 'div',
  class: 'w3-white w3-container',
  style: `height:24px;width:${NEW_ALBUM_PROGRESS}`,
  content: `${NEW_ALBUM_PROGRESS}\n\n`
})

progressBase.appendChild(progress)
let elements = [
  create({
    type: 'h1',
    content: 'Rokade'
  }),
  create({type:'p'}),
  bar,
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
  progress,
  br,br,br,br,br,br,br,br
]

link('stylesheet', 'css/main.css')
appendAll(elements)