export default function Item(props) {
  const { heading, src, alt, iconName, iconNameRated, isMoreRated, rating, description, price } = props;
  return (
    <section className="flex flex-wrap items-center bg-white drop-shadow-2xl rounded-b-xl">
      <div className="relative w-[15rem]">
        <div className="bg-[#8abb3a] rounded-xl h-12 w-12 flex justify-center items-center absolute">
          <i className={`fa-solid fa-${iconName} text-xl text-white`}></i>
        </div>
        <div className="bg-[#8abb3a] text-white p-3 w-7 h-7 flex justify-center items-center rounded-full absolute right-3 top-3">
          <span className="font-bold">{rating}</span>
        </div>
        <img
          src={src}
          alt={alt}
          className="w-[15rem] h-[8rem] object-cover rounded-2xl mb-2"
        />
        <div className="px-2 pb-2">
          <h1 className="text-md font-[600] mb-1">{heading}</h1>
          <p className="opacity-50 mb-1">{description}</p>
          <div className="flex items-center justify-between">
            <p className="text-[#8abb3a] font-bold text-lg">R{price}.00</p>
            <div className="flex items-center justify-center gap-2">
              <p className="opacity-50 text-sm">{isMoreRated}</p>
              <i className={`fa-solid fa-${iconNameRated} text-[#8abb3a]`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
