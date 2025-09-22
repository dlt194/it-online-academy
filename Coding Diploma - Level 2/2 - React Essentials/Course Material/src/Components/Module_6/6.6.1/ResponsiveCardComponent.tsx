interface ResponsiveCardComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

const ResponsiveCardComponent = ({
  title,
  description,
  buttonText,
  imageUrl,
}: ResponsiveCardComponentProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative group">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover object-center"
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCardComponent;
