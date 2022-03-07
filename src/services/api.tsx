type User = {
    id: string;
    name: string;
    email: string;
    created_at: string;
}

type Data = {
    totalCount: number;
    users: User[];
}

export const data : Data = {
    totalCount: 2,
    users: [{
        id: "001",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "002",
        name: "Jesus",
        email: "jesus@paraiso.com",
        created_at: "22/02/2022",
    }, {
        id: "003",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "004",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "005",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "006",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "007",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "008",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "009",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "010",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    }, {
        id: "011",
        name: "David",
        email: "dwbarros@gmail.com",
        created_at: '07/02/2022',
    },]
}