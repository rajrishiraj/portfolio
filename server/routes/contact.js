import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      message,
    })

    await contact.save()

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
      },
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    res.status(500).json({ message: 'Server error. Please try again later.' })
  }
})

// GET /api/contact - Get all contact submissions (optional, for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({ message: 'Server error' })
  }
})

export default router

