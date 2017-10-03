var taskManager = angular.module('taskManager', []);

function mainController($scope, $http) {
	$scope.formData = {};

    //list all tasks
    $http.get('/tasks')
    .success(function(data) {
    	$scope.tasks = data;
    	console.log(data);
    })
    .error(function(data) {
    	console.log('Error: ' + data);
    });

    // when submitting the add form, send the text to API
    $scope.createTask = function() {
    	//verify that user is submitting a non empty text
    	if ($scope.formData.text !== undefined) {
    		$http.post('/tasks', $scope.formData)
					//list all tasks
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; 
						$scope.tasks = data;
					});
				}
			};

    // delete task when you click on it
    $scope.deleteTask = function(id) {
    	$http.delete('/tasks/' + id)
    	.success(function(data) {
    		$scope.tasks = data;
    		console.log(data);
    	})
    	.error(function(data) {
    		console.log('Error: ' + data);
    	});
    };
}
