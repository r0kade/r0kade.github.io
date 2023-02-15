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
      content: `I should've named this page as "Discography" instead of "Albums" but since all of my releases are albums (no singles, EPs), I think the name "Albums" is more relevant for this page.`,
      children: [
        create({
          type: 'p',
          class: 'w3-text-white',
          content: `Here you can see links to my albums. All of my albums will be listed here.`})
        ]
    }),
    // ^^ new album goes here
    
    createDiv({
      class: 'w3-container w3-pink',
      children: [
        // todo make a generator for this element...
        //    |
        //    |
        //    v
        create({
          type: 'a',
          class: 'w3-button w3-container w3-block w3-pink w3-left-align',
          children: [
            create({
              type: 'h1',
              content: 'December Chip Sketches'
            }),
            create({
              type: 'p',
              content: 'My first album.'
            }), hr,
            create({
              type: 'p',
              content: 'released December 30th, 2022'
            })
          ],
          href: 'december-chip-sketches.html'
        })
      ]
    })
])