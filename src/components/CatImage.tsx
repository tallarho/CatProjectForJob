import styled from 'styled-components'

const Cat = styled.img`
  width: 100%;
`
interface Props{
  img:string,
  
}

const CatImage = ({img}: Props) => {

  return (
    <div>
        {img && <Cat src={img} alt="cat-image"/>}
    </div>
  )
}

export default CatImage