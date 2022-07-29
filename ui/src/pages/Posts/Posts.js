import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPostsAndUsers } from "../../actions/postsActions"
import Loading from "../../components/Loading/Loading"
import UserHeader from "./UserHeader"

const Posts = ({ fetchPostsAndUsers, posts, loading }) => {
  useEffect(() => {
    fetchPostsAndUsers()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      <h2>Posts</h2>
      <div className="ui items">
        {posts.map(post => (
          <div className="item" key={post.id}>
            <div className="content">
              <a className="header">{post.title}</a>
              <div className="description">
                <p>{post.body}</p>
              </div>
              <UserHeader userId={post.userId}/>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

const mapStateToProps = (state) => {
  return state.posts
}

const mapDispatchToProps = {
  fetchPostsAndUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)