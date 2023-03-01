link('stylesheet', 'css/main.css')
link('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.css')
fav('img/')
appendAll([
  c('div', {
    style: 'text-align: center;margin: 18px 0 0 0;',
    children: [ 
      c('img', {
        src: 'img/favicon.png',
        style: 'width:200px;height:auto;',
      }),
      c('h1', {
        text: 'This page is still under construction.'
      })
    ]
  })
])
for (let i = 0; i < SOCIALS.length; i += 2) {
  document.getElementById('socials').appendChild(create({
    type: 'a',
    href: `https://${SOCIALS[i+1]}`,
    style: 'font-size:25px;',
    class: `w3-bar-item w3-button w3-hover-dark-gray w3-text-dark-gray fa-brands fa-${SOCIALS[i].toLowerCase()}`
  }))
}