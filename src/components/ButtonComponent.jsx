import { useNavigate } from 'react-router-dom';



function ButtonComponent(props) {

    const{
     color,
     label,
     customClass,
     width,
     height,
     onClick
    } = props
  

    
    return (
      <div>
      <button onClick={(e) => onClick(e)} style={{ width: width, height: height}} className={customClass}>
        {label}
      </button>
      </div>
    )
  }
  
  export default ButtonComponent
  