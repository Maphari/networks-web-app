export default function SubCategory(props) {

  const {iconName,header,  rating, description} = props;
  return (
    <section className="flex flex-wrap items-center">
      <div className="bg-[#1e1e1e] rounded-xl text-white hover:cursor-pointer transition-all hover:scale-[1.1] hover:ease-in-out duration-700">
        <div className="flex items-center justify-between relative">
          <div className="bg-[#8abb3a] rounded-2xl h-12 w-12 flex justify-center items-center absolute">
            <i className={`fa-solid fa-${iconName} text-xl`}></i>
          </div>
          <div className="w-full flex justify-end">
            <h1 className="mr-3 mt-2 opacity-50">{rating}</h1>
          </div>
        </div>
        <div className="p-3 text-center">
          <h1 className="text-2xl font-bold mb-1">{header}</h1>
          <p className="opacity-50 font-[300] text-sm">{description}</p>
        </div>
      </div>
    </section>
  );
}
