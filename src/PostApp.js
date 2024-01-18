import axios from "axios";
import React from "react";

const Api_url = "https://jsonplaceholder.typicode.com/posts";

class PostApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        posts : [],
        id : "",
        userId : "",
        body : "",
        title : "",
     }
    };
   
    //create
    createPost = async () => {
        try{
            const {userId,title,body} = this.state;

            const {data : post} = await axios.post(Api_url,{
                userId,
                title,
                body,
            });
                const posts = [...this.state.posts];
                posts.push(post);
                this.setState({posts, userId: "",title: "",body: "" });
                
        }
        catch(err){
          console.error(err); 
        }
      
    };

    //get
    getPost = async () => {
        try{
            const {data : posts} = await axios.get(
                "https://jsonplaceholder.typicode.com/posts");
                this.setState({posts});     
        }
        catch(err){
          console.error(err); 
        }
    };

    //update
    updatePost = async () => {
        try{
            const {id,userId,title,body} = this.state;
            const {data : post} = await axios.put(`${Api_url}/${id}`,{
                userId,
                title,
                body,
            });
                const posts = [...this.state.posts];
                const index = posts.findIndex((p) => p.id === id);
                posts[index] = post;
                this.setState({posts,id:"",userId: "",title: "",body: "" }); 
        }
        catch(err){
          console.error(err); 
        }
      
    };
 
    //delete
    deletePost = async (PostId) => {
        try{
            await axios.delete (`${Api_url}/${PostId}`);
            let posts = [...this.state.posts];
            posts = posts.filter((post) => post.id !==PostId);
            this.setState({posts});
        }
        catch(err){
            console.error(err);
        }
    };

    handleChange = ({target : {name ,value} }) => {
        this.setState({[name] : value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.id){
            this.updatePost();
        }else{
            this.createPost();
        }   
    };

    componentDidMount() {
        this.getPost();
    }

    render() { 
        return (
        <>
        <h1>Post App</h1>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label>User Id : </label>
            <input 
            name = "userId"
            type="text"
            value={this.state.userId}
            onChange={this.handleChange}
            required/>
        </div>
        <br/>
        <div>
            <label>Title : </label>
            <input 
            name = "title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            required/>
        </div>
        <br/>
        <div>
            <label>Body : </label>
            <input 
            name = "body"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            required/>
        </div>
        <br/>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
        <br/>
        <table>
            <tr>
                <th>PostId</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
            </tr>
            {this.state.posts.map ((post) =>{
              return (
                <tr>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                        <button onClick={()=> this.setState({...post})}>Update</button>
                        <button onClick={()=> this.deletePost(post.id)}>Delete</button>
                    </td>
                </tr>
              );
            } )};
        </table>
        </>
        );
    }
}
 
export default PostApp;