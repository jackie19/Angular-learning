var myModule=angular.module("MyModule",[]);
myModule.directive("hello",function(dateFilter){
    var str = dateFilter(new Date(),'M/d/yy h:mm:ss a');
	return {
		restrict:'E',
		template:'<div>'+ str +'</div>',
		replace:true
	}
});
