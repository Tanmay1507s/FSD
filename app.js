import express from 'express';
import fs from 'fs';

const app = express();

app.use(express.json());

// Read and parse books.json
const bookData = JSON.parse(
    fs.readFileSync("./data/books.json", "utf8")
);

// GET all books
app.get("/api/v1/books", (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            data: {
                books: bookData
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal Server Error"
        });
    }
});

// GET a single book by ID
app.get("/api/v1/books/:id", (req, res) => {
    try {
        console.log("Requested ID:", req.params.id);

        const book = bookData.find(
            book => book.id === req.params.id
        );

        if (!book) {
            return res.status(404).json({
                status: "Fail",
                message: "Book not found"
            });
        }

        res.status(200).json({
            status: "Success",
            data: {
                book: book
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal Server Error"
        });
    }
});

// POST a new book
app.post("/api/v1/books", (req, res) => {
    try {
        const newBook = req.body;

        bookData.push(newBook);

        fs.writeFileSync(
            "./data/books.json",
            JSON.stringify(bookData, null, 2)
        );

        res.status(201).json({
            status: "Success",
            data: {
                book: newBook
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "Fail",
            message: "Internal Server Error"
        });
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});