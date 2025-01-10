import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        
        response.map((book: { id: number; name: string}) => (
          
          <div key={book.id} className="flex flex-col items-center justify-center min-h-screen py-2">
          
            <Link href={`${book.id}`}>
              <h1 className="text-7xl">
              {book.id}  &nbsp; &nbsp; {book.name}
                
                {/* {book.auther} */}

              </h1>
            </Link>

           
            
          </div>
        ))
      }
    </main>
  );
}


