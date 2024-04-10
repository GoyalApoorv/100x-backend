const { Users, Posts, Followers, Likes } = require('./models');

async function createRecords() {
    // First User
    const user1 = await Users.create({
        username: "Sheldon Cooper",
        email: "sheldon@bazinga.com",
        bio: "Bazingaaa!",
        join_date: new Date()
    });

    // Second User
    const user2 = await Users.create({
        username: 'Leonard Hofstadter',
        email: 'leonard@gmail.com',
        bio: "I'm sorry",
        join_date: user1.join_date // Assign the same join date as user1
    });

    // User1's post
    const post1 = await Posts.create({
        user_id: user1.id,
        content: "Barry kripky is a thief",
        creation_time: new Date(),
    });

    // User2's Post
    const post2 = await Posts.create({
        user_id: user2.id,
        content: "Take me back Penny",
        creation_time: post1.creation_time // Assign the same creation time as post1
    });

    // User1 likes User2's post
    const userFollow = await Likes.create({
        user_id: user1.id,
        post_id: post2.id,
        like_date_time: new Date(),
    });

    // User2 likes their own post
    const like1 = await Likes.create({
        user_id: user2.id,
        post_id: post2.id,
        like_date_time: new Date(),
    });

    // User1 re-posts User2's tweet
   const repost1 = await Posts.create({
        user_id: user1.id,
        content: "", // Optionally add a comment or reference the original post
        creation_time: new Date(),
        is_reply: 1,
        original_post_id: post2.id, // Reference the original post
    });
}

createRecords();
