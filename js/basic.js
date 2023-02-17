/** arrays n stuff */
// format: title, description, link, release date, color
const ALBUMS = [
  // december chip sketches 
  'December Chip Sketches', 'My first album.', 
  'december-chip-sketches.html', 'December 30, 2022',
  'pink'/*,
  // the london system
  'The London System', 'My favorite chess opening.',
  'the-london-system.html', '-',
  'yellow'*/
]
// format: name, link
const SOCIALS = [
  'YouTube', 'youtube.com/@r0kade',
  'Bandcamp', 'rokade.bandcamp.com',
  'GitHub', 'github.com/r0kade'
]
let ok = 'ok'
let bodyS = document.body.style
let log = message => console.log(message)
let warn = message => console.warn(message)
let create = data => {
    if(!data.type) data.type = 'where-type'
    let doc = document.createElement(data.type)
    if(data.content){
        let text = document.createTextNode(data.content)
        doc.appendChild(text)
    } 
    if(data.style) doc.setAttribute('style', data.style)
    if(data.class) doc.setAttribute('class', data.class)
    if(data.src) doc.setAttribute('src', data.src)
    if(data.align) doc.setAttribute('align', data.align)
    if(data.id) doc.setAttribute('id', data.id)
    if(data.download) doc.setAttribute('download', '')
    if(data.rel) doc.setAttribute('rel', data.rel)
    if(data.href) doc.setAttribute('href', data.href)
    if(data.children) for(child of data.children) {
      doc.appendChild(child)
    }
    return doc
}
let link = (rel, href) => {
    document.getElementsByTagName('head')[0].appendChild(create({
        type: 'link',
        rel: rel,
        href: href
    }))
}
let createDiv = data => {
    let temp = {
        type: 'div'
    }
    return create(Object.assign(temp, data))
}
let br = create({type:'br'})
let hr = create({type:'hr'})
let display = docs => {
    for(let i = 0;i<docs.length;i++){
        document.body.appendChild(docs[i])
    }
}
let back = link => createDiv({
  children: [
    hr,
    create({
      type: 'a',
      class: 'w3-text-gray',
      content: 'main page',
      href: link
    })
  ]
})
log(ok)