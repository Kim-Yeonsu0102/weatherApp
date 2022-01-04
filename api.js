// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => console.log(json,'json'))


axios.get('https://jsonplaceholder.typicode.com/users',{ params: { id: 1 } })
  .then(function (response) {
    // handle success
    console.log(response,'success');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  

































