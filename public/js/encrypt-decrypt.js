function comboIDEncrypt(maxChar, num1, num2, num3, num4){
    let countID = 1;

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
                                if (l==num4) return countID;
                                else countID++;
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
                    countID += (max2ndDigit-(j-1)) * (max2ndDigit-(j-1) + 1) / 2
                }
            }
        }
        else
        {
            countID += (max1stDigit-(i-1)) * (max1stDigit-(i-1)+1) * (max1stDigit-(i-1)+2) / 6
        }
    }
}


//yourNumber = parseInt(hexString, 16);