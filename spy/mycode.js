var person = function(){}
person.prototype.canVote = function(voter){
    var res = voter.checkAge(19);
    return "can vote"+ res;
}
var voterCriteria = function(){};
voterCriteria.prototype.checkAge= function(age){
if(age>=18){
    return true;
}
else{
    return false;
}
}
var per =  new person();
var voter = new voterCriteria();
console.log(per.canVote(voter));