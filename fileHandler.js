const { create } = require('domain');
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
        const json = readData();
        if (json.length > 0) {
            console.log("ID   | Description                    | Status          | Created At | Updated At");
            console.log("---------------------------------------------------------------------------------");
            json.forEach(t => {
                const id = String(t.id).padEnd(4);
                const desc = t.description.padEnd(30);
                const status = t.status.padEnd(15);
                const createdAt = String(t.createdAt).slice(0,10).padEnd(10);
                const updatedAt = String(t.updatedAt).slice(0, 10).padEnd(10);

                console.log(`${id} | ${desc} | ${status} | ${createdAt} | ${updatedAt}`);
            });

            console.log()
        }else {
            console.log('tidak dapat load data, file task.json kosong')
        }
    } catch (err) {
        throw err
    }
}

function filterData(stat){
    const allData = readData(); //return array of task
    const availStat = ['todo', 'on-progress', 'done'];

    if (!availStat.includes(stat)){ // kalo di availStat include stat, tapi karna ada ! di balik.
        console.log('enter the right status');
        return;
    }else {
        const filteredData = allData.filter(t => t.status === stat); //ini all data yang sudah di filter dimana t.status sama dengan parameter stat
        console.log("ID   | Description                    | Status          | Created At | Updated At");
        console.log("---------------------------------------------------------------------------------");

        filteredData.forEach(fData => {
            const id = String(fData.id).padEnd(4);
            const description = fData.description.padEnd(30);
            const status = fData.status.padEnd(15);
            const createdAt = String(fData.createdAt).slice(0, 10).padEnd(10);
            const updatedAt = String(fData.updatedAt).slice(0, 10).padEnd(10);

            console.log(`${id} | ${description} | ${status} | ${createdAt} | ${updatedAt}`);

        });
    }
}

module.exports = { readData, loadData, filterData };