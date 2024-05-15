const fs = require("fs");
const { generateToken } = require("../middlewares/auth");
const bcrypt = require("bcrypt")

const readData = () => {
  try {
    const data = fs.readFileSync("data.json");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

const signup = async (email, password) => {
    if (!email || !password) {
        return null;
    }
    const users = readData();
    if (users.some((u) => u.email === email)) {
        return null;
    }
    const newUser = { email, password };
    users.push(newUser);
    writeData(users);
    const token = generateToken(newUser);
    return { token, newUser };
};
  

const login = (email, password) => {
  const users = readData();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return null;
  }
  const token = generateToken(user);
  return {token, user};
};

module.exports = { login, signup };
