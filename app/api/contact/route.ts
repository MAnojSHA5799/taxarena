import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const contactData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      serviceRequired: formData.get("serviceRequired") as string,
      message: formData.get("message") as string,
      submittedAt: new Date().toISOString(),
    }

    // Basic validation
    if (!contactData.firstName || !contactData.email || !contactData.message) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactData.email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    // Here you can add your email service integration
    // For example: SendGrid, Nodemailer, etc.
    console.log("Contact form submission:", contactData)

    // Simulate email sending (replace with actual email service)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // You can also save to database here
    // await saveToDatabase(contactData)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 },
    )
  }
}
