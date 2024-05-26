import { useParams } from 'react-router-dom';

const Profile = () => {
  const { profileId } = useParams();

  return (
    <div className="text-center">
      <h1>Hello world my name is jesse sdlsjldfjsldg lsdlfgks dkskl</h1>
      <h1 className="break-words">{profileId}</h1>
    </div>
  );
};

export default Profile;
