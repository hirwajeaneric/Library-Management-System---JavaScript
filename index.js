var library = [
    {
        title: 'The Digital Fortres',
        author: 'Dan Brown',
        availability: true,
    },
    {
        title: 'The Davinci Code',
        author: 'Dan Brown',
        availability: false,
    },
    {
        title: 'Long Eagle',
        author: 'Anonymous',
        availability: true,
    },
    {
        title: 'Atomic Habits',
        author: 'James Clair',
        availability: false,
    },
];

const addBooks = (book) => {
    console.log(library.length);
    library.push(book);
    console.log(library.length);
};