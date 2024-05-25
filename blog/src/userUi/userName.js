import './styles/userName.css'

const userName = ({
  name='Mike Owen',
  text_color='#F69A10',
  nameSize='30px'
}) => {
  return (
    <div className="username-div">
    <p size={nameSize} style={{color: text_color}}>{name}</p>
    </div>
  );
}

export default userName;
