const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const EmailTemplate = require('email-templates').EmailTemplate;
const dotenv = require('dotenv');
dotenv.config({});

const options = {
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD,
  }
};

const transporter = nodemailer.createTransport(sgTransport(options));

const sayHello = transporter.templateSender(
  new EmailTemplate('api/templates/sayHello'),
  {
    from: process.env.MAIL_FROM_ADDRESS
  }
);

const requestEstimate = transporter.templateSender(
  new EmailTemplate('api/templates/requestEstimate'),
  {
    from: process.env.MAIL_FROM_ADDRESS
  }
);

exports.sendSayHello = (data) => {
  return sayHello(
    {
      to: data.emailAddress,
      subject: 'Say Hello'
    },
    {
      contactName: data.contactName,
      companyName: data.companyName,
      message: data.message
    }
  );
};

exports.requestEstimate = (data) => {
  return requestEstimate(
    {
      to: data.emailAddress,
      subject: 'Request Estimate'
    },
    {
      contactName: data.contactName,
      companyName: data.companyName,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      message: data.message,
      projectName: data.projectName,
      projectUrl: data.projectUrl,
      projectType: data.projectType,
      projectSize: data.projectSize,
      designServices: data.designServices,
      contentServices: data.contentServices,
      deploymentServices: data.deploymentServices,
    });
};
