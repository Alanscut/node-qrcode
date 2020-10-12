const fs = require('fs')
// const Readable = require('stream').Readable
const svgTagRenderer = require('./svg-tag')
// const fnNoop = function () {}

exports.render = svgTagRenderer.render

exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  const ws = fs.createWriteStream(path)
  ws.on('error', cb)
  ws.on('close', cb)

  exports.renderToFileStream(ws, qrData, options)
}

exports.renderToFileStream = function renderToFileStream (stream, qrData, options) {
  // const rs = new Readable()
  // rs._read = fnNoop

  // const xmlStr = '<?xml version="1.0" encoding="utf-8"?>' +
  //  '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'
  // rs.push(xmlStr)

  const rs = exports.render(qrData, options)
  rs.pipe(stream)
}
