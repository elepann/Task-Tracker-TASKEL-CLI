const fs = require('fs');
const { readData } = require('./fileHandler.js')
const path = './task.json';

function addData(desc){ 
    try {
        const tasks = readData();
        const tanggal = new Date();
        let maxId = 0;

        for (let i = 0; i < tasks.length; i++){
            let currentId = tasks[i].id
            if (currentId > maxId) {
                maxId = currentId;
            }
        }
    
        const newTask = {
            id: maxId + 1,
            description: desc,
            status: 'todo',
            createdAt: tanggal,
            updatedAt: tanggal
        }
    
        tasks.push(newTask);
        console.log(`Task added successfully (ID: ${newTask.id})`);
    
        fs.writeFileSync('./task.json', JSON.stringify(tasks, null, 2))
    } catch (err){
        throw err
    }
}

function updateData(id, { description, status, updatedAt } = {}){
    try {
        let tasks;
        if (path && path.trim()){
            tasks = readData();
            const idx = tasks.findIndex(t => Number(t.id) === Number(id));
            if(idx === -1){ 
                return false
            }
            if (typeof status !== 'undefined'){
                tasks[idx].status = status
            }
            if (typeof description !== 'undefined'){
                tasks[idx].description = description;
            }
            tasks[idx].updatedAt = updatedAt;

            fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
            return true
        }else {
            return false
        }
    } catch (err) {
        throw err
    }
}

function deleteData(id){
    try{
        let tasks
        if (path) {
            tasks = readData();
            const idx = tasks.findIndex(t => Number(t.id) === Number(id));
            if(idx > -1 ){
                tasks.splice(idx, 1);
            }
            fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
            console.log(`Task with ID ${id} Deleted Successfully`)
            return true
        }else{
            return false
        }
    }catch(err) {
        throw err
    }
}

module.exports = { addData, updateData, deleteData };