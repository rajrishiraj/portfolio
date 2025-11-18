# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and MongoDB.

## Features

- 🎨 Modern, clean UI with dark mode support
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with MongoDB backend
- 🌙 Dark/Light mode toggle
- 📄 Multiple sections: Home, About, Experience, Projects, Testimonials, Contact

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (Icons)

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- CORS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

4. Start MongoDB (if running locally):
```bash
# macOS with Homebrew
brew services start mongodb-community

# Or use MongoDB Atlas (cloud) and update MONGODB_URI in .env
```

5. Start the development servers:

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run dev:server
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

## Project Structure

```
portfolio/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   └── ChatButton.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── server/
│   ├── models/         # MongoDB models
│   │   └── Contact.js
│   ├── routes/         # API routes
│   │   └── contact.js
│   └── index.js        # Server entry point
├── public/             # Static assets
└── package.json
```

## Customization

### Update Personal Information

1. **Home Page**: Edit `src/pages/Home.jsx` to update your name, title, and description
2. **About Page**: Edit `src/pages/About.jsx` to update your bio
3. **Experience**: Edit `src/pages/Experience.jsx` to add/update your work experience
4. **Projects**: Edit `src/pages/Projects.jsx` to showcase your projects
5. **Testimonials**: Edit `src/pages/Testimonials.jsx` to add client testimonials
6. **Contact**: Update the email in `src/pages/Contact.jsx`

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and other styles in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

### Profile Picture

Replace the placeholder avatar in `src/pages/Home.jsx` with your own image:
1. Add your image to `public/` folder
2. Update the image source in the Home component

## Building for Production

1. Build the frontend:
```bash
npm run build
```

2. The production build will be in the `dist/` folder

3. To preview the production build:
```bash
npm run preview
```

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Response:**
```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET /api/contact
Get all contact submissions (for admin purposes).

### GET /api/health
Health check endpoint.

## License

MIT

## Contact

For questions or support, please open an issue or contact the repository owner.
