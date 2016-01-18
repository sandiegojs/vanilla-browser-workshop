'use strict';

var Net  = {
    
    xhr: function (method, path, data, callback) {
        
        // create a xhr
        var request = new XMLHttpRequest();
        
        // open the xhr, setting a few init options
        request.open(method, path, true);
        
        // default to an empty string
        // if (data === null || data === undefined) {
        //     data = '';
        // } else {
            
        //     // strinfigy serializes objects into strings, try uncommenting ln 21
        //     request.setRequestHeader('Content-Type', 'application/json');
        //     data = JSON.stringify(data);
        //     // console.dir(data);
            
        // }
        
        // Setup XHR eventhandler
        request.onreadystatechange = function () {
            
            // if we didn't get a 200 OK status, throw to know
            if (request.readyState === 4 && request.status !== 200) callback(new Error('XHR Failed: ' + path), null);
            
            // ignore anything that isn't the last state
            if (request.readyState !== 4) return;
            
            // return our server data
            callback(null, request.responseText);
            
        };
        
        // Close and send the request
        request.send(data);
        
    },

    // default method to GET and no data
    get: function (path, callback) {
        this.xhr('get', path, null, callback);
    },
    
    // default method to POST
    post: function (path, data, callback) {
        this.xhr('post', path, data, callback);  
    }
};

module.exports = Net;