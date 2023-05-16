import { Link } from "react-router-dom"

const Home=()=>{
    return (
        <div className="">
             <h1 className="text-3xl font-bold underline bg-amber-500">
        Hello world!
      </h1>
        <Link to="/">Home</Link>
        </div>
       
    )
}
export default Home