var library = [
    {
        title: 'The Digital Fortress',
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
    {
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        availability: true,
    },
];

const addBooks = (book) => {
    console.log(library.length);
    library.push(book);
    console.log(library.length);
};
