
function Load(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const out = Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById('random').textContent = out
    document.title = out
}


document.addEventListener('DOMContentLoaded', function () {

  const q = [
    "The thing inside the bundle of robes on the ground was stirring more persistently, as though it was trying to free itself. Now Wormtail was busying himself at the bottom of the cauldron with a wand.", 
    "Hello, friend. Hello, friend? That's lame. Maybe I should give you a name, but that's a slippery slope. You're only in my head. We have to remember that. Shit.", 
    "Tweet tweeeet twwweeeet"
  ]

  const ResTweet = Math.floor(Math.random() * q.length)
  console.log(`${q[ResTweet]}`)

  const tweetDiv = document.querySelector(".twitter-share-button")
  const link = document.createElement("a")

  link.setAttribute("href", "https://twitter.com/share")
  link.setAttribute("class", "twitter-share-button")
  link.setAttribute("id", "twitter")
  link.setAttribute("data-text", q[ResTweet])
  link.setAttribute("data-size", "large")
  tweetDiv.parentNode.replaceChild(link, tweetDiv)
  twttr.widgets.load()
}
)
