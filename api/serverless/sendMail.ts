import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const { name, email, contactOption, message } = request.body;
  const resend = new Resend(process.env['RESEND_API_KEY']);

  try {
    const data = await resend.emails.send({
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
      <h1>New ${contactOption}}</h1>
      <p><strong>Email:</strong> ${email}</p>
      <div class='message'>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
      </div>
  </body>`,
    });
    return response
      .status(200)
      .json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error(error);
    return response.status(500);
  }
}
