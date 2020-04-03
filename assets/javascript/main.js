(function(){

  var min = 0;
  var max = 10;
  var top, bottom, answer;
  var correctCount = 0;
  var incorrectCount = 0;



  function setEquation(){
    top = Math.floor(Math.random() * (max - min)) + min;
    bottom = Math.floor(Math.random() * (max - min)) + min;
    answer = top + bottom;
    document.getElementById("top").innerHTML = top;
    document.getElementById("bottom").innerHTML = bottom;
  }
  setEquation();

  function checkAnswer(){
    if(parseInt(document.getElementById("answer").value) == answer){
      return true;
    }
    return false;
  }


document.getElementById("next").addEventListener("click", function(){
  var next = document.getElementById("next");
  var answer = document.getElementById("answer")
  if(checkAnswer()){
    setEquation();
    answer.value = "";
    next.innerHTML = "&#x2714";
    correctCount++;
    document.getElementById("correct").innerHTML = correctCount;
  }else{
    next.innerHTML = "&#x10102";
    next.style = "background:red;"
    incorrectCount++;
    document.getElementById("incorrect").innerHTML = incorrectCount;
  }
  answer.focus();
  answer.select();
  setTimeout(function(){
    next.innerHTML = "Next";
    next.style="background:green;"
  }, 1000);

});


})();
