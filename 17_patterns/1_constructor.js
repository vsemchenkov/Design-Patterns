// --------------------
// Author: VSemchenkov
// --------------------
// Pattern constructor
// --------------------

// Old constructor
var Server = function (name, ip) {
  this.name = name;
  this.ip = ip;
};

Server.prototype.getURL = function() {
    return `https://${this.ip}:80`
};

// New constructor

class NewServer {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl = () => {
        return `https://${this.ip}:80`
    }
}

// Old call
var webServer = new Server('Web Server', '198.1.1.2');
console.log(webServer.getURL());
// New call
let newWebServer = new Server('Web Server', '198.1.1.2');
console.log(newWebServer.getURL());