const util = require('util');
const utils = require('../utils');

let map = utils.makeMap('name','hong');
util.log("map_____",map.get('name'));
return;
let str = "NodeJS";
let enc = utils.encrypt(str);
let dec = utils.decrypt(enc);

util.log("enc= " , enc);
util.log("enc= " , dec);

return;

let url = "https://naver.com";

utils.ogsinfo(url, (err, ret) => {
    util.log(err, ret);

});
