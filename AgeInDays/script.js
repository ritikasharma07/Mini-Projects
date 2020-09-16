function ageindays(){
    var birthYear=prompt('Tell your Year of Birth');
    var ageinDays= (2020 - birthYear)*365;
    var h1= document.createElement(h1);
    var textAnswer = document.createTextNode('You are ' + ageinDays + ' days old '+ '😃');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
  function reset() {
      document.getElementById('ageindays').remove();
  }

