import { useState } from 'react';
import './Comments.css';
import Send from '../assets/Send.svg'
import Emoji from '../assets/emoji.svg'
import Notif from '../assets/notif.svg'

export function Comments()
{
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Alina Rubak',
      avatar: '/avCom1.png',
      text: 'Це неперевершено! Яка неймовірна пісня українською!',
      time: '3 weeks ago',
      replies: [
        {
          id: 11,
          name: 'Oleg Makey',
          avatar: '/avCom2.png',
          text: 'Черговий шедевр української музики 🇺🇦',
          time: '3 weeks ago',
        },
      ],
    },
    {
      id: 2,
      name: 'Kristen',
      avatar: '/avCom3.png',
      text: 'Очень нравится композиция! Удачи в творчестве!',
      time: '3 weeks ago',
      replies: [],
    },
  ]);

  const [text, setText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyTo, setReplyTo] = useState(null);

  const handleAddComment = () => {
    if (!text.trim()) return;
    setComments([
      {
        id: Date.now(),
        name: 'You',
        avatar: '/ava.png',
        text: text.trim(),
        time: 'just now',
        replies: [],
      },
      ...comments,
    ]);
    setText('');
  };

  const handleAddReply = (parentId) => {
    if (!replyText.trim()) return;
    setComments(comments.map(comment => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              name: 'You',
              avatar: '/ava.png',
              text: replyText.trim(),
              time: 'just now',
            },
          ],
        };
      }
      return comment;
    }));
    setReplyText('');
    setReplyTo(null);
  };

  return (
    <div className="comments">
      <h3>Comments</h3>

      <div className="comment-form">
        <img src="/ava.png" alt="your avatar" />
        <input
          type="text"
          placeholder="Add a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
        />
        <div className="form-icons">
          <span><img src={Emoji}/></span>
          <span><img src={Notif}/></span>
        </div>
        <button className='sendCom'onClick={handleAddComment}><img src={Send}></img></button>
      </div>

      <div className="comment-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment-block">
            <div className="comment">
              <img src={comment.avatar} alt="avatar" />
              <div className="comment-body">
                <div className="comment-meta">
                  <span className="comment-name">{comment.name}</span>
                  <span className="comment-time">{comment.time}</span>
                </div>
                <p>{comment.text}</p>
                <div className="comment-actions">
                  <span className="reply-btn" onClick={() => setReplyTo(comment.id)}>Answer</span>
                </div>

                {replyTo === comment.id && (
                  <div className="reply-form">
                    <img src="/ava.png" alt="your avatar" />
                    <input
                      type="text"
                      placeholder="Write a reply"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === 'Enter' && handleAddReply(comment.id)
                      }
                    />
                    <button onClick={() => handleAddReply(comment.id)}>➤</button>
                  </div>
                )}

                {comment.replies?.length > 0 && (
                  <div className="replies">
                    {comment.replies.map(reply => (
                      <div key={reply.id} className="comment reply">
                        <img src={reply.avatar} alt="avatar" />
                        <div className="comment-body">
                          <div className="comment-meta">
                            <span className="comment-name">{reply.name}</span>
                            <span className="comment-time">{reply.time}</span>
                          </div>
                          <p>{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
