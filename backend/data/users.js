import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Taco Floofball',
        email: 'Taco@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Nacho Lupin',
        email: 'Nacho@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Barry Bear',
        email: 'Barry@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users;