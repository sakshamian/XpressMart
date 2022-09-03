import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John doe',
    email: 'admin2@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'jane doe',
    email: 'admin3@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
