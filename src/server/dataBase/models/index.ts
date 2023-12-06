import fs from 'fs';
import path from 'path';
import { DataTypes, Sequelize } from 'sequelize';
import process from 'process';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // eslint-disable-next-line global-require,import/no-dynamic-require
const config = require(`${__dirname}/../config/config.json`)[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] || 'local', config);
} else {
  sequelize = new Sequelize(config.database, config.login, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file: any) => (
    file.indexOf('.') !== 0
      && file !== basename
      && file.slice(-3) === '.ts'
      && file.indexOf('.test.ts') === -1
  ))
  .forEach((file: any) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const modelModule = require(path.join(__dirname, file));
    const model = modelModule(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;