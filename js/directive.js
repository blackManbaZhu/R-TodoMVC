/**
 * Created by Administrator on 2016/9/27.
 */
(function(){
    //自定义一个指令
    angular.module('todoApp.directives',[]).directive('focus',['$timeout',function($timeout){

        return {
            link:function($scope,ele,attr){
                console.log(ele);
                console.log(attr.focus);
                $scope.$watch(attr.focus,function(now){
                    if(now){
                        $timeout(function(){
                            ele[0].focus();
                        },0)
                    }
                })
            }
        }
    }])
})()