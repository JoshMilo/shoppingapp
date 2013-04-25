function TodoCtrl($scope) {

    $scope.todos = [
        {text: 'Buy Porkchops', done: false},
        {text: 'Buy Ham Hocks', done: false}
    ];

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };

    $scope.deleteTodos = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        })
    }

    $scope.getTotalTodos = function() {
         return $scope.totalTodos = $scope.todos.length;
    };


}

