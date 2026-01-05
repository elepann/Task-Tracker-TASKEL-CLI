const { PassThrough } = require('stream');
const { loadData, filterData } = require('./fileHandler.js');
const { addData, updateData, deleteData } = require('./taskService.js');
const { program } = require('commander');

const process = require('process'); //pake require karna type di package.json nya commonjs
const argumen = process.argv;
const prompt = argumen[2];



//inisialisasi package commander.js


program.name('TASKEL').description('TASKEL APPLICATION').version('1.0.0')

//add command
program.command('add <task>').description('Add Item in JSON').action((tasks) => {
    addData(tasks)
})

//list command
program.command('list').description('display task in JSON').option('-s, --status <status>').action((options) => {
    const statusTerpilih = options.status

    if(statusTerpilih){
        filterData(statusTerpilih)
    }else {
        loadData();
    }
})

//delete command 
program.command('delete <id>').description('delete task in JSON').action((id) => {
    deleteData(id);
})

//update command
program.command('update <id>').description('update task by id').option('-s, --status <status>', 'update new status').option('-d, --description <description>', 'update new description').action((id, options) => {

    const newDesc = options.description;
    const newStat = options.status;

    updateData(id, newStat, newDesc);
})

program.parse();