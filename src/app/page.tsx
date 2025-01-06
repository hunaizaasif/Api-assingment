import Link from "next/link"
export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const response = await url.json()
  console.log(response)
  return (
    <main>
      {
        response.map((book: any) => (
          <div>
          
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


