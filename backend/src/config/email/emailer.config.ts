import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer";

export class Emailer 
{
  protected static transporter: Mail;

  public static setUpTransporter()
  {
    Emailer.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b96dc30d40e540",
        pass: "2dab0e45f6098c"
      }
    });
  }

  public static sendEmail(options: Mail.Options)
  {
    if (!Emailer.transporter){
      console.log("Transporter not setup.");
      return;
    }

    Emailer.transporter.sendMail(options)
    .then(
      val =>    console.log(`Email: ${options.subject}\nto: ${options.to}\nSent Successfuly`),
      reason => console.log(`EMAIL NOT SENT: ${reason}`)
    );
  }
}

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b96dc30d40e540",
    pass: "2dab0e45f6098c"
  }
});

export { transporter }