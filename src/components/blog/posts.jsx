import React, { Component } from "react";
import http from "../services/httpService";
import config from "../../config.json";
class Posts extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };
  handleEdit = async (post) => {
    post.title = "Updated";
    await http.put(config.apiEndpoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = post;
    this.setState({ posts });
  };
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete("s" + config.apiEndpoint + "/" + post.id);
    } catch (ex) {
      if (ex.responce && ex.responce.status === 404) {
        alert("post already deleted");
      }
      this.setState({ posts: originalPosts });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row my-2">
          <div className="col-md-12">
            <button className="btn btn-sm btn-success" onClick={this.handleAdd}>
              Add Post
            </button>
          </div>
          <div className="col-md-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm mr-2"
                        onClick={() => this.handleEdit(post)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(post)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
