import React from 'react'
import Input from './Input'

export default function InputForm({ handleSubmit }) {
  return (
    <>
      {' '}
      <form data-testid="form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Report Informations</h1>
        <div className="container">
          <div className="inputsWrapper">
            <label>Basic Informations</label>
            <Input
              name={'site_name'}
              type={'text'}
              placeholder={'ex: Dublin'}
            />
            <Input
              name={'reporter'}
              type={'text'}
              placeholder={'ex: Reporter'}
            />
            {/* Data form */}
            <Input name={'from'} type={'date'} />
            <Input name={'to'} type={'date'} />
          </div>
          <div className="inputsWrapper">
            {' '}
            <label>Good Values</label>
            <Input
              name={'goodLabel'}
              type={'text'}
              placeholder={'Rating name'}
            />
            <Input name={'goodCO2'} type={'number'} placeholder={'CO2'} />
            <Input name={'goodPM'} type={'number'} placeholder={'PM'} />
            <Input name={'goodVOC'} type={'number'} placeholder={'VOC'} />
          </div>
          <div className="inputsWrapper">
            <label>Medium Values</label>
            <Input
              name={'modLabel'}
              type={'text'}
              placeholder={'Rating name'}
            />
            <Input name={'modCO2'} type={'number'} placeholder={'CO2'} />
            <Input name={'modPM'} type={'number'} placeholder={'PM'} />
            <Input name={'modVOC'} type={'number'} placeholder={'VOC'} />
          </div>
          <div className="inputsWrapper">
            <label>High Values</label>
            <Input
              name={'highLabel'}
              type={'text'}
              placeholder={'Rating name'}
            />
            <Input name={'highCO2'} type={'number'} placeholder={'CO2'} />
            <Input name={'highPM'} type={'number'} placeholder={'PM'} />
            <Input name={'highVOC'} type={'number'} placeholder={'VOC'} />
          </div>
        </div>
        <button data-testid="onSubmit-button">Generate PDF</button>
      </form>
    </>
  )
}

// props = {
//   site_name: str, // e.g. "Alexander House"
//   reporter: str, // e.g. "Antonio Caiazzo"
//   created: Date, // e.g. new Date(2022, 1, 3, 10, 30)
//   from: Date, // e.g. new Date(2022, 0, 1)
//   to: Date, // e.g. new Date(2022, 0, 31)
//   ratings_by_level: {
//     good: { label: str, co2: int, pm: int, voc: int }, // e.g. "Excellent", co2: 8
//     moderate: { label: str, co2: int, pm: int, voc: int }, // e.g. "Moderate", pm: 2, voc: 1
//     high: { label: str, co2: int, pm: int, voc: int } // e.g. "Poor", pm: 2
//   }
// }
