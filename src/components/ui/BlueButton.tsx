interface BlueButtonProps {
  btnname: string;
}

export default function BlueButton({ btnname }: BlueButtonProps) {
  return (
    <button className="text-white bg-[#663EDD] px-8 py-4 rounded-xl cursor-pointer">
      {btnname}
    </button>
  );
}
