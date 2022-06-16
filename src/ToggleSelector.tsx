import { openedData } from "models/openedData";
import { selectedList } from "models/selectedList";
import { useSnapshot } from "valtio";

export const ToggleSelector = () => {
  const { _data: selected } = useSnapshot(selectedList);

  return (
    <div className="selector">
      <button onClick={() => openedData.toggle()}>Show/Hide</button>
      {selected.map((e, i) => <p key={i}>{i + 1}) {e}</p>)}
      {selected.length ? (
        <button onClick={() => selectedList.clear()}>Clear</button>
      ) : null}
    </div>
  );
};