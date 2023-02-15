changeTitle('404')
link('stylesheet', 'https://cdnjs.cloudflare.com/ajax/libs/w3-css/4.1.0/w3.css')
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
      }), br,br,br,br,br,br,br,hr,
      create({
        type: 'p',
        class: 'w3-text-gray',
        children: [
          create({
            type: 'a',
            href: 'index.html',
            content: 'main page'
          })]
      })]
  })
])