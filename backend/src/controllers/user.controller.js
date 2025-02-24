import httpStatus from 'http-status';
import { User } from '../models/user.model.js';
import bcrypt from 'bcryptjs';



const login = async (req, res) => {
    let { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(httpStatus.NOT_FOUND).json({ message: 'User not found' });

        // Compare passwords using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        }else{
          const token1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          const token = token1.toString('hex');
        user.token = token;
        await user.save();
        return res.status(httpStatus.OK).json({ message: 'User logged in successfully', token: user.token });
        }

      

        // Send response only once
        return res.status(httpStatus.OK).json({ message: 'User logged in successfully', token: token });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong' });
    }
};


const wrapAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
const register = wrapAsync(async (req, res) => {
      let { name, username, password } = req.body;
  
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: "Username already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ name, username, password: hashedPassword });
      await user.save();
  
      res.status(httpStatus.CREATED).json({ message: "User registered successfully" });
  });
export { login, register };