import React, { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: `This is my very first post! I'm excited to share my writing, thoughts, and creative ideas here. Feel free to comment below.`,
  },
  {
    id: 2,
    title: "Thoughts on Modern Storytelling",
    content: `Storytelling is evolving in the digital age. What does it mean to craft narrative today? Let's discuss.`,
  },
];

const BlogPost = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded shadow p-6 my-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="mt-4 border-t pt-4">
        <h3 className="font-semibold mb-2">Comments</h3>
        {comments.length === 0 && (
          <p className="text-gray-500 text-sm">No comments yet. Be the first!</p>
        )}
        <div className="space-y-2 mb-2">
          {comments.map((cmt, idx) => (
            <p key={idx} className="text-sm bg-gray-100 p-2 rounded">{cmt}</p>
          ))}
        </div>
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addComment}
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Writing Blog</h1>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </main>
  );
}