import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Componets/Navber'
import Cards from './Componets/Cards'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment  } from './Slices/counterSlice'
  import { ToastContainer, toast ,Bounce } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";




function App() {



  // const [product, setProduct] = useState([])

  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  const[task,setTask]=useState("") 
  const[cng,setCng]=useState("")
  const[error,setError]=useState("")

  const notify = () => toast.error('🦄 please fil the input!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });


  const handleChange = (e) => {
    setTask(e.target.value)
  }
  

  const handleClick = (e) => {
    e.preventDefault() 
    if ( task == "") {
      notify()
    }else{
      const db = getDatabase();
      const key = Date.now();
      const todoPath = `todos/${key}`;
      set(ref(db, todoPath), {
        TodoTask: task,
        createdAt: new Date().toISOString()
      })
      .then(() => {
        toast.success('Todo saved to Firebase')
        setTask('')
      })
      .catch((err) => {
        console.error('Firebase write failed:', err)
        toast.error('Failed to save todo')
      })
    }
    
  }

  // useEffect(() => {
  //   fetch('https://dummyjson.com/recipes')
  //     .then(res => res.json())
  //     .then((data) => setProduct(data.recipes));
  // }, [])



  return (
    <>
      {/* <div className='flex flex-wrap justify-between gap-2 container m-auto'>
        {
          product.map((items) => {
            return (
              <Cards
                ke

       {/* <div className='container m-auto mt-30'>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch( increment ())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch( decrement ())}
        >
          Decrement
        </button>
        
      </div>
    </div> */}

    <div className='container m-auto w-full h-[500px]  mt-30 text-center border-[#F2F4F7]  px-4 py-3 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)] '>
        <div className='mt-20'>
          <h1  className='text-4xl '> Todo Task Application</h1>
          <div className='mt-5'>
            <div >
            <label className='mt-4' htmlFor="Todo task">Add your todo task</label>
            </div>
            <input type="text"  className='ml-2 text-black border-2  px-2' placeholder='Add your todo task' onChange={handleChange}/>
            <button className='mt-5 block m-auto text-center px-10 py-3 rounded-full bg-black text-white' onClick={handleClick}>click</button>
          </div>
        </div>
    </div>


    </>
  )
}

export default App
