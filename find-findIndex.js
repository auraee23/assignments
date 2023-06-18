//accepts array with object/key of username with string then returns the first object that matches the string passed to the function. not found then undefined.
function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }

//accepts same type array but remoces the object from array then returns. not found undefined  
function removeUser(usersArray, username) {
    let foundIndex = usersArray.findIndex(function(user){
      return user.username === username;
    })
    if(foundIndex === -1) return;
  
    return usersArray.splice(foundIndex,1)[0];
}