# 100x-backend 
User Schema:

Users: This table stores information about users registered on the microblogging web app.
    id: An auto-incremented unique identifier for each user.
    username: The username chosen by the user for their account, which must be unique.
    email: The email address associated with the user's account, which must be unique.
    password_hash: The hashed password of the user's account.
    bio: A brief description or biography provided by the user.
    profile_pic: The URL or path to the user's profile picture.
    join_date: The date when the user joined the microblogging platform.
    location: The location or geographic information provided by the user.
    createdAt: The timestamp indicating when the user record was created.
    updatedAt: The timestamp indicating when the user record was last updated.

Post Schema:

Posts: This table stores information about posts created by users on the microblogging web app.
  id: An auto-incremented unique identifier for each post.
  userId: The ID of the user who created the post, referencing the corresponding user in the Users table.
  content: The content or text of the post.
  image: The URL or path to any image attached to the post (optional).
  createdAt: The timestamp indicating when the post was created.
  updatedAt: The timestamp indicating when the post was last updated.

Likes Schema:

Likes: This table stores information about likes given to posts by users on the microblogging web app.
  id: An auto-incremented unique identifier for each like.
  postId: The ID of the post that received the like, referencing the corresponding post in the Posts table.
  userId: The ID of the user who liked the post, referencing the corresponding user in the Users table.
  createdAt: The timestamp indicating when the like was created.
  updatedAt: The timestamp indicating when the like was last updated.
  
Followers Schema:

Followers: This table manages followership relationships between users on the microblogging web app.
  id: An auto-incremented unique identifier for each follower relationship.
  followerId: The ID of the user who is following another user, referencing the corresponding user in the Users table.
  followingId: The ID of the user who is being followed by another user, referencing the corresponding user in the Users table.
  createdAt: The timestamp indicating when the follower relationship was created.
  updatedAt: The timestamp indicating when the follower relationship was last updated.
