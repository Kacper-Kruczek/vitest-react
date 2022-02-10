import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<any>) => {
  return <button className="bg-slate-200 hover:bg-slate-400" {...props} />;
};
