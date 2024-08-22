import React from "react";

const Footer = () => {
    return (
<footer className="bg-black text-white py-4 mt-32 relative">
      <div className="container mx-auto flex items-center p-14">
        <div className="absolute right-10 text-sm font-f1regular">&copy; 2024 QA Project</div>
        {/* <div className="absolute top-20 right-10 text-sm font-f1regular">Develped By AmirReza Sadeghi</div> */}
        <div className="absolute left-10">
            <img src="assets/LogoV2W.png" alt="F1 Zone Logo Version2 White" className="w-28 h-auto"/>
        </div>
      </div>
    </footer>
    )
}

export default Footer;