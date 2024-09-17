import Name from "../atom/Name"
import Image from "../atom/Image"
import Message from "../atom/Message"
function Post({ post }) {
    return <div>
        <Image url={post.url} />
        <Name nameText={post.name} />
        <Message messageText={post.message} />
    </div>
}