import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const resend = new Resend(process.env['RESEND_API_KEY']);
  const {
    name,
    email,
    contactOption,
    message,
    accommodationType,
    startDate,
    endDate,
    adults,
    children,
  } = request.body;

  let extraDetails = '';
  if (contactOption === 'Booking') {
    extraDetails = `
      <p><strong>${accommodationType}</strong></p>
      <p><strong>From:</strong> ${startDate}</p>
      <p><strong>To:</strong> ${endDate}</p>
      <p><strong>Number of Adults:</strong> ${adults}</p>
      <p><strong>Number of Children:</strong> ${children}</p>
    `;
  }

  try {
    await resend.emails.send({
      from: 'admin@omborokkosafaris.com',
      to: ['Omborokko Safaris <omborokkosafaris@gmail.com>'],
      reply_to: email,
      subject: contactOption,
      html: `<head>
      <style>
          body {font-family: Arial, sans-serif;}
          h1 {color: #333;}
          p {font-size: 16px;}
          .message {border: 1px solid #ddd; padding: 10px; margin-top: 10px; border-radius: 5px;}
      </style>
  </head>
  <body>
      <h1>New ${contactOption} from ${name}</h1>
      <p><strong>Email:</strong> ${email}</p>
      ${extraDetails}
      <div class='message'>
          <p>${message}</p>
      </div>
  </body>`,
    });
    return response.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ error: 'Error sending email' });
  }
}
