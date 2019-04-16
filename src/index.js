var app = require("./server");
var MongoClient = require("mongodb");
var WordsDAO = require("./dao/wordsDAO");

var port = process.env.PORT || 8000;
var url = 'mongodb://root:r00tr00t@ds115523.mlab.com:15523/hebdict';

MongoClient.connect(url, { useNewUrlParser: true })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })
    .then(async client => {
        await WordsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    });
