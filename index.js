//Part One
let info = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

// let array = info.slice("\n");

// console.log(array);

// Part Two
//Comment out line 4 and 6 for this to work

let array = info.split("\n")

let infoGroup = [];

for (let i = 0; i < array.length; i++){

  infoGroup.push(array[i].split(","));
    
}
console.log(infoGroup);

//Part Three

let infoGroups = infoGroup.slice(1);

const finalInfo = infoGroup.map(row => {
        return {
          id: row[0],
          name: row[1],
          occupation: row[2],
          age: row[3]
        };
      });

    console.log(infoGroups);



