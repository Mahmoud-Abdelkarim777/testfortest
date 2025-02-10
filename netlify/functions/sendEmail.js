import { Resend } from 'resend';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: 'mabdelkarimkhalaf777@gmail.com', // استخدم بريدًا مسجلاً في Resend//-
      to: 'elqanony777@gmail.com',
      subject: `رسالة جديدة من ${name}`,
      reply_to: email,
      text: `الاسم: ${name}\nالإيميل: ${email}\n\nالرسالة:\n${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
