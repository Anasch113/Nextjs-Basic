
import { Roboto } from 'next/font/google'
import Link from 'next/link'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  
  return (
    <main>
      <h1>home page</h1>
      

      {/* Use the className attribute to apply the font to the element */}
      <h1 style={{fontSize: '60px'}} className={roboto.className}>Welome to home page of <span style={{fontWeight:'900',     color: '#e9bf16'}}> nextjs</span> application</h1>



    <ul>
      <h3> <Link href={"/users"}>Users</Link> </h3>
    
   <h3><Link href={"/productlist2"}>Products</Link> </h3>  
     
    </ul>
    </main>
  )
}