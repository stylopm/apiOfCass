// const url = 'http://localhost:3000/books';

// axios.get(url).then(resp => {
//     console.log(resp.data);
// });

console.log('Metodo axios');
let url = 'http://localhost:3000/books';

const createBook = () => {
    console.log('Function createBook');
    const newBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    axios.post(url, newBook).then(resp => {
        console.log(resp.data);
    })
}
const readBooks = () => {
    axios.get(url).then(resp => {
        console.log(resp.data);
    });
}
const updateBook = () => {
    console.log('updateBook');
    const updateBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    axios.put(`${url}/4`, updateBook).then(resp => {
        console.log(resp.data);
    })
}
const deleteBook = () => {
    axios.delete(`${url}/4`).then(resp => {
        console.log(resp.data);
    })
}