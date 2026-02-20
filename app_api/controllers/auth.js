const jwt = require('jsonwebtoken');

const mockUser = {
  username: 'admin',
  password: 'password'
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ username }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid login credentials' });
  }
};