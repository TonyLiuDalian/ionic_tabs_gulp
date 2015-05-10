// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
 
//控制器可以是依赖其他模块,例如starter.contrlller；
//也可以是本模块自己定义的控制器angular.module('starter').controller('DashCtrl'
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true, //绝对定位，一排导航栏
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.examples',{
    url:'/examples',
    views: {
      'tab-examples': {
        templateUrl:'templates/tab_examples.html',
        controller:'ExamplesCtrl'
    }
    }
  })


 .state('tab.e1',{
    url:'/e1',
    views: {
      'tab-examples': {
        templateUrl:'templates/examples/tab-e1.html',
        controller:'E1Ctrl'
       }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

})




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
//angular.module('starter.services', ['ionic'])
angular.module('starter')
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
 
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '张三',
    lastText: '张三是司机',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 1,
    name: '李四',
    lastText: '厨师, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: '王五',
    lastText: '老板Did you get the ice cream?',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 3,
    name: '小红',
    lastText: '女生学生 I should buy a boat',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 4,
    name: '小明',
    lastText: '小学生 Look at my mukluks!',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];
  var examples = [{
      id: 0,
      name: '功能菜单0',
      url:'/e1',
      text: '菜单描述，菜单功能描述'
     },{
       id: 1,
       name: '功能菜单1',
       url:'/e2',
       text: '菜单描述，菜单功能描述'
     },{
       id: 2,
       name: '功能菜单2',
       url:'/e3',
       text: '菜单描述，菜单功能描述'
     },{
       id: 3,
       name: '功能菜单3',
       url:'/e4',
       text: '菜单描述，菜单功能描述'
     }
     ];

  return {
    allExs:function(){
      return examples;
    },
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Examples', function() {
  // Might use a resource here that returns a JSON array
  var examples = [{
      id: 0,
      name: '功能菜单00',
      url:'/e1',
      text: '菜单描述，菜单功能描述'
     },{
       id: 1,
       name: '功能菜单1',
       url:'/e2',
       text: '菜单描述，菜单功能描述'
     },{
       id: 2,
       name: '功能菜单2',
       url:'/e3',
       text: '菜单描述，菜单功能描述'
     },{
       id: 3,
       name: '功能菜单3',
       url:'/e4',
       text: '菜单描述，菜单功能描述'
     }
     ];

  return {
    allExs:function(){
      return examples;
    },
    remove: function(example) {
      examples.splice(examples.indexOf(example), 1);
    },
    get: function(exampleId) {
      for (var i = 0; i < examples.length; i++) {
        if (examples[i].id === parseInt(exampleId)) {
          return examples[i];
        }
      }
      return null;
    }
  };
})

