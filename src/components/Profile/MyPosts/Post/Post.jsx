import p from './Post.module.css';

// console.log(p);
// let cl1 = "item";
// let cl2 = "active";
// let classes1 = c1 + " " + c2; //"item active"
// let classes2 = `${c1} ${c2}`;

const Post = (props) => {

    return (
        <div className={p.item}>
            <img src='https://www.publimetro.com.mx/resizer/NOKadvZJPLrpKX12ehJtnYbXX-I=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/FC4FLLK7DZHVNLOV5SUTDWU6JE.png' />
            {props.message}
            <div>
                <span>{props.likecount} like(s)</span>
            </div>
        </div>
    )
}

export default Post;