# vscode

* https://www.youtube.com/watch?v=IIKndRX5qHw
* install emeraldwalk Run On Save

```
    "emeraldwalk.runonsave": {
        "autoClearConsole":true,
        "commands": [
            {
                "match": "\\.js$",
                "cmd":"cd ${workspaceRoot} && node ${file} > tcr.txt && git commit -am 'working' || git reset --hard "
            },
        ]
    },
```
* make sure git is working
* npm init
* function assert(flag) {if (!flag) {throw 'assert error!';}}
