import fetch from 'node-fetch';

export const handler = async (event) => {
  try {
    const { fullName, phone, email, message } = JSON.parse(event.body);

    const data = {
      from: "noreply@yourdomain.com", // استخدم بريد نطاق خاص بك
      to: "your@email.com", // بريدك الشخصي لاستقبال الرسائل
      reply_to: email,
      subject: "رسالة جديدة من نموذج الاتصال",
      text: `الاسم: ${fullName}\nالهاتف: ${phone}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n${message}`,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
