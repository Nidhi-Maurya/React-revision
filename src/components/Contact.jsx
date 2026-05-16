export default function Contact(){
  return(
    <>
    <h1 className="font-bold text-2xl p-4 m-4 ">Contact Us Page</h1>

      <form>
    <div className="flex flex-col items-center justify-center">
      <input type="text" placeholder="Enter your name" className="border border-gray-300 p-2 m-2"/>
    <input type="email" placeholder="Enter your email" className="border border-gray-300 p-2 m-2"/>
   <textarea
  placeholder="Type Your Message"
  className="border border-gray-300 p-2 m-2"
/>
    <button type="submit" className="bg-blue-500 text-white p-2 m-2">Submit</button>

    </div>
      </form>

    </>
  )
}