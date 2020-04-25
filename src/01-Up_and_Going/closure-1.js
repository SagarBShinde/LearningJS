'use  strict';
function User(){
	var userName, password;

	// doLogin has a closure over userName and Password
	function doLogin(user,pwd){
		userName = user;
		password=pwd;
		console.log('Logging in user:' + userName + ',' + password);
	}

	var publicApi = {
		login: doLogin
	};

	return publicApi;

}

harvey = User();
harvey.login('Harvey', 'Suits');

