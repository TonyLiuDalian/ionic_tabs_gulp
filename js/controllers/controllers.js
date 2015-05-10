//angular.module('starter.controllers', ['ionic'])
angular.module('starter')
.controller('DashCtrl', function($scope) {

 
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('ExamplesCtrl',function($scope,$location,$stateParams, Examples){  
   $scope.examples = Examples.allExs();
   $scope.remove = function(example) {
    Examples.remove(example);
  }
  $scope.get = function(exampleId) {
    console.log(Examples.get(exampleId).url);
    //$localstorage.set('buildingId', buildingId)
    var url = Examples.get(exampleId).url;
    // $localstorage.set('buildingName', name)
    $location.path('/app'+url)
    //alert(Examples.get(exampleId));
    //$scope.examples = Examples.get(exampleId);
  }
})
.controller('E1Ctrl', function(){
  alert("e1");
})