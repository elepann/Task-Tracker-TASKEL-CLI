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
            console.log("ID   | Description                    | Status     | Created At               | Updated At ")
            json.forEach(t => {
                const id = String(t.id).padEnd(4);
                const desc = t.description.padEnd(30);
                const status = t.status.padEnd(10);
                const createdAt = t.createdAt.padEnd(10);
                const updatedAt = t.updatedAt.padEnd(10);

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

function filterData(arg, stat){
    if (arg === '-s' || arg === '--status'){
        const allData = readData();

        const desStat = stat;
        if (desStat === "done"){
            const doneTask = allData.filter(t => t.status === 'done');
            console.table(doneTask);
        }else if(desStat === 'on-progress') {
            const onProgTask = allData.filter(t => t.status === 'on-progress');
            console.table(onProgTask);
        }else{
            const toDo = allData.filter(t => t.status === 'todo');
            console.table(toDo)
        }
    }
}

module.exports = { readData, loadData, filterData };
