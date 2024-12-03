import express from 'express';
import Login from '../models/UserLogin';

const router = express.Router();

router.post('/login', async (req, res) => {

    const { Username, Email, Password } = req.body;

    try{
        const newUser = new Login({ Username, Email, Password });
        await newUser.save();
        res.status(201).json({ message: "User logged in successfully", newUser});
    }

    catch(error) {
        console.error('error logging in:', error)
        res.status(400).send('error logging in: '+error.message);
    }
});
