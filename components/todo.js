angular.module('todoApp', [])
  .controller('todoController', $scope => {
    $scope.tasks = [];
    $scope.add = () => { 
      $scope.tasks.push($scope.item);
    }
  })
