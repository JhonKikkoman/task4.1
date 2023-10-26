import React, { useState } from 'react';
import './App.css';
import WorkoutInterface from './components/TraningInterface/TrainingInterface';
import ResultField from './components/ResultField/ResultField';
import { aliasValue } from "./components/models";

function App() {
  const [state, setState] = useState<aliasValue[]>([]);

  const resultValueClbck = (obj: aliasValue) => {
    if (state.length !== 0) {
      const nonDuplicateArr = state.filter((item) => item.dataValue !== obj.dataValue);
      const filteredElem = state.filter((item) => item.dataValue === obj.dataValue);
      const resultedElem = filteredElem.reduce<aliasValue>((accum, item) => {
        return accum = {
          dataValue: item.dataValue,
          passedValue: String(Number(item.passedValue) + Number(obj.passedValue)),
          id: `${item.dataValue}_${String(Number(item.passedValue) + Number(obj.passedValue))}`
        }
      }, {} as aliasValue)
      if(Object.keys(resultedElem).length !== 0) {
        nonDuplicateArr.push(resultedElem);
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
  return (
    <>
      <div className='container'>
        <WorkoutInterface propFunc={resultValueClbck} />
        <ResultField prop={state} />
      </div>
    </>
  );
}

export default App;
