import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Football",
    "Cricket",
    "Cooking",
    "News",
    "Mixes",
    "JavaScript",
    "Kabaddi",
    "Big Boss",
  ];

  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
