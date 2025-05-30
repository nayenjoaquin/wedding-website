import { MdLocationOn } from "react-icons/md";

interface OpenInMapButtonProps {
    onClick: () => void;
    text?: string;
}

export const OpenInMapButton = (props: OpenInMapButtonProps) => {
    return (
        <button onClick={props.onClick} className="rounded-md border-2 p-2.5 px-5 md:px-10 gap-2.5 flex items-center justify-center border-black hover:scale-105 transition-all">
            <MdLocationOn size={20} color="black" />
            <span className="text-black">{props.text ?? 'Open in map'}</span>
        </button>
    );
};