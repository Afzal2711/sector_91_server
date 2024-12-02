import mongoose from 'mongoose';

const UserLoginSchema = new mongoose.Schema({
    Username: { type: String, required: true},
    Email: { type: String, required: true, unique: true},
    Password: { type: String, required: true},
});

const Login = mongoose.model('userLogin',UserLoginSchema);

export default Login;