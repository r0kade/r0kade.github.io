changeTitle('Albums')
link('stylesheet', '../css/main.css')
// format: title, description, link, release date, color
const albums = [
  // december chip sketches 
  'December Chip Sketches', 'My first album.', 
  'december-chip-sketches.html', 'December 30, 2022',
  'pink'/*,
  // new albums go here
  // |
  // v
  'The London System', 'My favorite chess opening.',
  'the-london-system.html', '-',
  'yellow'*/
]
appendAll([
    create({
      type: 'h1',
      content: 'Albums'
    }),
    create({
      type: 'p',
      class: 'w3-text-gray',
      content: `I should've named this page as "Discography" instead of "Albums" but since all of my releases are albums (no singles, EPs), I think the name "Albums" is more relevant for this page.`,
      children: [
        create({
          type: 'p',
          class: 'w3-text-white',
          content: `Here you can see links to my albums. All of my albums will be listed here.`})
        ]
    }),
    // ||
    // vv new albums go here
    createDiv({
      id: 'albums'
    })
])

for(let i = 0;i<albums.length;i+=5){
  document.getElementById('albums').appendChild(createDiv({
    class: `w3-container w3-${albums[i+4]}`,
    children: [
      create({
        type: 'a',
        class: `w3-button w3-container w3-block w3-${albums[i+4]} w3-left-align`,
        children: [
          create({
            type: 'h1',
            content: albums[i]
          }),
          create({
            type: 'p',
            content: albums[i+1]
          }),
          create({
            type: 'p',
            content: `released ${albums[i+3]}`
          })
        ],
        href: albums[i+2]
      })
    ]
  }))
}