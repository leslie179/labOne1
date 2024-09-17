import Image from "../atom/Image";
import Name from "../atom/Name";
function Profile({ profile }) {
    return <div>
        <Image url={profile.pic} />
        <Image url={profile.pic} />
    </div>
}

export default Profile;