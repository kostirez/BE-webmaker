export interface EmailTemplate {
  to: string;
  from: string;
  subject: string;
  html: string
  code: string;
}

export interface EmailConf {
  templates: EmailTemplate[];
  footer: string;
}
