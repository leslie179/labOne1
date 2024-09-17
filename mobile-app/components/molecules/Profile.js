import Image from "../atoms/Image";
import Name from "../atoms/Name";
import Message from "../atoms/Message";

function Profile({ profile }) {
    return <div>
        <Image url={profile.pic} />
        <Name nameText={profile.name} />
        <Message messageText={profile.bio} />
    </div>
}

export default Profile;