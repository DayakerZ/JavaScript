
//closures
function showGrade(totalMarks){

    return function claculateGrade(){
        if(totalMarks>90)
            return "S";
        else if(totalMarks>80 && totalMarks<=90)
            return 'A';
        else if(totalMarks>70 && totalMarks<=80)
            return 'B';
        else if(totalMarks>60 && totalMarks<=70)
            return 'C';
        else if(totalMarks>50 && totalMarks<=60)
            return 'D';
        else
            return 'F';
    }
}

var grade = showGrade(70);
console.log(grade());


//Maps
var map = new Map();
map.set('Name','Daya');
map.set('Roll Number',245118733125);

for(let element of map){
    console.log(element);
}

for(let element of map.keys()){
    console.log(element);
}

for(let element of map.values()){
    console.log(element);
}

for(let [key,value] of map){
    console.log(key+" - "+value);
}


//sets
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');//does not allow adding of duplicate elements

for (const element of sets) {
    console.log(element);
}
console.log(sets.size);

var set = new Set([1,2,3,4,5]);

console.log(set.size);
console.log(set.has(1));
console.log(set.has(10));
