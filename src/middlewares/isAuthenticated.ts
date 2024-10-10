'use strict';

module.exports = async (ctx, next) => {
  // Check if the user is authenticated
  if (ctx.state.user) {
    // User is authenticated, proceed to the next middleware/controller
    await next();
  } else {
    // User is not authenticated, throw unauthorized error
    ctx.unauthorized('User is not authenticated');
  }
};
