# Tax Arena Website

A comprehensive tax filing and business solutions website built with Next.js and Node.js backend.

## Features

- **Homepage**: Hero slider, services overview, client testimonials
- **About Page**: Company information and values
- **Services Page**: Detailed service listings with pricing
- **Contact Page**: Contact form with Google Maps integration
- **Appointment Page**: Online appointment booking system
- **Backend Server**: Node.js server with email functionality

## Setup Instructions

### Frontend (Next.js)

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

### Backend Server

1. Navigate to the server directory:
\`\`\`bash
cd server
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a `.env` file with your email credentials:
\`\`\`env
PORT=5000
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
\`\`\`

4. Start the server:
\`\`\`bash
npm run dev
\`\`\`

### Email Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password in the `.env` file

## Email Configuration

Both contact and appointment forms send emails to: `manojshakya54@gmail.com`

## API Endpoints

- `POST /api/contact` - Contact form submission
- `POST /api/appointment` - Appointment booking
- `GET /api/health` - Server health check

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Deployment

1. Deploy the Next.js frontend to Vercel
2. Deploy the Node.js backend to your preferred hosting service
3. Update the API URLs in the frontend to point to your deployed backend

## Support

For any issues or questions, contact: taxarenaonline@gmail.com
