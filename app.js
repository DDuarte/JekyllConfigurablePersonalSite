var express  = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    dust = require('express-dustjs'),
    links = require('./links'),
    requiredInfo = require('./requiredInfo');

// Dustjs settings
dust._.optimizers.format = function (ctx, node) {
    return node
};

app.engine('dust', dust.engine({
    useHelpers: true
}));
app.set('view engine', 'dust');
app.set('views', __dirname);
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/css')));
app.use(express.static(path.join(__dirname, 'static/font')));
app.use(express.static(path.join(__dirname, 'static/img')));
app.use(express.static(path.join(__dirname, 'static/js')));

app.get('/', function(request, response) {
    response.render('index', requiredInfo);
});

app.get('/resume', function(request, response) {
    response.render('resume', requiredInfo);
});

app.get('/avatar', function(request, response) {
    response.redirect(requiredInfo['avatar']);
});

app.get('/background', function(request, response) {
    response.redirect(requiredInfo['background']);
});

/**
 * If URL path is found in links.json then redirect
 * else handle 404s by redirecting to home page
 * */
app.get('*', function (request, response, next){
    var requestedPath = (request.path).replace('/', '').toLowerCase();
    if (links[requestedPath]) {
        response.redirect(links[requestedPath]);
    } else {
        response.redirect('/');
    }
});

console.log('Server started on http://localhost:8080');
app.listen(process.env.PORT || 8080);