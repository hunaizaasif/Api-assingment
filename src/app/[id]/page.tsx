import React from 'react'

const DaynamicBook = async  (props : any ) => {
    console.log(props);
    
  const url = await fetch (`https://simple-books-api.glitch.me/books/${props.params.id}`)
     console.log("single Book" );
     
       const response = await url.json()

  return (
    <h1 className='text text-7xl'>

      {response .id}   <br />
      {response .name} <br />
      {response.author}   <br />
      
      
    
      </h1>
  )
}

export default DaynamicBook
