---

# Next.js Blog Template

A simple blog template built with **Next.js**. This project integrates **DaisyUI** for styling, **Prisma** and **MongoDB** for database management, and **Lucia Auth** for secure authentication. Note that this template is a work in progress.

## Features

- **DaisyUI**: Tailwind CSS-powered component library for easy, customizable styling.
- **Prisma + MongoDB**: Prisma ORM with MongoDB backend for flexible data modeling and powerful database management.
- **Lucia Auth**: Authentication setup for secure, hassle-free user login and registration.

## Getting Started

### Prerequisites

- **MongoDB** instance or MongoDB Atlas
- **Prisma CLI** for database migrations and schema management

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/nextjs-blog-template.git
   cd nextjs-blog-template
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**:

   Create a `.env` file in the root directory and add your database connection and authentication keys:

   ```plaintext
   DATABASE_URL="mongodb://localhost:27017/yourdbname"
   NEXTAUTH_SECRET="your_random_secret"
   ```

4. **Initialize Prisma**:

   Generate the Prisma client and apply any migrations:

   ```bash
   prisma generate
   prisma db push
   ```

5. **Run the Development Server**:

   ```bash
   npm run dev
   ```
   
## Customization

- **Styling**: Modify theme and components in `tailwind.config.js` and `daisyui.config.js`.
- **Database Models**: Adjust models in `prisma/schema.prisma` to fit your blog’s data structure.
- **Authentication**: Customize authentication flows in `/lib/server/auth`.
