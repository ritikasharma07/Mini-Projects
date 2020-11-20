function age(){
    var birthYear=prompt('Tell your Year of Birth');
    var age= (2020 - birthYear);
    var h1= document.createElement(h1);
    var textAnswer = document.createTextNode('You are ' + age + ' years old '+ '😃');
    h1.setAttribute('id','age');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    if(age>=0)
    {
        age=true;    }
        else
        age=false;
}
  function reset() {
      document.getElementById('age').remove();
  }
