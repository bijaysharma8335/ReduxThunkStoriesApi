import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/stories";

const Stories = () => {
    const dispatch = useDispatch();
    const story = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts()); }, [dispatch]);

    return (
        <div className="col-md-12 text-center">
            <h1 className="text-success">Stories</h1>
            <ul>
            {story.map((stor) => (
                    <div  key={stor.id}>
                        <h2><a href={stor.url} className="text-danger">{stor.title}</a></h2>
                        <div className="text-primary"> {stor.by}<br/>{stor.descendants}<br/>
                        {new Date(stor.time).toLocaleString()}</div> 
                        
                        </div>
                ))}
               
            </ul>
        </div>
    );
};

export default Stories;
