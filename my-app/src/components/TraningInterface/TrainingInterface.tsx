/* eslint-disable no-useless-escape */
import { useState } from "react";
import { checkinDataRegexp, checkinDigit } from "./regexp";
import { funcType, inputValue, targetType } from "../models";

export default function WorkoutInterface({ propFunc }: funcType) {
    const [state, setState] = useState<inputValue>({
        dataValue: '',
        passedValue: '',
        id: ''
    });
    const [stateBtn, setStateBtn] = useState(true);

    const handlerSubmit = (e: any): void => {
        e.preventDefault();
        propFunc(state);
        setState({
            dataValue: '',
            passedValue: '',
            id: ''
        });
        setStateBtn(true);
    }

    const handlerChange = ({ target }: targetType) => {
        const { name, value } = target;
        const dataString: string | undefined = name === 'dataValue' ? value : state.dataValue;
        const passedString: string | undefined = String(name === 'passedValue' ? value : state.passedValue);
        if (dataString !== undefined && passedString !== undefined) {
            if (checkinDataRegexp.test(dataString) && checkinDigit.test(passedString)) {
                setStateBtn(false);
            } else {
                setStateBtn(true);
            }
        }
        setState({
            dataValue: dataString,
            passedValue: passedString,
            id: `${dataString}_${passedString}`
        });

    }

    return (
        <>
            <form className="wrapper" onSubmit={handlerSubmit} action="">
                <div className="wrapper_hints">
                    <label className="hint_field text_hint" htmlFor="date_field">ДАТА(ДД.ММ.ГГ)</label>
                    <label className="hint_field text_hint" htmlFor="passed_field">Пройдено км</label>
                </div>
                <div className="wrapper_submit_fields">
                    <input
                        className="content_field"
                        type="text"
                        id="date_field"
                        name="dataValue"
                        onChange={handlerChange}
                        value={state.dataValue} />
                    <input
                        className="content_field"
                        type="text"
                        id="passed_field"
                        name="passedValue"
                        onChange={handlerChange}
                        value={state.passedValue} />
                    <button
                        className="content_field submit_btn"
                        type="submit"
                        disabled={stateBtn}>OK</button>
                </div>
            </form>
        </>
    );
}