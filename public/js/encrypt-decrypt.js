function comboIDEncrypt(maxChar, num1, num2, num3, num4){
    let countID = 0;

    max1stDigit = maxChar - 3;
    max2ndDigit = maxChar - 2;
    max3rdDigit = maxChar - 1;
    max4thDigit = maxChar;

    for (i=1;i<=max1stDigit;i++){
        if (i==num1)
        {
            for (j=i+1;j<=max2ndDigit;j++){
                if (j==num2)
                {
                    for (k=j+1;k<=max3rdDigit;k++){
                        if (k==num3)
                        {
                            for (l=k+1;l<=max4thDigit;l++){
                                countID++;
                                if (l==num4) return countID;
                            }
                        }
                        else
                        {
                            countID += (max3rdDigit - (k-1));
                        }
                    }
                }
                else
                {
                    countID += (max2ndDigit-(j-1)) * (max2ndDigit-(j-1) + 1) / 2;
                }
            }
        }
        else
        {
            countID += (max1stDigit-(i-1)) * (max1stDigit-(i-1)+1) * (max1stDigit-(i-1)+2) / 6;
        }
    }
}


//yourNumber = parseInt(hexString, 16);

function comboIDDecrypt(maxChar, countID){
    num1 = 1;
    num2 = 2;
    num3 = 3;
    num4 = 4;
    let countIDhere = 0;
    max1stDigit = maxChar - 3;
    max2ndDigit = maxChar - 2;
    max3rdDigit = maxChar - 1;
    max4thDigit = maxChar;

    for (i=1;i<=max1stDigit;i++){
        formula1st = (max1stDigit-(i-1)) * (max1stDigit-(i-1)+1) * (max1stDigit-(i-1)+2) / 6;
        if (countIDhere + formula1st >= countID)
        {
            for (j=i+1;j<=max2ndDigit;j++){
                formula2nd = (max2ndDigit-(j-1)) * (max2ndDigit-(j-1) + 1) / 2;

                if (countIDhere + formula2nd >= countID)
                {
                    for (k=j+1;k<=max3rdDigit;k++){
                        formula3rd = (max3rdDigit - (k-1));
                        if (countIDhere + formula3rd >= countID)
                        {
                            for (l=k+1;l<=max4thDigit;l++){
                                if (countIDhere + 1 == countID)
                                {
                                    return [num1,num2,num3,num4];
                                }
                                else
                                {
                                    countIDhere++;
                                    num4++;
                                }
                            }
                        }
                        else
                        {
                            countIDhere += formula3rd;
                            num3++;
                            num4++;
                        }
                    }
                }
                else
                {
                    countIDhere += formula2nd;
                    num2++;
                    num3++;
                    num4++;
                }
            }
        }
        else
        {
            countIDhere += formula1st;
            num1++;
            num2++;
            num3++;
            num4++;
        }
    }

    //menentukan digit pertama dulu.

    //anggap maxChar = 7.

    //DIBALIK AJA HEHE
    //1st digit: tambahkan countID dengan formula besar (20-10-4-1).
        //Cek kalau misalnya ditambah 20 masih kurang.
            //Yes masih kurang: tambah 20. num1++;
            //No kelebihan: move out to num2.
                //Yes: tambah 10. num1++
                //No: move out to num2.
                    //Yes masih kurang: tambah 4. num1++
                    //No: move out to num2
                        //Yes masih kurang: tambah 1. num1++ move out to num2 anyway
                        //No: move out to num2 anyway
    
    //2nd digit: tambahkan countID dengan formula kecil (10-6-3-1)
        //Cek kalau misalnya ditambah 10 masih kurang.
            //Yes masih kurang: tambah 10. num2++;
            //No kelebihan: move out to num3.
                //Yes: tambah 6. num2++;
                //No: move out to num3.
                    //Yes masih kurang: tambah 3. num2++;
                    //No: move out to num3
                        //Yes masih kurang: tambah 1. num1++ move out to num3 anyway
                        //No: move out to num3 anyway
    
    //3rd digit: tambahkan countID dengan formula 4-3-2-1
        //Cek kalau misalnya ditambah 4 masih kurang.
            //Yes masih kurang: tambah 4. num3++;
            //No kelebihan: move out to num4.
                //Yes: tambah 3. num3++;
                //No: move out to num4.
                    //Yes masih kurang: tambah 2. num3++;
                    //No: move out to num4.
                        //Yes masih kurang: tambah 1. num3++ move out to num4 anyway
                        //No: move out to num4 anyway

    //4th digit: tambahkan countID dengan 1-1-1-1 (checking every single one)
        //Cek kalau misalnya ditambah 1 masih kurang.
            //Yes masih kurang: tambah 1. num4++;
            //No, that's it: return num1, num2, num3, num4.

    
}

function FindComboID(){
    strParty = $('#enterCombination').val();
    partyArr = strParty.split(",");
    truenumber = 1;

    i=0;
    for (element of partyArr){
        partyArr[i] = parseInt(element);
        i++;
    }

    truenumber = comboIDEncrypt(41,partyArr[0],partyArr[1],partyArr[2],partyArr[3]);

    $('#Result_ComboID').text(truenumber);
}