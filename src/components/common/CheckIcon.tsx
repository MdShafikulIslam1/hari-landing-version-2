import Image from "next/image";

export default function CheckIcon() {
    return (
        <div className="flex-none w-4 h-4 grid">
            <Image className="w-full h-full object-contain" src="/vitamins_arrow.png" width={10} height={10} alt="check" />
        </div>
    )
}