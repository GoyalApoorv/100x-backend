# Microblogging Schema Design

## 1. Users Table (table name: users)
- **id**: Unique identifier for each user (Primary Key, INT).
- **username**: User's chosen name (VARCHAR).
- **display_name**: User's display name (VARCHAR).
- **email**: User's email address (VARCHAR).
- **bio**: Short user biography (VARCHAR).
- **profile_pic**: Link to profile picture (VARCHAR).
- **join_date**: Date the user joined (DATETIME).

### Description
Role: The Users table is the central entity in the schema. It stores all the essential information about the users of the platform, such as their username, email, bio, and other personal details.

#### Relationships:
- To Posts: A one-to-many relationship exists between Users and Posts. A single user can create multiple posts.
- To Likes: There is a one-to-many relationship between Users and Likes. A user can like multiple posts.
- To Followers: Users have a many-to-many relationship with Followers. A user can have multiple followers, and a follower can follow multiple users.

## 2. Posts Table (table name: posts)
- **id**: Unique identifier for each post (Primary Key, INT).
- **user_id**: ID of the user who posted (Foreign Key referencing users.id, INT).
- **content**: Text of the post (VARCHAR).
- **creation_time**: Time when the post was made (DATETIME).
- **is_reply**: Boolean to indicate if the post is a reply (BOOLEAN).
- **original_post_id**: If the post is a reply, ID of the original post (Foreign Key referencing posts.id, INT, NULLABLE).

### Description
Role: This table holds the content posted by users. It includes information about the posts, such as the content, creation time, and whether it's a reply to another post.

#### Relationships:
- From Users: Posts are linked to Users through the user_id. Each post is associated with the user who created it.
- To Likes: Posts have a one-to-many relationship with Likes. A single post can be liked by multiple users.
- Self-Referencing: The Posts table has a self-referencing relationship for handling replies. A post (reply) can reference another post as its original post.

## 3. Likes Table (table name: likes)
- **id**: Unique identifier for each like (Primary Key, INT).
- **user_id**: ID of the user who liked the post (Foreign Key referencing users.id, INT).
- **post_id**: ID of the post liked (Foreign Key referencing posts.id, INT).
- **like_time**: Time when the like was made (DATETIME).

### Description
Role: The Likes table records instances where users like posts.

#### Relationships:
- To Users: Likes are associated with Users through the user_id. Each like is linked to the user who performed it.
- To Posts: Likes are associated with Posts through the post_id. Each like is linked to the post that was liked.

## 4. Followers Table (table name: followers)
- **id**: Unique identifier for each follower (Primary Key, INT).
- **follower_id**: ID of the follower (Foreign Key referencing users.id, INT).
- **followed_id**: ID of the user being followed (Foreign Key referencing users.id, INT).
- **follow_time**: Time when the follow action was performed (DATETIME).

### Description
Role: The Followers table represents the relationships between users where one user follows another.

#### Relationships:
- To Users: Followers are associated with Users through both follower_id and followed_id. Each follower record links to the user who is following (follower_id) and the user who is being followed (followed_id).
