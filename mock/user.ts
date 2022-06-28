let Mock = require('mockjs');

let login = () => {
    return {
        'success': true,
        'msg': '登录成功',
        'errorCode': 0,
        'data': {
            'username': 'jack',
            'password': 'redballoon',
        }
    };
};

Mock.mock('/api/user/login', 'post', login());