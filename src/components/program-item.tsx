import { IconType } from "react-icons";

interface props {
    title: string;
    time: string;
    Icon: IconType;
}

export const ProgramItem = ({title, time, Icon} : props) => {
    return (
    <div className="flex flex-col items-center gap-5">
        <Icon size="40" />
        <div className="flex flex-col gap-0 items-center font font-fancy">
            <label className="text-lg font-semibold">{time}</label>
            <label className="text-md">{title}</label>
        </div>
    </div>
    );
    
}