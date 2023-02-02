import React from "react"

export const  validate = (value) =>{
  if (value.length > 6) {
     alert("You have successfully logged in")
  } else {
    alert("You were unable to log in")
    alert("your username and password must be at least sixs letters or numbers")
  }
  
 
}
