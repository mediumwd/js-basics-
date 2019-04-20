function stringCounter(){
    var str = document.getElementById('stringCounter').value;
    var newStr = str;
    var letters = {};
    while (newStr.length > 0){
        var charCount = newStr.split(newStr[0]).length-1,
            charDel = newStr[0];
        letters[charDel] = charCount;
        for (var j=0; j < charCount; j++){
            var newStr = newStr.replace(charDel, "");
            }
    }
    console.log("String: " + str);
    console.log(letters);
    var answer = JSON.stringify(letters);    
    document.getElementById('stringCounterAnswer').innerHTML = answer;
}
//---------------------------------------------------------
function randElement(){
    var base = document.getElementById('matrixBase').value;
    var randNumber = Math.floor(Math.random()*(+base + 1));
    console.log(typeof(+base));
    return randNumber;
}
function renderMatrix(){
    var size = document.getElementById('matrixLength').value;
    var builder = [],
        arr = [];
    for(var i=0;i<size; i++) {
        arr[i] = builder;
        for(var j=0; j<size; j++){
            builder[j] = randElement();
        }
        builder = [];
    }
    document.getElementById('matrix').innerHTML = "Your random matrix: " + JSON.stringify(arr);
    console.log(arr);
    return builder;
}
//-------------------------------------------------------------
function wordintextcounter() {
    var text = document.getElementById('wordintextcounter').value;
    var words = text.split(' ');
    var maxWord = words[0],
        minWord = words[0],
        avarangeWordLength = 0;
    for (let i=0; i < words.length; i++) {
        if(maxWord.length < words[i].length) maxWord = words[i];
        if(minWord.length > words[i].length) minWord = words[i];
        avarangeWordLength += words[i].length;
    }
    avarangeWordLength = avarangeWordLength/words.length;
    document.getElementById('wordintextcounterAnswer').innerHTML = 
        "Number of words: " + words.length + "<br />" +
        "Length of the longest word: " + maxWord.length + "<br />" +
        "Length of the shortest word: " + minWord.length + "<br />" +
        "Avarange length of words: " + avarangeWordLength;
}
//-------------------------------------------------------------
document.getElementById('stringCounterSubmit').onclick = stringCounter;
document.getElementById('buildMatrix').onclick = renderMatrix;
document.getElementById('wordintextcounterSubmit').onclick = wordintextcounter;