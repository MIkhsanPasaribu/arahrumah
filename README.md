# ArahRumah - Indonesian Real Estate Marketplace

ArahRumah is a MERN stack (MongoDB, Express.js, React, Next.js) web application that provides a platform for property listings in Indonesia.

## Features

- User authentication (login/register)
- Property listings with search and filters
- Property details with images and features
- User dashboard for managing properties
- Contact form for inquiries
- Responsive design

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **UI Libraries**: Heroicons, React Icons, Swiper, React Hook Form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=mongodb+srv://admin:arahrumah@arahrumah.vumoefv.mongodb.net/?retryWrites=true&w=majority&appName=arahrumah
JWT_SECRET=your_jwt_secret_key_should_be_very_long_and_secure
NEXT_PUBLIC_API_URL=http://localhost:3000
PASSWORD_ADMIN=arahrumah
```

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/arahrumah.git
   cd arahrumah
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create admin user (optional)

   ```bash
   npm run create-admin
   ```

4. Run the development server

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `/src/app` - Next.js app router routes and pages
- `/src/components` - React components
- `/src/lib` - Utility functions and database connection
- `/src/models` - MongoDB schemas
- `/public` - Static assets

## Color Palette

- **Black (#000000)** - Header/Footer
- **White (#FFFFFF)** - Primary background
- **Light Gray (#E5E5E5)** - Dividers
- **Emerald Green (#10B981)** - CTA buttons
- **Dark Gray (#6B7280)** - Body text

## User Types

- **Regular Users** - Can browse properties, save favorites, and contact property owners
- **Property Owners** - Can list properties for sale or rent
- **Admins** - Have full access to manage all users and properties

## API Routes

- `/api/auth/login` - User login
- `/api/auth/register` - User registration
- `/api/properties` - List all properties
- `/api/properties/[id]` - Get a specific property
- `/api/properties/create` - Create a new property

## Admin Access

To access the admin panel:

1. Run `npm run create-admin` to create an admin user
2. Login with email: admin@arahrumah.com and password from PASSWORD_ADMIN env variable

## Development Notes

- The application uses Next.js App Router for routing
- Tailwind CSS is used for styling
- MongoDB is used for data storage with Mongoose as the ODM
- JWT is used for authentication
- Images are currently placeholder SVGs for the MVP

## License

This project is licensed under the MIT License.
