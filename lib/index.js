'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://github.com/wellington/wellington/releases/download/v' + pkg.version + '/';
module.exports = new BinWrapper()
	.src(url + 'wt_v'+ pkg.version +'_darwin_amd64.zip', 'darwin', 'x64')
	.src(url + 'wt_v'+ pkg.version +'_linux_amd64.zip', 'linux', 'x64')
	.dest( path.join(__dirname, '../vendor/wellington') )
	.use( 'wt')
	.version('>=' + pkg.version);
