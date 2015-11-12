
# @http/cli

```bash
DEBUG=req,res,body request -u https://npmjs.com/search -q "{q: 'http'}" -rc
```

```bash
DEBUG=req,res,body request --client @http/request -u https://npmjs.com/search -q "{q: 'http'}" -rc
```


```bash
request -u http://site.com -q "{a: 1, b: 'c'}"
```
```bash
request -u http://site.com -q '{"a": 1, "b": "c"}'
```
```bash
request -u http://site.com -q 'a=1&b=c'
```
