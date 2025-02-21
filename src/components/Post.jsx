/**
 * Component to display a blog post.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props._id - Unique identifier for the post.
 * @param {string} props.title - Title of the post.
 * @param {string} props.summary - Summary of the post.
 * @param {string} props.cover - URL of the cover image for the post.
 * @param {string} props.content - Content of the post.
 * @param {string} props.createdAt - Date when the post was created.
 * @param {Object} props.author - Author of the post.
 * @param {string} props.author.username - Username of the author.
 * @returns {JSX.Element} The rendered component.
 */

// import { format } from 'date-fns';
// import { Link } from 'react-router-dom';

// export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
//     return (
//         <div className="post">
//             <div className="image">
//                 <Link to={`/post/${_id}`}>
//                     <img src={'http://localhost:4000/' + cover} alt="" />
//                 </Link>
//             </div>
//             <div className="texts">
//                 <Link to={`/post/${_id}`}>
//                     <h2>{title}</h2>
//                 </Link>
//                 <p className="info">
//                     <span className="author">{author?.username}</span>
//                     <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
//                 </p>
//                 <p className="summary">{summary}</p>
//             </div>
//         </div>
//     );
// }
