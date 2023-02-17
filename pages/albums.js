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