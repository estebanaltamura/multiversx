const MobileDemoVideo = () => {
  return (
    <video
      className='first-img'
      style={{ visibility: 'visible' }}
      autoPlay
      loop
      muted
      playsInline
      width='280'
      height='580'
      poster='https://www.okx.com/cdn/assets/imgs/243/F485DEA432C68FD9.png?x-oss-process=image/format,webp'
    >
      <source
        src='https://www.okx.com/cdn/assets/files/243/79620084DA93114F.webm'
        type='video/webm'
      />
      <source
        src='https://www.okx.com/cdn/assets/files/243/78FBA21FD210816A.mp4'
        type='video/mp4'
      />
      <track kind='captions' />
    </video>
  );
};

export default MobileDemoVideo;
