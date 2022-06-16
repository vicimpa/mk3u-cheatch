import { data } from "data";
import { openedData } from "models/openedData";
import { selectedList } from "models/selectedList";
import { useCallback, useEffect } from "react";
import { useSnapshot } from "valtio";


export const HeroData = () => {
  const { _data: selected } = useSnapshot(selectedList);
  useSnapshot(openedData);

  const findObject = useCallback((n: string) => {
    const find = data.find(e => e.name == n);
    if (!find) throw new Error('No find object!');
    return find;
  }, []);

  useEffect(() => {
    if (selected.length == 0)
      openedData.close();
  }, [selected.join(','), openedData.open]);

  return (
    <div className="hero-data" data-open={openedData.open || undefined}>
      {selected.map((name, index) => {
        const { img, u1, u2, u3 } = findObject(name);
        return (
          <div key={index} className="hero-item">
            <h2>{name}</h2>
            <img width="120px" src={img} />
            <div className="list">
              <div>
                <h4>Приёмы:</h4>
                <ul>
                  {u1.map((e, i) => (
                    <li className="info" key={i}>
                      {e.tag && <b>{e.tag}:</b>}
                      {e.steps.map((e, i) => <span key={i}>{e}</span>)}
                      {e.desc && <i>{e.desc}</i>}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Комбо:</h4>
                <ul>
                  {u2.map((e, i) => (
                    <li className="info" key={i}>
                      {e.tag && <b>{e.tag}:</b>}
                      {e.steps.map((e, i) => <span key={i}>{e}</span>)}
                      {e.desc && <i>{e.desc}</i>}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Добивания:</h4>
                <ul>
                  {u3.map((e, i) => (
                    <li className="info" key={i}>
                      {e.tag && <b>{e.tag}:</b>}
                      {e.steps.map((e, i) => <span key={i}>{e}</span>)}
                      {e.desc && <i>{e.desc}</i>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};