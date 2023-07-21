const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username && password) {
            if (!doesExist(username)) {
                users.push({ "username": username, "password": password });
                return res.status(200).json({ message: "User successfully registred. Now you can login" });
            } else {
                return res.status(404).json({ message: "User already exists!" });
            }
        }
        return res.status(404).json({ message: "Unable to register user." });
    });

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    //Write your code here
    res.send(JSON.stringify({ users }, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    //Write your code here
    const isbn = req.params.isbn;
    res.send(booksdb[isbn])
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  if (req.body.author){
    auth_user[req.body.author] = {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        }
}
res.send("The user" + (' ')+ (req.body.firstName) + " Has been added!");

});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    //Write your code here
    const title = req.params.title;
    res.send(books[title])
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    //Write your code here
    const review = req.params.review;
    res.send(books[review])
});

public_users.put("/:isbn", function (req, res) {
    const isbn = req.params.isbn;
    let books = books[isbn]
    if (books) { 
        let book = req.body.books; 
        if(book) {
            books["isbn"] = book
        }
        books[isbn]=book;
        res.send(`Detail of ${books} are updated.`);
    }
    else{
        res.send("Unable to find Book!");
    }
  });

  public_users.delete("/auth/review/:isbn", (req, res) => {
    const review = req.params.review;
    if (isbn){
        delete books[review]
    }
    res.send(`Book with the isbn  ${isbn} deleted.`);
  });

module.exports.general = public_users;
