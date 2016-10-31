

//这里是控制器模块
(function(){

    //创建一个模块 这个模块要被app.js里的主模板依赖
    var controllerModule=angular.module('todoApp.controller',['todoApp.service']);
    controllerModule.controller('mainController',['$scope','$routeParams','MainService',function($scope,$routeParams,MainService){
        $scope.text='';
        //返回列表数据
        $scope.todos=MainService.getTodos();

        //添加一项内容
        $scope.addTodo=function(){
            //判断是否没有输入内容  没有内容不能添加
            if($scope.text.length==0){return};
            //调用addTodo方法
            MainService.addTodo($scope.text);
            $scope.text='';
            }

        //移除一项内容
        $scope.removeTodo=function(id){
            MainService.removeTodo(id);
        }

        //双击显示input事件
        $scope.editIndex=-1;
        $scope.showIpt=function(event,index){
                $scope.editIndex=index;
        };

        //敲击回车保存修改信息
        $scope.saveTodo=function(){
                $scope.editIndex=-1;
        };

        //
        $scope.save=function(){
            MainService.save();
        }
        //计算剩余未完成的事件
        $scope.leftNum=function(){
            //调用leftNum方法返回 count
            var count=MainService.leftNum()
            $scope.allChecked=!count;
            return count;
        }

        // 选中全部 获取取消选中全部
        $scope.toggleAll =function(){
            MainService.toggleAll(!$scope.allChecked)
        }

        //是否显示和隐藏clearCompleted 按钮
        $scope.showcompleted=function(){
            //返回调用这个函数所返回的值
           return MainService.showcompleted();
        };

        //清楚所有已完成的事情
        $scope.clearCompleted=function(){
            MainService.clearCompleted();
        };
            // 第三种方法  路由
        $scope.status = $routeParams.status || '';
            //console.log($routeParams.status);
            switch ($routeParams.status) {
                case 'active':
                    $scope.select = { completed: false };
                    break;
                case 'completed':
                    $scope.select = { completed: true };
                    break;
                default:
                    $scope.select = {};
                    break;
            }

    }])
})()