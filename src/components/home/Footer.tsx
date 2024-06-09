export default function Footer() {
    return (
      <footer className="">
        <div className="py-10 holder text-sm flex flex-col items-center justify-center gap-1  text-red-600">
          <p className="">© 2024 Copyright. All rights reserve</p>
  
          <div className="flex items-center gap-2">
            <a className="underline" href="/">Privacy Policy</a>
            <div className="h-4 w-[1px] bg-red-600"></div>
            <a className="underline" href="/">Report</a>
          </div>
        </div>
      </footer>
    )
  }
  