const {sendSayHello, requestEstimate} = require('../helpers/mailer');

/**
 * Send Email
 * @public
 */
exports.sendSayHelloEmail = async (req, res, next) => {
  try {

    const data = {
      contactName: req.body.contactName,
      companyName: req.body.companyName,
      emailAddress: req.body.emailAddress,
      message: req.body.message,
    };

    const result = await sendSayHello(data);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.sendRequestEstimateEmail = async (req, res, next) => {
  try {

    const data = {
      contactName: req.body.contactName,
      companyName: req.body.companyName,
      emailAddress: req.body.emailAddress,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message,
      projectName: req.body.projectName,
      projectUrl: req.body.projectUrl,
      projectType: req.body.projectType,
      projectSize: req.body.projectSize,
      designServices: req.body.designServices,
      contentServices: req.body.contentServices,
      deploymentServices: req.body.deploymentServices,
    };

    console.log('email data: ', data);
    const result = await requestEstimate(data);
    console.log('email result: ', result);

    res.json(result);
  } catch (error) {
    next(error);
  }
};
