const fs = require('fs');
const path = './task.json';

function readData(){
    if (!fs.existsSync(path)){
        console.log('file database tidak ditemukan, on-progress membuat database baru ... ');   
        fs.writeFileSync(path, '[]', 'utf-8');
        return [];
    }
    const raw = fs.readFileSync(path, 'utf-8');

    if (!raw.trim()) {
        return [];
    }

    return JSON.parse(raw);
}

function loadData() {
    try {
        const json = fs.readFileSync(path, 'utf-8'); //return array, yang dibaca dari file task.json. 
        if (json.length > 0) {
            const datas = JSON.parse(json);
            datas.forEach(data => {
                console.log(`${data.id} | ${data.description} | ${data.status} | ${data.createdAt} | ${data.updatedAt}`);
            });
        }else {
            console.log('tidak dapat load data, file task.json kosong')
        }
    } catch (err) {
        throw err
    }
}

module.exports = { readData, loadData };
