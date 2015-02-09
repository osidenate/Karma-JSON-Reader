# Karma-JSON-Reader
Helper function for Karma that makes reading JSON files easier

## Install

`bower install karma-json-reader`

## Usage

1. Include karma-json-reader.js in your karma.conf.js.

        files = [
            ...
            'bower_components/karma-read-json/karma-json-reader.js',
            ...
        ]

2. Include your JSON data in your karma.conf.js.

        files = [
            ...
            { pattern: 'test/data/*.json', watched: true, served: true, included: false },
            ...
        ]

3. Use `KarmaJSONReader` to get your JSON data.

        var jsonReader = new KarmaJSONReader('path/to/json/files/');
        var mockData = jsonReader.readJSON('mockData.json');
        
