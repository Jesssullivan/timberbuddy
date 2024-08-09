import fs from "fs"

const data_path = 'store.json';


const default_config = { stack_height: 1, core_height: 4 };

fs.writeFile(  'store.json', JSON.stringify(default_config, null, 2), (error) => {
    if (error) {
        console.log('An error has occurred ', error);
        return;
    }
    console.log('Data written successfully to disk');
});


fs.readFile(data_path, "utf8", (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(JSON.parse(data));
});