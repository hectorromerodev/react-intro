import { v4 as uuidv4 } from 'uuid';

const products = [
    {
        id: uuidv4(),
        name: 'Apple',
        price: 199.99,
        description: 'A delicious apple',
        imageUrl: `https://picsum.photos/150/150?random=${uuidv4()}`
    },
    {
        id: uuidv4(),
        name: 'Banana',
        price: 123.66,
        description: 'A delicious banana',
        imageUrl: `https://picsum.photos/150/150?random=${uuidv4()}`
    },
    {
        id: uuidv4(),
        name: 'Orange',
        price: 5920.69,
        description: 'A delicious orange',
        imageUrl: `https://picsum.photos/150/150?random=${uuidv4()}`
    },
    {
        id: uuidv4(),
        name: 'Strawberry',
        price: 23.33,
        description: 'A delicious strawberry',
        imageUrl: `https://picsum.photos/150/150?random=${uuidv4()}`
    },
    {
        id: uuidv4(),
        name: 'Watermelon',
        price: 1.99,
        description: 'A delicious watermelon',
        imageUrl: `https://picsum.photos/150/150?random=${uuidv4()}`
    },
];

export default products;