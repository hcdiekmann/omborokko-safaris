import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const { name, email, subject, message } = request.body;
  const resend = new Resend(process.env['RESEND_API_KEY']);

  try {
    const data = await resend.emails.send({
      from: `${name} <${email}>`,
      to: ['Omborokko Safaris <omborokkosafaris@gmail.com>'],
      subject: subject,
      html: `<p>${message}</p>`,
    });
    return response
      .status(200)
      .json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error(error);
    return response.status(500);
  }
}
