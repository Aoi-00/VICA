export type User = {
    id: number;
    name: string;
    role: string;
    date: Date;
};

export type Book = {
    id: number;
    title: string;
    description: string;
    genre: string[];
    author: string;
    year: string;
    availability: number;
    lastBorrower: string;
};

export const Users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        role: 'admin',
        date: new Date('2022-07-07')
    },
    {
        id: 2,
        name: 'Tom',
        role: 'editor',
        date: new Date('2022-07-08')
    },
    {
        id: 3,
        name: 'Hooka',
        role: 'member',
        date: new Date('2022-07-10')
    },
    {
        id: 4,
        name: 'Yangyang',
        role: 'member',
        date: new Date('2022-07-11')
    }
];

export const Books: Book[] = [
    {
        id: 1,
        title: 'Study Group',
        description: 'A teen who loves studying',
        genre: ['School life', 'Drama', 'Martial Arts'],
        author: 'Harry',
        year: '2022',
        availability: 5,
        lastBorrower: 'Tom'
    },
    {
        id: 2,
        title: 'Lord Of The Flies',
        description:
            'Lord of the Flies is a 1954 novel by the Nobel Prize-winning British author William Golding. The plot concerns a group of British boys who are stranded on an uninhabited island and their disastrous attempts to govern themselves.',
        genre: ['Drama', 'Tragedy'],
        author: 'William Golding',
        year: '1954',
        availability: 2,
        lastBorrower: 'John Doe'
    },
    {
        id: 3,
        title: 'Romeo and Juliet',
        description:
            "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young Italian star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and, along with Hamlet, is one of his most frequently performed plays.",
        genre: ['Romance', 'Drama'],
        author: 'William Shakespeare',
        year: '1597',
        availability: 1,
        lastBorrower: 'Tom'
    },
    {
        id: 4,
        title: 'Omniscient Reader',
        description:
            "Dokja was an average office worker whose sole interest was reading his favorite web novel 'Three Ways to Survive the Apocalypse.' But when the novel suddenly becomes reality, he is the only person who knows how the world will end. Armed with this realization, Dokja uses his understanding to change the course of the story, and the world, as he knows it.",
        genre: ['Drama', 'Martial Arts'],
        author: 'Log',
        year: '2018',
        availability: 1,
        lastBorrower: 'John Doe'
    },
    {
        id: 5,
        title: 'The Remarried Empress',
        description:
            'Navier Ellie Trovi was an empress perfect in every way -- intelligent, courageous, and socially adept. She was kind to her subjects and devoted to her husband. Navier was perfectly content to live the rest of her days as the wise empress of the Eastern Empire. That is, until her husband brought home a mistress and demanded a divorce. “I accept this divorce… And I request an approval of my remarriage.” In a shocking twist, Navier remarries another emperor and retains her title and childhood dream as empress. But just how did everything unfold?',
        genre: ['Romance', 'Tragedy'],
        author: 'Alphatart',
        year: '2019',
        availability: 3,
        lastBorrower: 'Hooka'
    }
];
