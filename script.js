var player;
    
// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: 'WXDdJ6vYkYE', // Replace with the YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
        });
      }
    
// This function is called when the player is ready.
    function onPlayerReady(event) {
        document.getElementById('playButton').addEventListener('click', function() {
            player.playVideo(); // Play the video when the custom button is clicked
        });
    }
    