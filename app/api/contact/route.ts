import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "danielfcchacon@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Check for errors in the result
    if (result.data?.id) {
      // Success - email sent
      return Response.json(
        {
          success: true,
          message: "Message received! I'll get back to you soon."
        },
        { status: 200 }
      );
    } else {
      console.error("Resend error:", result);
      return Response.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
