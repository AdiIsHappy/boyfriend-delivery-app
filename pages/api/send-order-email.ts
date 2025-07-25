import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { recipientName, deliveryAddress } = req.body;
  const emails = ['ad2004sahu@gmail.com', 'b21083@students.iitmand.ac.in'];
  const resend = new Resend(process.env.RESEND_API_KEY); // Store your key in .env

  try {
    const { data, error } = await resend.emails.send({
      from: 'BF Shippers <onboarding@resend.dev>',
      to: emails,
      subject: 'Your Order Placed Sucessfully! 🎉',
      html: `
        <h1>New Boyfriend Ordered!</h1>
        <p>You've got a new order from <strong>${recipientName}</strong>.</p>
        <h2>Delivery Details:</h2>
        <p><strong>Address:</strong> ${deliveryAddress}</p>
        <p><strong>Delivery Date:</strong> August 29, 2025</p>
        <p>Get ready!</p>
      `,
    });
    console.log('Email sent successfully:', data);
    console.error('Error sending email:', error);
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error });}
    return res.status(200).json({ data });
  } catch (err) {
    console.error('Error in email handler:', err);
    return res.status(500).json({ error: err });
  }
}