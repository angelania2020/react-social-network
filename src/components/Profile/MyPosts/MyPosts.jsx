import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={p.posts}>
                <Post message='Hi, how are you?' likecount='20' />
                <Post message='It&apos;s my first post!' likecount='15' />
            </div>
        </div>
    )
}

export default MyPosts;