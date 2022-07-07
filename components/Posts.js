import React from 'react';
import Post from './Post';

function Posts() {
  const posts = [
    {
      id: '1',
      username: 'mithderler',
      userImg:
        'https://lh3.googleusercontent.com/a-/AOh14Gh3Hk1zzy8sZ7Uolrq78h3tfbo3GjG6oiNKu2lf6Q=s96-c',
      img: 'https://images.unsplash.com/photo-1657107154933-0822c6695f6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      caption: 'Thats a great picture',
    },
    {
      id: '2',
      username: 'mithderler',
      userImg:
        'https://lh3.googleusercontent.com/a-/AOh14Gh3Hk1zzy8sZ7Uolrq78h3tfbo3GjG6oiNKu2lf6Q=s96-c',
      img: 'https://images.unsplash.com/photo-1657015232876-678d7cfeec2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      caption: 'Great setup for working',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
