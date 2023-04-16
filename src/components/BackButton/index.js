

const BackButton = ({Undo}) => {



  return (
    <button className="p-2 bold text-black fs-4 active:bg-[#E3292E] w-screen" onClick={() => Undo()}>Undo</button>
  );
}

export default BackButton 
