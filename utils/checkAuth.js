import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log('Extracted Token:', token); // Log the token received

    if (token) {
        try {
            const decoded = jwt.verify(token, '#1234'); // Ensure this matches the secret used during token creation
            console.log('Decoded Token:', decoded); // Log the decoded token
            req.userId = decoded._id;
            next();
        } catch (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({
                message: "Invalid token"
            });
        }
    } else {
        console.log('No token provided'); // Log when no token is provided
        return res.status(403).json({
            message: "No access for the user"
        });
    }
};
