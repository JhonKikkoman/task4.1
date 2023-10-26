import { useState } from "react";
import { propType, aliasValue } from "../models";

export default function ResultField({ prop }: propType) {
    const [state, setState] = useState<aliasValue[]>([]);
    const f1 = prop;
 
    const handlerClick = (stringId: string): any => {
        setState(f1.filter((e) => { return e.id !== stringId }))

    }
    return (
        <>
            <div className="wrapper_field">
                <div className="wrapper_field_info">
                    <span className="text_hint">ДАТА(ДД.ММ.ГГ)</span>
                    <span className="text_hint">Пройдено км</span>
                    <span className="text_hint">Действия</span>
                </div>
            </div>
            <div className="container_info">
                {state.map((item) => {
                    
                    return (
                        <><div key={item.id} className="tick_info">
                            <span className="inner_info" >{item.dataValue}</span>
                            <span className="inner_info" >{item.passedValue}</span>
                            <div className="container_icon inner_info">
                                <span className="material-symbols-outlined icon_edit">edit</span>
                                <span className="material-symbols-outlined icon_delete" onClick={() => handlerClick(item.id)}>delete_forever</span>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}