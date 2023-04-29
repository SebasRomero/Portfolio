import { NextApiRequest, NextApiResponse } from "next";
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        
    const { name, phoneNumber, email, subject, message } = req.body
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: API_KEY });
    
    const messageData = {
        from: 'Contact Form <mailgun@sandbox-123.mailgun.org>',
        to: 'sebastian_eromero@hotmail.com',
        subject: 'New contact form!',
        text: `Hello, you have a new message from you web! 
        name: ${name} 
        Email: ${email} 
        Phone: ${phoneNumber} 
        Subject: ${subject} 
        Message: ${message}`,
    };

    try {
        await client.messages.create(DOMAIN, messageData)
    } catch (err: any) {
        console.log('Error sending email', err)
    }

    res.status(200).json({ submitted: true })
}