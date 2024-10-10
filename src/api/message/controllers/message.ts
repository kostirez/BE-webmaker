/**
 * message controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::message.message', ({ strapi}) => ({

  async create(ctx) {


    const {body} = ctx.request;

    console.log('creating', body);
    let newMessage;
    try {
      newMessage = await strapi.entityService.create('api::message.message', {
        data: {
          ...body.data,
        },
      });
    } catch (err) {
      console.log({error: err, data: body.data}, 'Error creating new message in strapi');
    }

    console.log('new mssage', newMessage);

    await strapi.service('api::email.email').send(
        [ newMessage.mail, process.env.MAIL],
        "message",
        {
          name: newMessage.name,
          text: newMessage.text
        }, []);

    ctx.body = await this.sanitizeOutput(newMessage, ctx);
  }
}));
