'use server'


import nodemailer from 'nodemailer'

import { contactFormSchema, type ContactFormValues } from '@/lib/schemas';

export async function sendContactEmail(data: ContactFormValues) {
    const result = contactFormSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: 'Invalid form data' }
    }

    const { name, email, company, department, message } = result.data

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER || 'no-reply@supercx.co'}>`, // sender address
            to: process.env.CONTACT_EMAIL || 'lohith@supercx.co', // receiver address
            replyTo: email,
            subject: `New Contact Form Submission: ${department} - ${name}`,
            text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'N/A'}
        Department: ${department}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        }

        // Send email
        // If we don't have credentials, we'll just log it for dev purposes
        if (!process.env.SMTP_USER) {
            console.log('----------------------------------------');
            console.log('MOCK EMAIL SEND (Missing SMTP_USER env var)');
            console.log(mailOptions);
            console.log('----------------------------------------');
            return { success: true, message: 'Message sent successfully (Mock mode)' };
        }

        await transporter.sendMail(mailOptions)

        return { success: true, message: 'Message sent successfully!' }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Failed to send message. Please try again later.' }
    }
}
