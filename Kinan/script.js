function _vowelCount_(str){
    str=str.spilt("");
    strArr=str.length;
    var count=0;
    for (i = 0; i < strArr; i++){
        if ((a[i] == "a") || (a[i] == "e") || (a[i] == "i") || (a[i] == "o") || (a[i] == "u")) {
            count = count+1;
    }
    console.log(count);
}}

_vowelCount_("Hello");