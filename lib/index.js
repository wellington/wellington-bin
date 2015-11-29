'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');
var url = 'https://github.com/wellington/wellington/releases/download/v' + pkg.config.wtVersion + '/';
module.exports = new BinWrapper()
	.src(url + 'wt_v'+ pkg.config.wtVersion +'_darwin_amd64.tar.gz', 'darwin', 'x64')
	.src(url + 'wt_v'+ pkg.config.wtVersion +'_linux_amd64.tar.gz', 'linux', 'x64')
	.dest( path.join(__dirname, '../vendor/wellington') )
	.use( 'wt')
	.version('>=' + pkg.config.wtVersion);
