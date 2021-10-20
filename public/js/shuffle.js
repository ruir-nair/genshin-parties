function RandomFour() {

    let roll = [];

    //All Characters right now.
    maxChar = 41;

    strUnobtain = document.getElementById('unobtainable').value;
    unobtainable = strUnobtain.split(",");
    
    if (maxChar < 4) maxChar = 4;
    let idChar = [];
    let rollChar = [];

    for (i=1;i<=maxChar;i++){
        idChar[i-1]=i;
    }

    //taking out unobtained character
    for (element of unobtainable){
        ax = idChar.indexOf(parseInt(element));
        idChar.splice(ax, 1);
    }

    //This is the core program. Shuffling char.
    for (i=0;i<=3;i++){
        //roll numbers
        var roll_Result = Math.floor(Math.random() * idChar.length);
        
        //take out from the pool
        roll = idChar.splice(roll_Result, 1);
        
        //pick it up
        rollChar[i] = roll[0];
    }
    bubbleSort(rollChar);

    Char1st = "H" + rollChar[0];
    Char2nd = "H" + rollChar[0];
    Char3rd = "H" + rollChar[0];
    Char4th = "H" + rollChar[0];
    document.getElementById('char1').innerHTML = "H" + rollChar[0];
    document.getElementById('char2').innerHTML = "H" + rollChar[1];
    document.getElementById('char3').innerHTML = "H" + rollChar[2];
    document.getElementById('char4').innerHTML = "H" + rollChar[3];
    document.getElementById('combID').innerHTML = comboIDEncrypt(maxChar,rollChar[0],rollChar[1],rollChar[2],rollChar[3]);
    document.getElementById('maxCombination').innerHTML = maxPossibleCombination(maxChar-unobtainable.length);
}