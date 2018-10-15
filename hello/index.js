require('http').createServer((req, res) => {
  res.write('hello, xiange')
  res.end()
}).listen(80)
