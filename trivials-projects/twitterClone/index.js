import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
    else if(e.target.id == 'reply-btn') {
        handleCreateReply(e.target);
    }
    else if(e.target.dataset.save) {
        handleSaveClick(e.target.dataset.save);
    }
    else if(e.target.dataset.delete) {
        handleDeleteClick(e.target.dataset.delete);
    }
})

function handleDeleteClick(tweetId){
    let tweetToDelete = tweetsData.findIndex((tweet)=>tweet.uuid === tweetId);
    tweetsData.splice(tweetToDelete, 1);
    render();
}

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render()
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')

    if(tweetInput.value){
        tweetsData.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
    render()
    tweetInput.value = ''
    }

}

function handleCreateReply(replyBtn){
    const tweetId = replyBtn
        .closest('.tweet')
        .querySelector(".fa-comment-dots")
        .dataset.reply;

    const replyInput = document.getElementById(`replying-to-${tweetId}`).value;
    const targetTweetObj = tweetsData.filter((tweet)=> tweet.uuid === tweetId)[0];
    targetTweetObj.replies.push({
        handle: `@Scrimba`,
        profilePic: `images/scrimbalogo.png`,
        tweetText: `${replyInput}`,
    });
    console.log(targetTweetObj)

    render();
    handleReplyClick(tweetId);
}

function handleSaveClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
    return tweet.uuid === tweetId
    })[0];
    if (tweetId in localStorage) {
        localStorage.removeItem(tweetId);
    } else {
        localStorage.setItem(tweetId, JSON.stringify(targetTweetObj));
    }

    render();
}

function getFeedHtml(){
    let feedHtml = ``

    tweetsData.forEach(function(tweet){

        let likeIconClass = ''

        if (tweet.isLiked){
            likeIconClass = 'liked'
        }

        let retweetIconClass = ''

        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }

        let saveTweetIconClass = '';

        if(tweet.uuid in localStorage) {
            saveTweetIconClass = 'saved'
        }

        let repliesHtml = ''

        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }


        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
                <span>
                    <i class="fa-solid fa-save ${saveTweetIconClass}" data-save="${tweet.uuid}">
                    </i>
                </span>
                <span>
                    <i class="fa-solid fa-trash" data-delete="${tweet.uuid}">
                    </i>
                </span>
            </div>
        </div>
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
        <div class="tweet-inner">
			<img src="images/scrimbalogo.png" class="profile-pic">
            <div>
			    <textarea placeholder="click to reply" class="reply-textarea" id="replying-to-${tweet.uuid}"></textarea>
               <button class="reply-btn" id="reply-btn">reply</button>
            </div>
        </div>
    </div>
</div>
`
   })
   return feedHtml
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
