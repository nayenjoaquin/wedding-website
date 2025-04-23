import { IconRing } from "@/const/icons";

interface SaveTheDateButtonProps {
    onClick: () => void;
}

export const SaveTheDateButton = (props: SaveTheDateButtonProps) => {
    return (
        <button onClick={props.onClick} className="rounded-md border-2 p-2.5 px-10 flex items-center justify-center border-white hover:scale-105 transition-all backdrop-blur-md">
            <IconRing size={20} color="white" />
            <span className="text-white">Save the Date</span>
        </button>
    );
};