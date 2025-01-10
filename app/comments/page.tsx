// app/comments/page.tsx
'use client';
// import page from "../api/comments"

import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  text: string;
  createdAt: string;
}

const CommentSection = () => {
  const [commentsList, setCommentsList] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch comments when component mounts
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch('/api/comments');
      const data: Comment[] = await res.json();
      setCommentsList(data);
    };
    fetchComments();
  }, []);

  // Handle new comment submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newComment }),
      });

      if (res.ok) {
        const addedComment: Comment = await res.json();
        setCommentsList((prevComments) => [addedComment, ...prevComments]);
        setNewComment('');
      } else {
        console.error('Error posting comment');
      }
    } catch (error) {
      console.error('Error posting comment', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mb-36'>
      <h1 className="sm:text-3xl
      mt-20 text-2xl font-medium title-font mb-4 text-gray-900 text-center">
            Reviews
          </h1>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a review..."
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full mt-3 py-2 bg-blue-600 text-white rounded-md font-semibold ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Posting...' : 'Post Review'}
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {commentsList.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-gray-800">{comment.text}</p>
            <small className="text-gray-500">{new Date(comment.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CommentSection;
