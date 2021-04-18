import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import '../style/UserItem.css'
import { UserContext } from '../contexts/UserContextProvider'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import NotInterestedRoundedIcon from '@material-ui/icons/NotInterestedRounded';
import { makeStyles } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';
import ModalTemplate from './ModalTemplate';

const UserItem = ({ user }) => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  const history = useHistory();
  const { whoAmI } = useContext(UserContext);
 const [open, setOpen] = useState(false);
  const goToProfilePage = () => {
    history.push('/users/' + user._id);
  }

    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="userItemDiv">

      <div className="profileCard">
        <div className="imageCard">
          {user.profileImgURL ? <img className="profileIMG" src={user.profileImgURL} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
          {user.banTime ? <NotInterestedRoundedIcon fontSize="small" color="secondary" style={{marginLeft: '-25px'}} /> : ''}
          {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
        </div>
        <div className="infoCard">
          <p onClick={goToProfilePage}><PersonRoundedIcon fontSize="small"/> <span className="nameSpan"> {user.firstName} {user.lastName}</span></p>
          <p><RestoreRoundedIcon fontSize="small" />{user.lastTimeOnline ? <p className="timeP">{user.lastTimeOnline.substring(0,10)}</p> : <span style={{color: 'grey'}}>  Never</span>}</p>
          <p><LocationOnIcon fontSize="small" />{user.country}</p>
          {whoAmI.roles === 'Administator' && <p><SettingsRoundedIcon style={{ cursor: 'pointer' }} fontSize="small" /> <span onClick={handleOpen} className="clickableIcon">Hantera</span></p>}
        </div>
        <div className="iconCard">        
        </div> 
      </div>

      <ModalTemplate
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
          
    </div>
    );
  }

export default UserItem;