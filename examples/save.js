const fs = require('fs')
const QRCode = require('../lib')

const path = 'file/tmp.txt'
QRCode.toFile(path, 'life of the party bros', {
  color: {
    dark: '#00F', // Blue modules
    light: '#0000' // Transparent background
  },
  type: 'txt'
}, function (err) {
  if (err) throw err
  console.log('saved.')
})

const ws = fs.createWriteStream('stream/tmp.svg')
QRCode.toFileStream(ws, 'life of the party bros', {
  color: {
    dark: '#00F', // Blue modules
    light: '#0000' // Transparent background
  },
  type: 'svg'
}, function (err) {
  if (err) throw err
  console.log('saved.')
})

// ws = fs.createWriteStream('stream/tmp.txt')
// QRCode.toFileStream(ws, 'life of the party bros', {
//   color: {
//     dark: '#00F', // Blue modules
//     light: '#0000' // Transparent background
//   },
//   type: 'txt'
// }, function (err) {
//   if (err) throw err
//   console.log('saved.')
// })
