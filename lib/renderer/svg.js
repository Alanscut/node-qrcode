const svgTagRenderer = require('./svg-tag')

exports.render = function render (qrData, options, cb) {
  const svgTag = svgTagRenderer.render(qrData, options, cb)
  const svg = '<?xml version="1.0" encoding="utf-8"?>' +
    '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
    svgTag
  return svg;
}

exports.renderToFile = function renderToFile (path, qrData, options, cb) {
  if (typeof cb === 'undefined') {
    cb = options
    options = undefined
  }

  const fs = require('fs')
  const svg = exports.render(qrData, options)

  fs.writeFile(path, svg, cb)
}
