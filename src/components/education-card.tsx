import React from "react";

interface Props {
  name: string;
  summary: string;
  bgColor?: string;
}
const EducationCard = (props: Props) => {
  const { name, summary, bgColor } = props;
  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between ">
        <label>{name}</label>
      </div>
      <p>{summary}</p>
    </div>
  );
};

export default EducationCard;
