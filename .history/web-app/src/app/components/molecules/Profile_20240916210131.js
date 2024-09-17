import Image from "../atom/Image";
import Name from "../atom/Name";
import Message from "../atom/Message";
function Profile({ profile }) {
    return <div>
        <Image url={profile.pic} />
        <Name nameText={profile.name} />
        <Message nameText={profile.name} />
    </div>
}

export default Profile;