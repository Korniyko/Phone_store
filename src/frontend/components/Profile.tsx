import React from "react";
import "./Profile.scss";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import { User } from "../../types";


type ProfileProps = {
    userProfile: User,
    deleteUser: (exitProfile: null) => void
}

const Profile = ({ userProfile, deleteUser }: ProfileProps) => {


    const history = useHistory()

    const logOutProfile = () => {
        const exitProfile = userProfile = null
        deleteUser(exitProfile)
        history.push('/')
    }

    return (
        <div className="profile">

            <div className="profileLogin">
                {userProfile?.login}
                {<Button onClick={() => logOutProfile()} label='Log Out' />}
            </div>
        </div>

    );
};

export default Profile;
