'use strict';

var Net  = {
    
    xhr: function (method, path, data, callback) {
        
        // First we create a new instance of XHR.
        var request = new XMLHttpRequest();
        
        // We'll use open to initialize the request with some info.
        // The method (GET, POST), the path (/users/id), async (should always be true)
        request.open(method, path, true);
        
        // TODO: Not sure if we have to send it as json or just form data?
        // if (method === 'POST') {
        //     request.setRequestHeader('Content-Type', 'application/json');
        // }
    
    
        // XHR only has one event and that's onreadystatechange (all lowercase). 
        // Here we only care for the last state, 4, which triggers the request operation is complete.
        // We'll make sure we got a good server respose, then send the data back though a callback.
        request.onreadystatechange = function () {
            
            // ignore anything that isn't the last state
            if (request.readyState !== 4) return;
            
            // if we didn't get a 200 OK status send back an error
            if (request.readyState === 4 && request.status !== 200) callback(new Error('XHR Failed: ' + path), null);
            
            // return our server data
            callback(null, request.responseText);
            
        };
        
        // Lastly just close and send the request with our data.
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

module.exports = Net.xhr;