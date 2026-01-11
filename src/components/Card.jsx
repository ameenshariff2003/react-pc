import img from "../assets/images/image.png"



const Card = () => {
  return (
    <div className="w-[320px] rounded-[28px] bg-gradient-to-br from-[#fff8ea] to-[#fff2d6] p-5 shadow-xl font-sans">
      
      {/* Image */}
      <div className="mb-4 rounded-[22px] bg-[#ffd88a] p-4 flex justify-center">
        <img
          src={img}
          alt="Vanilla ice cream"
          className="w-[220px] rounded-[18px] object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        Vanilla ice cream
      </h3>

      {/* Tags */}
      <div className="mt-2 flex gap-2 text-xs text-gray-500">
        <span>Vegan</span>
        <span>•</span>
        <span>Gluten free</span>
        <span>•</span>
        <span>Organic</span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Toppings:
        <span className="font-medium text-gray-700"> Choco chips</span>,
        <span className="font-medium text-gray-700"> Nuts</span>
      </p>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-orange-500">$10.00</p>
          <p className="text-xs text-gray-400">+ $2 delivery</p>
        </div>

        <button className="rounded-full bg-orange-400 px-5 py-2 text-sm font-medium text-white shadow-md hover:bg-orange-500 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
