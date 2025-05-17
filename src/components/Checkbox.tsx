import { useEffect, useRef, useState } from "react";



const Checkbox = ({fetchCat, changeToggle, toggle}: {fetchCat: () => void, changeToggle: () => void, toggle:boolean}) => {
  const [checked, setChecked] = useState<boolean>(false)
  let interval = useRef<number | null>(null)
  useEffect(() => {
    if(!toggle) return 
    if(checked){
      interval.current = setInterval(() => {
        console.log(123);
        (() => fetchCat())()
      }, 1000)
    } else {
      if(interval.current !== null){
        clearInterval(interval.current)
      }
    }

    return () => {
      if(interval.current !== null){
        clearInterval(interval.current)
      }
    }

  },[checked])

  return (
    <div>
      <p>
        <input
         type="checkbox" 
         onClick={() => changeToggle()}
        />
        <span>Enable</span>
      </p>
      <p>
        <input 
         type="checkbox"
         checked={checked}
         onChange={(e) => setChecked(e.target.checked)}
         onClick={() => console.log(checked)}
        />
        <span>Auto-refrash every 5 second</span>
      </p>
    </div>
  );
};

export default Checkbox;