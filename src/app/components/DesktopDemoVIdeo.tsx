const DesktopDemoVideo = () => {
  return (
    <video
      className='second-img'
      style={{ visibility: 'visible', width: '100%' }}
      autoPlay
      loop
      muted
      playsInline
      src='https://www.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4'
      poster='https://www.okx.com/cdn/assets/imgs/233/939BF8112345BC9B.png?x-oss-process=image/format,webp'
    >
      <track kind='captions' />
    </video>
  );
};

export default DesktopDemoVideo;
