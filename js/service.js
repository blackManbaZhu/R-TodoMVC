

//这里是服务模块  为控制器模块提供数据的模块  对数据进行增加 删除 修改

(function(){

    var serviceModel=angular.module('todoApp.service',[]);

    serviceModel.service('MainService',['$window',function($window){
        //所有的数据列表

        //我们要把所有的数据列表都放在本地  这样才不会把数据丢失
        var todos=$window.localStorage['todoMvc'] ? angular.fromJson($window.localStorage['todoMvc']):[];

        //定义一个方法 用于返回这个数组
        this.getTodos=function(){
            return todos;
        }
        //定义一个保存数据的方法
        this.save=function(){
            $window.localStorage['todoMvc']=angular.toJson(todos);
        }
        //增加一项数据
        this.addTodo=function(text){
            //获取当前的时间戳
            var id= new Date().getTime();
            todos.push({text:text,completed:false,id:id});
            this.save()
        }

        //删除一项数据
        this.removeTodo=function(id){
            for(var i=0;i<todos.length;i++){
                if(todos[i].id == id){
                    todos.splice(i,1);
                    break;
                }
            }
            this.save()
        }

        //计算剩余未完成的个数
        this.leftNum=function(){
            var count=0;
            for(var i=0;i<todos.length;i++){
                if(!todos[i].completed){
                    count++;
                }
            }
            return count;
        }

        //选中全部 或者取消选中全部
        this.toggleAll=function(status){
            for(var i=0;i<todos.length;i++){
                todos[i].completed=status;
            }
        }

        //是否显示和隐藏clearCompleted 按钮
        this.showcompleted=function(){
            for(var i=0;i<todos.length;i++){
                //如果数组中有一个选项的completed是true的话就 返回一个true否则就返回一个false
                if(todos[i].completed){
                    return true;
                }
            }
            return false;
        }
        //清楚所有已完成的事情
        this.clearCompleted=function(){
            //第一种方法
            for(var i=0;i<todos.length;i++){
                //如果是完成的事情  就把它找出来
                if(todos[i].completed){
                    todos.splice(i,1);
                    i--;
                }
            }
            this.save()
        }

    }])
})()