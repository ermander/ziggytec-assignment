// Function to compile dinamycly the pdc
// All section are separated to improve manteinability
import compileLocationAndCompiledByDetails from './pdfComponents/locationAndCompiledByDetails'
import compileTitle from './pdfComponents/title'
import compileDivider from './pdfComponents/divider'
import compileSubTitle from './pdfComponents/subTitle'
import compileMonitoringPeriodAndCompiledOn from './pdfComponents/monitoringPeriodAndCompiledOn'
import graphTitle from './pdfComponents/graphTitle'
import compileGraph from './pdfComponents/graph'
import images from '../../images'
import { months } from '../../assets/months'

import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

export default function pdfGenerator(props) {
  const title = compileTitle('Air Quality Report')
  const divider = compileDivider(50)
  const subTitle = compileSubTitle(
    `${months[props.created.split(' ')[1]]} ${props.created.split(' ')[3]}`
  )
  const locationAndCompiledByDetails = compileLocationAndCompiledByDetails(
    images,
    `${props.from} - ${props.to || ''}`,
    `${props.created.split(' ')[4].split(':')[0]}:${
      props.created.split(' ')[4].split(':')[1]
    } ${props.created.split(' ')[1]} ${props.created.split(' ')[2]}, ${
      props.created.split(' ')[3]
    }`
  )
  const monitoringPeriodAndCompiledOn = compileMonitoringPeriodAndCompiledOn(
    images,
    props.site_name,
    props.reporter
  )

  const graph = compileGraph(props)

  const docDefinitions = {
    pageSize: 'A4',
    content: [
      title,
      divider,
      subTitle,
      locationAndCompiledByDetails,
      monitoringPeriodAndCompiledOn,
      graphTitle,
      graph
    ]
  }

  pdfMake.createPdf(docDefinitions).download()
}
