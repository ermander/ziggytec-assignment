export default function compileLocationAndCompiledByDetails(
  images,
  location,
  compiledBy
) {
  const locationAndCompiledByDetails = {
    margin: [20, 0, 20, -20],
    alignment: 'justify',
    columns: [
      {
        image: images.icon_cal,
        width: 20
      },
      {
        table: {
          body: [
            [
              {
                text: 'MONITORING PERIOD',
                border: [false, false, false, false]
              }
            ],
            [
              {
                text: location,
                bold: true,
                border: [false, false, false, false]
              }
            ]
          ]
        }
      },
      {
        image: images.icon_on,
        width: 20
      },
      {
        table: {
          body: [
            [{ text: 'COMPILED ON', border: [false, false, false, false] }],
            [
              {
                text: compiledBy,
                bold: true,
                border: [false, false, false, false]
              }
            ]
          ]
        }
      }
    ]
  }

  return locationAndCompiledByDetails
}
