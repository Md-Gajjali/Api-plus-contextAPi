import { useEffect, useState } from 'react'
import './App.css'
import Navber from './Componets/Navber'
import Cards from './Componets/Cards'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment  } from './Slices/counterSlice'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { getDatabase, ref, set, push, onValue } from "firebase/database";




function App() {



  // const [product, setProduct] = useState([])

  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  const [task, setTask] = useState("")
  const [Todo, setTodo] = useState([])

  // const [cng, setCng] = useState("")
  // const [error, setError] = useState("")

  const notify = () => {
    task == "" ?
      toast.error('Inter your task', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }) : toast.success(' Your task has been successfuly added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
  }


  const handleChange = (e) => {
    setTask(e.target.value)
  }


  const handleClick = (e) => {

    e.preventDefault()

    if (task == "") {
      notify()
    } else {

      const db = getDatabase();
      const NewRef = push(ref(db, "Todos"),)

      set(NewRef, {
        Todos: task,
      }).then(() => {
        notify();
        setTask("");
      })

    }

  }


  useEffect(() => {
    const db = getDatabase();
    const TodoRef = ref(db, "Todos");
    const Arry = []
      console.log(Arry);

    
    onValue(TodoRef, (snapshot) => {
      // const data = snapshot.val();
      snapshot.forEach((item)=>{
        Arry.push(item.val())
        setTodo(Arry)
        
      })
      // Arry.push(data)
      // setTodo(Arry)
      
    });
  }, [])

  console.log(Todo);
  
 
  

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



      {/* <form classname="max-w-sm mx-auto mt-30 border-[#F2F4F7] bg-amber-300 rounded-2xl  w-full px-10 py-10 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
        <h1 classname="text-2xl text-center mb-10">Todo App</h1>
        <div classname="mb-5">
          <label htmlfor="text" classname="block mb-2.5 text-sm font-medium text-heading">Add todo task</label>
          <input type="text" value={task} id="email" 
          classname="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
          placeholder="Add Todo task" />
        </div>
        <button type="submit" onClick={handleClick} 
        classname="text-white bg-brand box-border border border-transparent hover:bg-brand-strong   shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5"  
         >Submit</button>
      </form> */}


      <form className="max-w-sm mx-auto mt-30 border-[#F2F4F7] bg-amber-300 rounded-2xl w-full px-10 py-10 shadow-[inset_0px_2px_4px_0px_rgba(184,196,243,0.14),0px_3px_10px_0px_rgba(16,24,40,0.1)]">
        <h1 className='text-2xl text-center mb-10'>Todo App</h1>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium">Add todo task</label>

          <input
            type="text"
            onChange={handleChange}
            value={task}
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5"
            placeholder="Add Todo task"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-600 block m-auto w-[130px] hover:bg-blue-800 rounded-lg text-sm px-4 py-2.5"
          onClick={handleClick}
        >
          Submit
        </button>

        <div className='mt-5'>
          <ul className=" text-sm  w-full font-medium text-heading bg-neutral-primary-soft  rounded-base ">
            {
              Todo.map((item)=>{
                return(

                  <li className="w-full px-4 py-2 border-b border-default rounded-t-lg ">{item.Todos}</li>
                )
              })
            }
          </ul>
        </div>
      </form>


    </>
  )
}

export default App
