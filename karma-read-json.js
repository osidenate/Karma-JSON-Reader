(function(window, document, undefined) {
    'use strict';

    window.readJSON = function(url) {
        var xhr = new XMLHttpRequest();
        var json = null;

        xhr.open('GET', url, false);

        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    json = JSON.parse(xhr.responseText);
                } else {
                    console.error('readJSON - ', url, xhr.statusText);
                }
            }
        };

        xhr.onerror = function() {
            console.error('readJSON - ', url, xhr.statusText);
        };

        xhr.send(null);
        return json;
    };
})(window, document);
