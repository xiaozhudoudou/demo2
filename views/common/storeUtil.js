(function(){
    var Util = function(name,value){
        this.name = name;
        this.value = value;
    }

    Util.getName = function(){
        return this.name;
    }

    return Util;
})();