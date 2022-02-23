import './App.scss'
import 'antd/dist/antd.css'
import InputForm from './components/form/InputForm'
import pdfGenerator from './components/pdf/pdfGenerator'
function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(e.target)
    formData = Object.fromEntries(formData.entries())

    // Refactoring the props object
    const data = {}
    data.created = new Date()
    data.created = data.created.toString()

    if (formData.from) {
      data.from = new Date(formData.from)
      data.from = data.from.toDateString()
      data.from = `${data.from.split(' ')[1]} ${data.from.split(' ')[2]}, ${
        data.from.split(' ')[3]
      }`
    }
    if (formData.to) {
      data.to = new Date(formData.to)
      data.to = data.to.toDateString()
      data.to = `${data.to.split(' ')[1]} ${data.to.split(' ')[2]}, ${
        data.to.split(' ')[3]
      }`
    }
    data.site_name = formData.site_name
    data.reporter = formData.reporter
    data.ratings_by_level = {
      good: {
        label: formData.goodLabel,
        co2: formData.goodCO2,
        pm: formData.goodPM,
        voc: formData.goodVOC
      },
      moderate: {
        label: formData.modLabel,
        co2: formData.modCO2,
        pm: formData.modPM,
        voc: formData.modVOC
      },
      high: {
        label: formData.highLabel,
        co2: formData.highCO2,
        pm: formData.highPM,
        voc: formData.highVOC
      }
    }
    console.log(data)

    pdfGenerator(data)
  }
  return (
    <div className="App">
      <InputForm handleSubmit={handleSubmit} />
    </div>
  )
}

export default App
