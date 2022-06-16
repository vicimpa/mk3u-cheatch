import { data } from "data";
import { selectedList } from "models/selectedList";
import { useSnapshot } from "valtio";

export const HeroList = () => {
  useSnapshot(selectedList);

  return (
    <div className="hero-list">
      {data.map((e, i) => (
        <div
          title={e.name}
          key={i}
          className="hero-item"
          data-select={selectedList.has(e.name) || undefined}
          style={{ backgroundImage: `url(${e.img})` }}
          onClick={() => selectedList.toggle(e.name)}
        />
      ))}
    </div>
  );
};