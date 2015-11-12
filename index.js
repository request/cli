#!/usr/bin/env node

var minimist = require('minimist')
  , json = require('prettyjson')
var flags = require('./config/flags')

var argv = minimist(process.argv.slice(2))


if (argv.client) {
  request = require(argv.client)
}
else {
  request = require('@http/client')
}

if (argv.h || argv.help) {
  console.log(json.render(flags, {
    keysColor: 'blue',
    stringColor: 'grey'
  }))
  process.exit()
}
console.log()


function pick (a, b) {
  if (typeof a === 'string') {
    return a
  }
  else if (typeof b === 'string') {
    return b
  }
  if (typeof a === 'boolean') {
    return a
  }
  else if (typeof b === 'boolean') {
    return b
  }
}

function parse (str) {
  try {
    return eval('o='+str)
  }
  catch (e) {
    return str
  }
}


var options = {
  // for now put a callback function by default
  // so that the response body log events are handled
  callback: function () {}
}

for (var flag in flags) {
  var shorthand = flag.replace(/^-(.*),.*/, '$1')
    , option = flag.replace(/.*--(.*)/, '$1')

  if (!argv[shorthand] && !argv[option]) continue

  var value = pick(argv[shorthand], argv[option])
  value = parse(value)

  if (option === 'method') {
    options[option] = value.toUpperCase()
  }
  else {
    options[option] = value
  }
}

request(options)
