const { readData, loadData, filterData } = require('./fileHandler.js');
const { addData, updateData, deleteData } = require('./taskService.js');

const process = require('process'); //pake require karna type di package.json nya commonjs
const argumen = process.argv;
const prompt = argumen[2];

if (prompt == 'add') {
    const contentDescription = argumen.slice(3).join(' ');
    addData(contentDescription);

}else if (prompt == 'list') {
    const desStat = argumen[4];
    loadData()
    filterData(argumen[3], desStat);
}else if (prompt == 'update') {
    const idToBeUpdated = Number(argumen[3]);
    if (!idToBeUpdated) {
        console.log('id not found!!');
        process.exit(1);
    }

    let updatedDesc, updatedStatus;

    for (let i = 4; i < argumen.length; i++){
        const updatedThings = argumen[i];
        if((updatedThings === '-s' || updatedThings === '--status') && argumen[i+1]){
            updatedStatus = argumen[i+1];
            i++
        }else if ((updatedThings === '-d' || updatedThings === '--description') && argumen[i+1]) {
            updatedDesc = argumen.slice(i+1).join(' ');
            i++
        }
    }
    try{
        const lastUpdatedAt = new Date()
        const success = updateData(idToBeUpdated, { description: updatedDesc, status: updatedStatus,updatedAt: lastUpdatedAt });
        if (success) {
            console.log(`Task ${idToBeUpdated} Updated`)
        }else {
            console.log(`Task ${idToBeUpdated} Not Found`);
        }
    } catch (err){
        console.log(err)
    }


}else if (prompt == 'delete') {
    const idToBeDelete = argumen[3];
    deleteData(idToBeDelete);
}else{
    console.log('enter the right input');
}