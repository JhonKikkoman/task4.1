import React, { useState } from 'react';
import './App.css';
import { aliasValue, aliasValueWithNumber } from "./components/models";
import WorkoutDisplay from './components/TraningInterface/TrainingInterface';

function App() {
  const [state, setState] = useState<aliasValueWithNumber[]>([]);
  const [stateEdit, setStateEdit] = useState<aliasValueWithNumber>({
    dataValue: '',
    passedValue: 0,
    id: ''
  })

  const resultValueClbck = (obj: aliasValueWithNumber): void => {
    obj.passedValue = Number(obj.passedValue);
    if (state.length !== 0) {
      const nonDuplicateArr = state.filter((item) => item.dataValue !== obj.dataValue);
      const filteredElem = state.filter((item) => item.dataValue === obj.dataValue);
      if (filteredElem.length !== 0) {
        if (obj.passedValue !== undefined && filteredElem[0].passedValue !== undefined) {
          filteredElem[0].passedValue = filteredElem[0].passedValue + obj.passedValue;
          filteredElem[0].id = `${filteredElem[0].dataValue}_${filteredElem[0].passedValue}`;
          nonDuplicateArr.push(filteredElem[0]);
        }
      } else {
        nonDuplicateArr.push(obj)
      }
      nonDuplicateArr.sort((dateF, dateS): any => {
        if (dateF.dataValue && dateS.dataValue !== undefined) {
          const date1: string[] = dateF.dataValue.split('.')
          const date2: string[] = dateS.dataValue.split('.');
          const day1: number = parseInt(date1[0]);
          const day2: number = parseInt(date2[0]);
          const month1: number = parseInt(date1[1]);
          const month2: number = parseInt(date2[1]);
          const year1: number = parseInt(date1[2]);
          const year2: number = parseInt(date2[2]);

          if (year1 !== year2) {
            return year2 - year1;
          } else if (month1 !== month2) {
            return month2 - month1;
          } else {
            return day2 - day1;
          }
        }
      });
      setState(nonDuplicateArr);
    } else {
      setState(prev => [...prev, obj])
    }
  }

  const handlerClick = (stringId: string): void => {
    setState(state.filter((e) => { return e.id !== stringId }))
  }

  // const handlerEdit = (item: aliasValueWithNumber) => {
  //   setStateEdit(item);
  //   console.log(stateEdit)
  //   EditClbk(item.dataValue, item.passedValue)
  //   handlerClick(item.id);
    
  // }
  // const EditClbk = (name: string | undefined, value: string | undefined) => {
  //   if (name !== undefined && value !== undefined) {
  //     if (name === 'dataValue') {
  //       console.log(stateEdit.dataValue)
  //       value = stateEdit.dataValue
  //     }
  //     if (name === 'passedValue') {
  //       value = String(stateEdit.passedValue)
  //     }
  //   }
  //   setStateEdit({
  //     dataValue: '',
  //     passedValue: 0,
  //     id: ''
  //   })
  // }

  return (
    <>
      <div className='container'>
        <WorkoutDisplay propFunc={resultValueClbck} />
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
                  <span className="material-symbols-outlined icon_edit" onClick={() => console.log(item)}>edit</span>
                  <span className="material-symbols-outlined icon_delete" onClick={() => handlerClick(item.id)}>delete_forever</span>
                </div>
              </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
