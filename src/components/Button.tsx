
const Button = ({fetchCat, toggle}:{fetchCat: () => void, toggle:boolean}) => {

  return (
    <div>
        <button 
        onClick={() => {
          if(toggle){
            fetchCat()
          } return
        }}
        >Get cat</button>
    </div>
  )
}

export default Button