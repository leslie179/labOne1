import Name from "../atoms/Name"
import Image from "../atoms/Image"
import Message from "../atoms/Message"

function Post({ post }) {
    return <div>
        <Image url={post.url} />
        <Name nameText={post.name} />
        <Message messageText={post.message} />
    </div>
}