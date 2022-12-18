import { FaArrowAltCircleUp } from "react-icons/fa";

export default function GoToTopButton() {
  return (
    <button
      className="fixed bottom-8 right-8 border-1 border-primaryColor bg-primaryColor rounded-full"
      onClick={() => window.scrollTo(0, 0)}
    >
      <FaArrowAltCircleUp className="w-10 h-10" />
    </button>
  );
}
