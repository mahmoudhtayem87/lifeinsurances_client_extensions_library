var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join('/Users/mahmoudtayem/Documents/Liferay/angular/Commerce/componentLibrary')))
app.listen(3300)
