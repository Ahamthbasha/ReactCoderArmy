import React,{useState,useEffect,useCallback} from 'react'
import { useMemo } from 'react'

// const Fibonocci = () => {
//     const [number,setNumber]=useState(null)

//     function fibLogic(n){
//         if(n<=1){
//             return n
//         }
//         return fibLogic(n-1)+fibLogic(n-2)
//     }
//     const result=useMemo(()=>{
//        return fibLogic(number)
//     },[number])

//   return (
//     <div className='inputFibo'>
//         <h2>Fibonocci number is {result}</h2>
//       <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
//     </div>
//   )
// }

//useEffect

// const Fibonocci = () => {
//     const [number,setNumber]=useState("")
//     const [result,setResult]=useState(null)

//     function fibLogic(n){
//         if(n<=1){
//             return n
//         }
//         return fibLogic(n-1)+fibLogic(n-2)
//     }
    
//     useEffect(()=>{
//         if(number!=""){
//             setResult(fibLogic(Number(number)))
//         }else{
//             setResult(null)
//         }
//     },[number])

//   return (
//     <div className='inputFibo'>
//         <h2>Fibonocci number is {result}</h2>
//       <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
//     </div>
//   )
// }

//useCallback
const Fibonocci = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  // Memoize the Fibonacci logic function using useCallback
  const fibLogic = useCallback((n) => {
    if (n <= 1) {
      return n;
    }
    return fibLogic(n - 1) + fibLogic(n - 2);
  }, []);

  useEffect(() => {
    if (number !== "") {
      setResult(fibLogic(parseInt(number))); // Convert number to integer
    }
  }, [number, fibLogic]); // Depend on both number and fibLogic

  return (
    <div className="inputFibo">
      <h2>Fibonacci number is {result}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
    </div>
  );
};

export default Fibonocci
