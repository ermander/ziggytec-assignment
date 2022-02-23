import images from '../../../images'

export default function compileGraph(props) {
  const graph = {
    margin: [0, -50],
    columns: [
      {
        width: 220,
        image: images.donut
      },
      {
        margin: [0, 23, 0, 0],
        table: {
          body: [
            [
              {
                text: `${props.ratings_by_level.good.label} (${
                  props.ratings_by_level.good.co2
                    ? props.ratings_by_level.good.co2 + ' CO2,'
                    : 'sss'
                }${
                  props.ratings_by_level.good.pm
                    ? props.ratings_by_level.good.pm + ' PM,'
                    : ''
                }${
                  props.ratings_by_level.good.voc
                    ? props.ratings_by_level.good.voc + ' VOC'
                    : ''
                })`,
                color: '#3ca340',
                fontSize: 22,
                bold: true,
                border: [false, false, false, false]
              }
            ],
            [
              {
                text: `${props.ratings_by_level.moderate.label} (${
                  props.ratings_by_level.moderate.co2
                    ? props.ratings_by_level.moderate.co2 + ' CO2,'
                    : 'sss'
                }${
                  props.ratings_by_level.moderate.pm
                    ? props.ratings_by_level.moderate.pm + ' PM,'
                    : ''
                }${
                  props.ratings_by_level.moderate.voc
                    ? props.ratings_by_level.moderate.voc + ' VOC'
                    : ''
                })`,
                color: '#ffc000',
                fontSize: 22,
                bold: true,
                border: [false, false, false, false]
              }
            ],
            [
              {
                text: `${props.ratings_by_level.high.label} (${
                  props.ratings_by_level.high.co2
                    ? props.ratings_by_level.high.co2 + ' CO2,'
                    : 'sss'
                }${
                  props.ratings_by_level.high.pm
                    ? props.ratings_by_level.high.pm + ' PM,'
                    : ''
                }${
                  props.ratings_by_level.high.voc
                    ? props.ratings_by_level.high.voc + ' VOC'
                    : ''
                })`,
                color: '#ff0000',
                fontSize: 22,
                bold: true,
                border: [false, false, false, false]
              }
            ]
          ]
        }
      }
    ]
  }

  return graph
}
