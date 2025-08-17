const Video = () => {
  const video = {
    url: "https://example.com",
    title: "Example Video",
    description: "Example description",
  };

  const Thumbnail = ({ video }) => {
    return <div>{video}</div>;
  };

  const LikeButton = ({ video }) => {
    return <div>{video}</div>;
  };
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
};

export default Video;
