function showGrade(totalMarks,calculateGrade){

    console.log('Your aquired grade is '+calculateGrade(totalMarks));
}
function claculateGrade(totalMarks){
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

showGrade(76.3,claculateGrade);