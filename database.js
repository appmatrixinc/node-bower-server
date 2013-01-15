var Sequelize = require("sequelize");
var _ = Sequelize.Utils._ ;


var config = {
	database: 'aminc_my',
	host: 'localhost',
	port: 3306,
	login: 'root',
	password: 'fred',
};
var liveconfig = {
	database: 'dev_myappmatrix',
	host: '9874c6c3846579ab85e26d0d3380265a6e598e78.rackspaceclouddb.com',
	port: 3306,
	login: 'amdev',
	password: 'AppMatrix9!',
};


var Database = {
    init: function () {
      
		this.sequelize = new Sequelize(config.database, config.login, config.password, {
		  host: config.host,
		  port: config.port
		}),

        this.Package = this.sequelize.define('Package',
          {
            name: {
              type: Sequelize.STRING,
              unique: true,
              allowNull: false
            },
            url: {
              type: Sequelize.STRING,
              unique: true,
              allowNull: false,
              validate: {
                isGitUrl: function(value) {
                  if (!value.match(/^git\:\/\//)) {
                    throw new Error('is not correct format');
                  }
                  return this;
                }
              }
            },
            hits: {
              type: Sequelize.INTEGER,
              defaultValue: 0
            }
          } , {
          instanceMethods: {
            hit: function () {
              this.hits += 1 ;
              this.save();
            }
          }
        });
        return this;
    },

    onSync: function () {
        var addIndex = this.sequelize.getQueryInterface().addIndex('Packages', ['name']);
        addIndex.error(function(e) {
          if(e.toString() !== 'error: relation "packages_name" already exists'){
            throw e;
          }
        });
    }
};

module.exports = Object.create(Database);
