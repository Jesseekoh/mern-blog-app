const UserBio = ({ data }) => {
  return (
    <div className='bio-div'>
      <p>{data.bio}</p>
      <p id='address-info'>{data.country}</p>
      <p id='address-info'>{data.email}</p>
    </div>
  );
}
export default UserBio;
