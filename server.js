var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article One | Deepak Verma',
    heading: 'Article One',
    date: 'Feb 28, 2017',
    content:` <p>
                    This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML.
                </p>
                <p>
                    This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML.
                </p>
                <p>
                    This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML. This is my first article. It is simply based on basic HTML.
                </p>`
},
    'article-two' : {
        title: 'Article Two | Deepak Verma',
        heading: 'Article Two',
        date: 'Feb 29, 2017',
        content:` <p>
                        This is my second article. It is simply based on basic HTML.
                    </p>`
    },
    'article-three' : {
        title: 'Article Three | Deepak Verma',
        heading: 'Article Three',
        date: 'Feb 29, 2017',
        content:` <p>
                        This is my third article. It is simply based on basic HTML.
                    </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}    
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
