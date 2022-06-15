import MyPosts from './MyPosts/MyPosts';
import p from './Profile.module.css';

// console.log(p);
// let cl1 = "item";
// let cl2 = "active";
// let classes1 = c1 + " " + c2; //"item active"
// let classes2 = `${c1} ${c2}`;

const Profile = () => {
    return (
        <div className={p.content}>
            <div className={p.mountains}><img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;