import podcastaudio1 from "./assets/sample1/sample1.mp3";
import podcastimg1 from "./assets/sample1/sample1.jpg";
import podcastaudio2 from "./assets/sample2/sample2.mp3";
import podcastimg2 from "./assets/sample2/sample2.jpg";
import podcastaudio3 from "./assets/sample3/sample3.mp3";
import podcastimg3 from "./assets/sample3/sample3.jpg";
import podcastaudio4 from "./assets/sample4/sample4.mp3";
import podcastimg4 from "./assets/sample4/sample4.jpg";


const playlist = [
    // duration:
    // [0]=25:54 /static/media/sample1.93adab76.mp3
    // [1]=1:45 /static/media/sample2.fc52c56b.mp3
    // [2]=16.30 /static/media/sample3.dd610a4f.mp3
    // [3]=30.53 /static/media/sample4.294f6f60.mp3
    {
        title: "The case of Charles Dexter Ward",
        author: "bbc",
        audio: podcastaudio1,
        image: podcastimg1
    },
    {
        title: "How to burn a millionn quid",
        author: "bbc",
        audio: podcastaudio2,
        image: podcastimg2,
    },
    {
        title: "Fatwa",
        author: "bbc",
        audio: podcastaudio3,
        image: podcastimg3,
    },
    {
        title: "The Untold",
        author: "bbc",
        audio: podcastaudio4,
        image: podcastimg4,
    }
]
export default playlist;