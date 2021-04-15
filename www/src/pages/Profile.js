import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const Profile = () => {

  const { id } = useParams();
  const { users, fetchUsers,updateUser } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const user = users.find(r => r._id === id);


  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"



  useEffect(() => {
    if (user) {
      fetchUsers()
    }
  }, []);

  useEffect(() => {
    if (id) {
      const viewedObj = {
        profileViews: 1
      }
      updateUser(id, viewedObj)
      console.log(id, viewedObj , 'hart');
    }
  },[]);
  

  return (
    <div className="profileDiv">
      {user && <div className="checkWrapper">
        <div className="imgDiv">
          {user.profileImgURL ? <img className="profileIMG" src={user.profileImgURL} alt="" /> : <img className="profileIMG" src={defaultIMG} alt="" style={{width: '60%'} } />}
          {user.roles === 'Member' ? <p><VerifiedUserRoundedIcon fontSize="small"/><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small"/><span> {user.roles}</span></p>}
        </div>
        <div className="profileInfo">
          <p><span>Namn </span><p>{user.firstName}</p></p>
          <p><span>Efternamn </span><p>{user.lastName}</p></p>
          <p><span>Ålder </span><p>{user.age}</p></p>
          <p><span>kontakt </span><p>{user.email}</p></p>
          <p><span>Om mig </span><p>{user.aboutMeText}</p></p>
          <p> </p>
        </div>
        <div className="profileInfo2">
          <p><span>Medlem sedan </span><p>{user.createdTime}</p></p>
          <p><span>Senast inloggad </span><p>{user.lastTimeOnline}</p></p>
          <p><span>Antal besökare </span><p>{user.profileViews}</p></p>
        </div>
       
      </div>}
    </div>


  );
}
export default Profile;