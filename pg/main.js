const indexPage = () => {
  const NEW_ALBUM_PROGRESS = 7/12
link('stylesheet', 'css/main.css')
link('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.css')
appendAll([
  create({
    type: 'h1',
    content: 'Rokade'
  }),
  create({type:'p'}),
  createDiv({
    class: 'w3-bar w3-white',
    id: 'socials'
  }),
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
for(let i = 0; i < SOCIALS.length; i+=2){
  document.getElementById('socials').appendChild(create({
    type: 'a',
    href: `https://${SOCIALS[i+1]}`,
    style: 'font-size:25px;',
    class: `w3-bar-item w3-button w3-hover-dark-gray w3-text-dark-gray fa-brands fa-${SOCIALS[i].toLowerCase()}`
  }))
}
}

const albumsPage = () => {
  changeTitle('Albums')
link('stylesheet', '../css/main.css')
appendAll([
    create({
      type: 'h1',
      content: 'Albums'
    }),
    create({
      type: 'p',
      class: 'w3-text-gray',
      content: `I should've named this page as "Discography" instead of "Albums" but since all of my releases are Albums (no singles, EPs), I think the name "Albums" is more relevant for this page.`,
      children: [
        create({
          type: 'p',
          class: 'w3-text-white',
          content: `Here you can see links to my albums. All of my albums will be listed here.`})
        ]
    }),
    createDiv({
      id: 'albums'
    }),
    back('../index.html')
])
for(let i = 0;i<ALBUMS.length;i+=5){
  document.getElementById('albums').appendChild(createDiv({
    class: `w3-container w3-${ALBUMS[i+4]}`,
    children: [
      create({
        type: 'a',
        class: `w3-button w3-container w3-block w3-${ALBUMS[i+4]} w3-left-align`,
        children: [
          create({
            type: 'h1',
            content: ALBUMS[i]
          }),
          create({
            type: 'p',
            content: ALBUMS[i+1]
          }),
          create({
            type: 'p',
            content: `released ${ALBUMS[i+3]}`
          })
        ],
        href: ALBUMS[i+2]
      })
    ]
  }))
}
}

const notFoundPage = () => {
  changeTitle('404')
  link('stylesheet', 'css/main.css')
  appendAll([
    createDiv({
      class: 'w3-text-red',
      children: [
        create({
          type: 'h1',
          content: '404 Not Found'
        }),
        create({
          type: 'p',
          content: 'The page you were looking for doesn\'t exist.'
        }), br, br, br, br, br, br, br,
        back('index.html')
      ]
    })
  ])
}