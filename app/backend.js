const request = require("request");
const nodemailer = require("nodemailer");

const main = function (args, callback) {
    // get the client's ip address
    const ip = args["__ow_headers"]["x-client-ip"];

    // build a POST request to verify the captcha
    var r = {
        uri: "https://www.google.com/recaptcha/api/siteverify",
        method: "post",
        form: {
            secret: args["6Ld4LyQaAAAAAM-PDCx4W4EO-p1BbDJPqlwe-CvE"],
            response: args["g-recaptcha-response"],
            remoteip: ip,
        },
    };

    // return a Promise because we're about to do an asynchronous thing
    return new Promise((resolve, reject) => {
        // make HTTP request to verify the captcha
        request(r, (err, response, body) => {
            if (err) {
                return reject({
                    statusCode: 302,
                    headers: { location: args["FAILURE_URL"] },
                });
            }

            // it worked! We can now trust our data from the form
            const name = args["name"];
            const email = args["email"];
            const phone = args["phone"];
            const portfolioSize = args["portfolioSize"];
            const reachOut = args["reachOut"];

            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "dwstanley@integrityfinancialservicellc.com",
                    pass: "Transform2!",
                },
            });

            let mailOptions = {
                from: "dwstanley@integrityfinancialservicellc.com",
                to: "dstanley@integrityfinancialservicellc.com",
                subject: "New Social Lead",
                text: `New Lead from Landing Page\nName: ${name}\n email: ${email}\n Phone: ${phone}\n Portfolio Size: ${portfolioSize}`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });

            console.log(name, email, message);
            return resolve({
                statusCode: 302,
                headers: { location: args["SUCCESS_URL"] },
            });
        });
    });
};
