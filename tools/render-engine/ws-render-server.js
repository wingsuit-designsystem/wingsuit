const http = require("http");
const url = require("url");
const TwigRenderer = require('@basalt/twig-renderer');

http.createServer((request, response) => {

    const queryData = url.parse(request.url, true).query;

    const renderer = new TwigRenderer({
        src: {
            roots: [__dirname+'/../../wingsuit/source/default/_patterns']
        }
    });

    const settings = queryData.setting.split('-');
    const data = {[settings[0]]: settings[1]};

    console.log("rendering pattern "+queryData.pattern, data)

    renderer.render(queryData.pattern, data).then((results) => {
        if(results.ok){
            response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin':'*'});
            response.end(results.html);

        }else{
            response.writeHead(500, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin':'*'});
            response.end(results.message);
        }

    });


}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');