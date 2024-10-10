
module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID'),
    },
    settings: {
      defaultFrom: env('MAIL'), // Your verified SendGrid email
      defaultReplyTo: env('MAIL'), // Reply-to email
    },
  },
});
