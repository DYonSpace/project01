const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const url = require('url')
const ip = require("ip");

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8898, function() {
    console.log('listening on 8898')
    console.log( ip.address() ); 
    return ('<html><body>return page</body></html>')
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/build/index2.html'));
})


app.get('/itemData/list1.json', function(req, res){
    res.json([
        {
          id: "pln001",
          itemName: "2022 낼나다이어리 (프로, 소프트레인보우)",
          content: "날짜형·프로·소프트레인보우",
          price: 12500,
          imgPath: "http://127.0.0.1:8898/images/planner-f1.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b1.png",
        },
        {
          id: "pln002",
          itemName: "2022 낼나다이어리 (프로, 크림그레이)",
          content: "날짜형·프로·크림그레이",
          price: 12500,
          imgPath: "http://127.0.0.1:8898/images/planner-f2.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b2.png",
        },
        {
          id: "pln003",
          itemName: "2022 낼나다이어리 (프로, 네온블랙)",
          content: "날짜형·프로·네온블랙",
          price: 12500,
          imgPath: "http://127.0.0.1:8898/images/planner-f3.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b3.png",
        },
      ])
})

app.get('/itemData/list2.json', function(req, res){
  setTimeout(()=> {
    res.json([
        {
          id: "pln004",
          itemName: "2022 낼나다이어리 (베이직, 소프트레인보우)",
          content: "날짜형·베이직·소프트레인보우",
          price: 9700,
          imgPath: "http://127.0.0.1:8898/images/planner-f4.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b4.png",
        },
        {
          id: "pln005",
          itemName: "2022 낼나다이어리 (베이직, 크림그레이)",
          content: "날짜형·베이직·크림그레이",
          price: 9700,
          imgPath: "http://127.0.0.1:8898/images/planner-f5.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b5.png",
        },
        {
          id: "pln006",
          itemName: "2022 낼나다이어리 (베이직, 네온블랙)",
          content: "날짜형·베이직·네온블랙",
          price: 9700,
          imgPath: "http://127.0.0.1:8898/images/planner-f6.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b6.png",
        },
      ])
    }, 500)
})

app.get('/itemData/list3.json', function(req, res){
  setTimeout(()=> {
    res.json([
        {
          id: "pln007",
          itemName: "2022 낼나다이어리 (라이트, 소프트레인보우)",
          content: "날짜형·라이트·소프트레인보우",
          price: 8100,
          imgPath: "http://127.0.0.1:8898/images/planner-f7.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b7.png",
        },
        {
          id: "pln008",
          itemName: "2022 낼나다이어리 (라이트, 크림그레이)",
          content: "날짜형·라이트·크림그레이",
          price: 8100,
          imgPath: "http://127.0.0.1:8898/images/planner-f8.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b8.png",
        },
        {
          id: "pln009",
          itemName: "2022 낼나다이어리 (라이트, 네온블랙)",
          content: "날짜형·라이트·네온블랙",
          price: 8100,
          imgPath: "http://127.0.0.1:8898/images/planner-f9.png",
          imgPathB: "http://127.0.0.1:8898/images/planner-b9.png",
        },
      ])
    }, 500)
})


app.get('/images/:id', function(req, res){
    let resource = url.parse(req.url).pathname;
    
    if(req.params.id) {
        
        let filename = './images/' + req.params.id;
        let extFile = fs.existsSync(filename);
        // console.log(extFile);
        console.log('[ ' + new Date().toLocaleString() + '] ' + filename);
        if(extFile) {
            fs.readFile(filename, 
            function (err, data)
            {
                res.writeHead(200, { "Context-Type":"image/jpg"});
                res.write(data);
                res.end();
            })
        } else {
            res.writeHead(404, {'Content-Type':'text/html'});
            res.end('404 Page Not Found');
        }
    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('404 Page Not Found');
    }
    
})

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '/build/index2.html'));
})



