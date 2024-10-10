'use strict';

module.exports = {
  async checkToken(ctx) {
    if (ctx.state.user) {
      return ctx.send({ message: 'Token is valid', user: ctx.state.user });
    } else {
      return ctx.unauthorized('Invalid token or user does not exist');
    }
  }
};
