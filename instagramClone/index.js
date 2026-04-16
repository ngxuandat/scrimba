const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];



function generatePostHTML(post) {
    return `
                <section class="post">
                <section class="poster-info">
                    <img src="${post.avatar}" class="avatar poster-avatar" >
                    <ul class="poster-name-location">
                        <li>${post.name}</li>
                        <li>${post.location}</li>
                    </ul>
                </section>
                <img src="${post.post}" class="post-image">
                <section  class="comment-section">
                    <ul class="comment-section-buttons">
                        <li><img src="images/icon-heart.png" class="icon like-button"></li>
                        <li><img src="images/icon-comment.png" class="icon"></li>
                        <li><img src="images/icon-dm.png" class="icon"></li>
                    </ul>
                    <p class="bold">${post.likes} likes</p>
                    <p><span class="bold">${post.username}</span> ${post.comment}</p>
                </section>
            </section>
            <div class="divider"></div>
    `
}

function renderAllPosts(posts){
    const container = document.getElementById('main');
    posts.forEach(post => {
        container.innerHTML+=generatePostHTML(post);
    });
}

renderAllPosts(posts);
const likeBtns = document.querySelectorAll(".like-button");
likeBtns.forEach((btn, btnIndex) =>{
    btn.addEventListener("dblclick", ()=>{
        posts[btnIndex].likes += 1;
        btn.closest(".post").querySelector(".bold").textContent = `${posts[btnIndex].likes} likes`
    }
)});
