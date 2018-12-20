const path = require('path');

module.exports = {
    entry: './startScript.ts',
    resolve: {
        extensions: ['.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};