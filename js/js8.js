let map = new Map();
map
.set('name', 'ilya')
.set("age", '30')
.set('job', 'admin');

for (let [key, value] of map){
    console.log(`Ключ:${key}, Значение:${value}`);
}