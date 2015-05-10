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

