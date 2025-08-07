function CardComponent({
  image,
  name,
  jobTitle,
  bio,
  skills,
}: {
  image: string;
  name: string;
  jobTitle: string;
  bio: string;
  skills: string[];
}) {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-100 rounded-lg shadow p-6 space-y-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{jobTitle}</p>
        <p className="text-gray-800">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
