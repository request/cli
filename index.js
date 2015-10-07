#!/usr/bin/env node

var minimist = require('minimist')
  , columnify = require('columnify')
  , request = require('@http/client')
var flags = require('./config/flags')

var argv = minimist(process.argv.slice(2))


if (argv.h || argv.help) {
  console.log(columnify(flags, {
    minWidth: 20
  }))
  process.exit()
}


function pick (a, b) {
  if (typeof a === 'string') {
    return a
  }
  else if (typeof b === 'string') {
    return b
  }
  else {
    return true
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


var options = {}

flags.forEach(function (flag) {
  var a = flag['-'].replace('-', '')
    , b = flag['--'].replace('--', '')

  if (argv[a] || argv[b]) {
    var value = pick(argv[a], argv[b])
    value = parse(value)

    if (flag.option === 'method') {
      options[flag.option] = value.toUpperCase()
    }
    else if (flag.option === 'body') {
      // TODO: implement something more sophisticated
      options[flag.option] = value
    }
    else if (flag.option === 'callback') {
      options[flag.option] = function () {}
    }
    else {
      options[flag.option] = value
    }
  }
})

request(options)
