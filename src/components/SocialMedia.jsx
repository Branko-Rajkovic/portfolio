import React from "react";

export default function SocialMedia({ icon, link, name }) {
  return (
    <div className="flex items-center p-4">
      <img src={icon} alt={`${name}-icon`} />
      <a href={link} className="m-2 font-semibold text-slate-500">
        {`${name}: `}
        <span className="text-orange-200 underline hover:text-orange-400">
          {link}
        </span>
      </a>
    </div>
  );
}
