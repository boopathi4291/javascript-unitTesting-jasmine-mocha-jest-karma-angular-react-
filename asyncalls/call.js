var Async = function(){

};
Async.prototype.fetch = function(callback){
    $.ajax('http://apiapptrainingservice.azurewebsites.net/api/Products').done(function(data){
        callback(data);
    });
}
Async.prototype.postData = function(callback,data){
    $.ajax({url:'http://apiapptrainingservice.azurewebsites.net/api/Products',method:'post',data:data}).done(function(data){
        callback(data);
    });
}