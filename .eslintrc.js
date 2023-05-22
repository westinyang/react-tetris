module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [2, { extensions: ['.js','.jsx'] }],
        "func-names": [0],
        "new-cap": [2, { newIsCap: true ,capIsNew: true, capIsNewExceptions: ['List', 'Map']}],
        "linebreak-style": [0],
        "max-len" : ["error", {code : 999999999}] 
    },
    "env": {
        "browser": true
    }
};