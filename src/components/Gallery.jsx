import galeri from "./../assets/20220811_090713284.jpg";

const Gallery = () => {
  return (
    <>
      <div className="grid gap-4">
        <div>
          <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
          </div>
          <div>
            <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
          </div>
          <div>
            <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
          </div>
          <div>
            <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
          </div>
          <div>
            <img src={galeri} className="h-auto max-w-full rounded-lg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
