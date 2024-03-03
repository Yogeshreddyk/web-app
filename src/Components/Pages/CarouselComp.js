import React from 'react';
import { Carousel } from 'react-bootstrap'; const VideoCarousel = () => {
    const handleClick = (youtubeVideoId) => {
        window.open(`https://www.youtube.com/watch?v=${youtubeVideoId}`, "_blank");
    }; const videos = [
        { src: "https://www.youtube.e.com/watch?v=Si7DovGBDuQ", youtubeVideoId: "Si7DovGBDuQ" },
        { src: "https://www.youtubcom/watch?v=BblraEtrFLI", youtubeVideoId: "BblraEtrFLI" },
        { src: "https://www.youtube.com/watch?v=Si7DovGBDuQ", youtubeVideoId: "Si7DovGBDuQ" },
        { src: "https://www.youtube.com/watch?v=Si7DovGBDuQ", youtubeVideoId: "Si7DovGBDuQ" },
        { src: "https://www.youtube.com/watch?v=Si7DovGBDuQ", youtubeVideoId: "Si7DovGBDuQ" },
        // Add more videos with different sources and YouTube video IDs
    ]; return (
        <Carousel>
            {videos.map((video, index) => (
                <Carousel.Item key={index} onClick={() => handleClick(video.youtubeVideoId)}>
                    <video width="320" height="240" controls>
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}; export default VideoCarousel;