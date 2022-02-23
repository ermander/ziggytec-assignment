export default function compileMonitoringPeriodAndCompiledOn(
  images,
  monitoringPeriod,
  compiledOn
) {
  const monitoringPeriodAndCompiledOn = {
    margin: [20, -60, 20, -20],
    alignment: 'justify',
    columns: [
      {
        image: images.icon_loc,
        width: 20
      },
      {
        table: {
          body: [
            [
              {
                text: 'LOCATION',
                border: [false, false, false, false]
              }
            ],
            [
              {
                text: monitoringPeriod,
                bold: true,
                border: [false, false, false, false]
              }
            ]
          ]
        }
      },
      {
        image: images.icon_by,
        width: 20
      },
      {
        table: {
          body: [
            [{ text: 'COMPILED BY', border: [false, false, false, false] }],
            [
              {
                text: compiledOn,
                bold: true,
                border: [false, false, false, false]
              }
            ]
          ]
        }
      }
    ]
  }

  return monitoringPeriodAndCompiledOn
}
