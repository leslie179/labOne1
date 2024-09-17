import Image from "../atom/Image";

function Profile({ profile }) {
    return <div>
        <Image url={profile.pic} />
        <Image url={profile.pic} />
    </div>
}

export default Profile;