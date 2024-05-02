export const routes = function (app: any): void {
    app.use('/api/user', require('./src/api/signup'));
    app.use('/api/UserDevice', require('./src/api/usersDevices'));
    app.use('/api/circle', require('./src/api/circle'));
  }