/**
 * email service
 */

import { factories } from '@strapi/strapi';
import { EmailConf, EmailTemplate } from "../model/model";

const sendOneMail = async (to, from, subject, html, attachments) => {
  const msg = {
    to,
    from,
    subject,
    html,
    attachments
  };
  try {
    await strapi.plugins['email'].services.email.send(msg);
  } catch (error) {
    console.error({to,from, subject,html, attachments: attachments.length}, 'Error sending email:', error);
  }
}


const fillTemplateWithData = (template, data) => {
  for (const [key, value] of Object.entries(data)) {
    const reg = new RegExp(`\\$\\{${key}\\}`);
    template = template.replace(reg, value);
  }
  return template;
}

export default factories.createCoreService('api::email.email',({ strapi }) => ({

  async send(recipients, templateCode, templateData, attachments) {
    console.log('send mail');
    const emailConf: EmailConf = await strapi.entityService.findOne('api::email.email', 1, {populate: '*'}) as unknown as EmailConf;
    const template: EmailTemplate = emailConf.templates.find(t => t.code == templateCode);
    if (!template) {
      console.error({templateCode: templateCode}, 'template not found');
      return
    }

    const filledTemplate = fillTemplateWithData(template.html, templateData) + "/n"+ emailConf.footer;
    const filledSubject = fillTemplateWithData(template.subject, templateData);

    recipients.forEach(to => {
      sendOneMail(to, template.from, filledSubject, filledTemplate, attachments)
    })
  },
}));
