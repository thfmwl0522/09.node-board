const morgan = require('morgan');
const rts = require('rotating-file-stream');
const path = require('path');
const moment = require('moment');

var accessLogStream = rfs.createStream(`${moment().format('YYYY-MM-DD')}.log`, {
  interval: '1d',
  path: path.join(__dirname, '../logs')
})

module.exports = () => {
	return morgan('combined', { stream: accessLogStream });
}
 
