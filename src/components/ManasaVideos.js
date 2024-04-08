const ManasaVideos = ({ videoSrc }) => {
  return (
    <iframe
      className="rounded-lg w-full md:h-[200px] h-[100px]"
      src={videoSrc}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};
export default ManasaVideos;
