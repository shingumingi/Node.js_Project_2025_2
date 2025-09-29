const express = require('express');
const fs = require('fs');
const router = express.Router();

// 초기 자원 설정

const resourceFilePath = 'resources.json';                  // 자원 저장 파일 경로
const initalResources = {
    metal : 500,
    crystal : 300,
    deuterium : 100,
}

// 글로벌 플레이어 객체 초기화
global.players = {};

router.post('/register', (req, res) =>{
    const {name , password} = req.body;

    if(global.players[name])
    {
        return res.status(400).send({message : '이미 등록된 사용자입니다.'});
    }

    global.players[name] = {

        playerName : name,
        password : password,
        resourses : {
            metal : 500,
            crystal : 300,
            deuterium : 100
        },
        planets:[]
    };

    saveResourves();
    res.send({message : '등록 완료', player:name}); 
});

router.post('/login', (req, res) =>{
    const {name, password} = req.body;

    if(!global.players[name])
    {
        return res.status(404).send({message: '플레이어를 찾을 수 없습니다.'});
    }
    if(password !== global.players[name].password)
    {
        return res.status(401).send({message: '비밀번호가 틀렸습니다.'});
    }

    const player = global.players[name];

    // 응답 데이터
    const reqponsePayLoad = {
        playerName : player.playerName,
        metal : player.resourses.metal,
        crystal : player.resourses.crystal,
        deuterium : player.resourses.deuterium
    }

    console.log("Login response playLoad : ", reqponsePayLoad);
    res.send(reqponsePayLoad);

});

function saveResourves()
{
    fs.writeFileSync(resourceFilePath, JSON.stringify(global.players, null, 2));        // Json파일로 저장
}

module.exports = router;                // 라우터 등록