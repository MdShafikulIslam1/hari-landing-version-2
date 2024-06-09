import Image from "next/image"

export default function InputWrapper({ icon, children }: { icon: string, children: React.ReactNode }) {
    return (
      <div className="h-10 px-4 flex items-center gap-4 bg-white text-red-500 rounded-xl">
        <div className="w-6 h-6 grid">
          <Image className="w-full h-full object-contain" src={icon} width={20} height={20} alt={"icon"}/>
        </div> 
        <div className="w-full">
          {children}
        </div>
      </div>
    )
  
  }