import { useUser } from "../main";
import "../App.css"

export const Profile = () => {
    const { user: {name, bio, img} } = useUser();
    return (
    <>
        <h2>Profile</h2>
        <img id="profile_img" src={img}></img>
        <p><strong>Name: {name}</strong></p>
        <p><strong>Bio: </strong>{bio}</p>
    </>
    )
}