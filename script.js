const songs = [
    {
        title: "Blinding Lights",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "Mask group.jpg",
        artistName: "The Weeknd"
    },
    {
        title: "Shape of You",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "image.png",
        artistName: "Ed Sheeran"
    },
    {
        title: "Levitating",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        image: "image copy.png",
        artistName: "Dua Lipa"
    },
    {
        title: "Watermelon Sugar",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        image: "image copy 2.png",
        artistName: "Harry Styles"
    },
    {
        title: "Save Your Tears",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        image: "Mask group.jpg",
        artistName: "The Weeknd"
    },
    {
        title: "Uptown Funk",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        image: "image.png",
        artistName: "Mark Ronson ft. Bruno Mars"
    },
    {
        title: "Despacito",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        image: "image copy.png",
        artistName: "Luis Fonsi ft. Daddy Yankee"
    },
    {
        title: "Rockstar",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        image: "image copy 2.png",
        artistName: "Post Malone ft. 21 Savage"
    },
    {
        title: "Bad Guy",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        image: "Mask group.jpg",
        artistName: "Billie Eilish"
    },
    {
        title: "Peaches",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        image: "image.png",
        artistName: "Justin Bieber ft. Daniel Caesar & Giveon"
    }
];

function createPlaylist() {
    const select = document.getElementById('songSelect');
    songs.forEach(song => {
        const option = document.createElement('option');
        option.textContent = song.title;
        option.value = song.url;
        select.appendChild(option);
    });
}

function playSong() {
    const select = document.getElementById('songSelect');
    const selectedSong = songs.find(song => song.url === select.value);

    if (selectedSong) {
        const audioPlayer = document.getElementById('audioPlayer');
        const audioSource = document.getElementById('audioSource');
        const songImage = document.getElementById('songImage');
        const musicName = document.getElementById("songTitle");
        const musicArtist = document.getElementById("nameArtist");

        audioSource.src = selectedSong.url;
        songImage.src = selectedSong.image;
        musicName.textContent = selectedSong.title;
        musicArtist.textContent = selectedSong.artistName;

        audioPlayer.load();
        audioPlayer.play();
    }
}

createPlaylist();
document.getElementById('songSelect').addEventListener('change', playSong);
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('songSelect').selectedIndex = 0;
    playSong();
});
