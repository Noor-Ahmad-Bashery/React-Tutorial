import React, { Fragment } from 'react'
import SinglePost from './SinglePost'

const PostList = ({posts,user}) => {
  return (
    <div>
      {posts.map(post => (<SinglePost key={post.id} {...post}/>    ))}
    </div>
  )
}

export default PostList
