declare let chrome: any;

chrome.runtime.onMessage.addListener(function (msg: any, sender: any, sendResponse: any) {
    if (msg.color) {
        console.log('Receive color = ' + msg.color);
        document.body.style.backgroundColor = msg.color;
        sendResponse('Change color to ' + msg.color);
    } else {
        sendResponse('Color message is none.');
    }
});
console.log('test=====');
var $ = require('jquery/dist/jquery.js');
console.log($);

import { Test } from './content_script/index';

var t = new Test();
t.console();