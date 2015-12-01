
# @request/cli

> See [@request/core][request-core] for more details.


```bash
$ npm install -g @request/cli
$ request --help
```


## Ways to pass a querystring

```bash
# Object
$ request -u http://site.com -q "{a: 1, b: 'c'}"
# JSON
$ request -u http://site.com -q '{"a": 1, "b": "c"}'
# Querystring
$ request -u http://site.com -q 'a=1&b=c'
```


## Debug Log

```bash
$ npm install @request/log
$ DEBUG=req,res,body request -u https://npmjs.com/search -q "{q: 'http'}" -rc
```


  [request-core]: https://github.com/request/core
