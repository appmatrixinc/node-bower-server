/**
public $rackspaceCloud = array(
	'datasource' => 'Database/Mysql',
	'persistent' => true,
	'host' => '9874c6c3846579ab85e26d0d3380265a6e598e78.rackspaceclouddb.com',
	'login' => 'amdev',
	'password' => 'AppMatrix9!',
	'database' => 'dev_myappmatrix'
);
public $default = array(
	'datasource' => 'Database/Mysql',
	'persistent' => true,
	'host' => 'localhost',
	'database' => 'aminc_my',
	'login' => 'root',
	'password' => 'fred',
	'unix_socket' => '/Applications/MAMP/tmp/mysql/mysql.sock',
	'prefix' => ''
);
**/

var config = {
	database: 'dev_myappmatrix',
	host: '9874c6c3846579ab85e26d0d3380265a6e598e78.rackspaceclouddb.com',
	port: 3306,
	login: 'amdev',
	password: 'AppMatrix9!',
};
exports.config = config;