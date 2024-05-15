const jwt = require('jsonwebtoken');
const secretKey = process.env.MY_SECRET_KEY; 

const generateToken = (user) => {
    const payload = {
        user: {
            id: user.id,
            email: user.email 
        }
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1h' }); 
};

module.exports={
    generateToken
}