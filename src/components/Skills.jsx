export default function Skills({ title, skillList }) {
  console.log(skillList);
  return (
    <div className="m-4">
      <h2 className="text-2xl font-semibold text-slate-500">{title}</h2>

      <ul className="m-4 font-semibold text-orange-200 list-disc">
        {skillList.split(" ").map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
