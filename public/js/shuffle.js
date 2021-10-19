function RandomFour() {

    maxChar = document.getElementById('MAXCHAR').value;
    if (maxChar < 4) maxChar = 4;
    let idChar = [];
    let rollChar = [];

    for (i=1;i<=maxChar;i++){
        idChar[i-1]=i;
    }

    //taking out unobtained character
    

    //this is repeated 4 times.
    for (i=0;i<=3;i++){
        //roll numbers
        var roll_Result = Math.floor(Math.random() * idChar.length);
        
        //take out from the pool
        var roll = idChar.splice(roll_Result, 1);
        
        //pick it up
        rollChar[i] = roll[0];
    }
    bubbleSort(rollChar);

    document.getElementById('char1').innerHTML = rollChar[0];
    document.getElementById('char2').innerHTML = rollChar[1];
    document.getElementById('char3').innerHTML = rollChar[2];
    document.getElementById('char4').innerHTML = rollChar[3];
    document.getElementById('combID').innerHTML = comboIDEncrypt(maxChar,rollChar[0],rollChar[1],rollChar[2],rollChar[3]);
}