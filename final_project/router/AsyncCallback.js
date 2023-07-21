var promise = new Promise( (resolve, reject) => {

    let books = 'title'
  
    if (books === 'tile') {
     resolve("Promise resolved successfully");
    }
    else {
     reject(Error("Promise rejected"));
    }
   });
  
   let obj = {newName: ''};
  
   promise.then( result => {
    this.setState({name: result});
   }, function(error) {
    this.setState({name: error});
   });
