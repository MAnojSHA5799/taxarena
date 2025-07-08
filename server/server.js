const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: 'https://www.taxarena.in', // allow your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "mansingh78605@gmail.com",
    pass: process.env.EMAIL_PASS || "ygrc wgur auva srjf",
  },
})



// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, serviceRequired, message } = req.body

    // Validation
    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      })
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "manojshakya54@gmail.com",
      subject: "New Contact Form Submission - Tax Arena",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #92400e; color: white; padding: 20px; text-align: center;">
            <h1>Tax Arena - New Contact Inquiry</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #92400e;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName || ""}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service Required:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${serviceRequired || "Not specified"}</td>
              </tr>
            </table>
            <h3 style="color: #92400e; margin-top: 20px;">Message:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #92400e; margin-top: 10px;">
              ${message}
            </div>
            <p style="margin-top: 20px; color: #666;">
              <strong>Submitted on:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>
        </div>
      `,
    }   

    // Send email
    await transporter.sendMail(mailOptions)

    res.json({
      success: true,
      message: "Thank you for your message! We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    })
  }
})

// Appointment form endpoint
app.post("/api/appointment", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, serviceType, preferredDate, preferredTime, message } = req.body

    // Validation
    if (!firstName || !email || !phone || !serviceType || !preferredDate) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      })
    }


    // Email content for appointment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mansingh78605@gmail.com",
      subject: "New Appointment Request - Tax Arena",
      html: `

        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #92400e; color: white; padding: 20px; text-align: center;">
            <h1>Tax Arena - New Appointment Request</h1>
          </div>
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2 style="color: #92400e;">Appointment Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName || ""}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${serviceType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${preferredTime || "Flexible"}</td>
              </tr>
            </table>
            ${
              message
                ? `
              <h3 style="color: #92400e; margin-top: 20px;">Additional Message:</h3>
              <div style="background-color: white; padding: 15px; border-left: 4px solid #92400e; margin-top: 10px;">
                ${message}
              </div>
            `
                : ""
            }
            <p style="margin-top: 20px; color: #666;">
              <strong>Submitted on:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    res.json({
      success: true,
      message: "Your appointment request has been submitted! We will contact you within 24 hours to confirm.",
    })
  } catch (error) {
    console.error("Appointment form error:", error)
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running", timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

