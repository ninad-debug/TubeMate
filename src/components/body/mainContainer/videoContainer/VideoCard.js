const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-5 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
