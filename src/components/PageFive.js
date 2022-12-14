import React, {useState} from 'react'
import StatTile from './StatTile'
import Select from 'react-select'

import { TiArrowUp } from 'react-icons/ti';
import { TiArrowDown } from 'react-icons/ti';
import { AiOutlineDash } from 'react-icons/ai';
import {TbBuildingFactory2} from 'react-icons/tb';
import { HiOutlineOfficeBuilding} from 'react-icons/hi';
import { FaRegHospital } from 'react-icons/fa';

function PageFive() {
    const options = [
        { value: 'value', label: 'Median House Value' },
        { value: 'income', label: 'Median Family Income' },
        { value: 'occupation', label: 'Dominant Occupation' },
        { value: 'education', label: 'Percentage Of Population with College Degree' }

      ]
      const [selectedOption, setSelectedOption] = useState(options[0]);

      const data = {
        "education": [
            {
                "year": "1950",
                "stat": "6.93%",
                "icon": AiOutlineDash
            },
            {
                "year": "1960",
                "stat": "6.23%",
                "icon": AiOutlineDash
            },
            {
                "year": "1970",
                "stat": "6.79%",
                "icon": AiOutlineDash
            },
            {
                "year": "1980",
                "stat": "20.20%",
                "icon": TiArrowUp
            },
            {
                "year": "1990",
                "stat": "35.58%",
                "icon": TiArrowUp
            },
            {
                "year": "2000",
                "stat": "33.02%",
                "icon": AiOutlineDash
            }
        ],
        "occupation": [
            {
                "year": "1950",
                "stat": "Industry Workers",
                "icon": TbBuildingFactory2
            },
            {
                "year": "1960",
                "stat": "Industry Workers",
                "icon": TbBuildingFactory2
            },
            {
                "year": "1970",
                "stat": "Industry Workers",
                "icon": TbBuildingFactory2
            },
            {
                "year": "1980",
                "stat": "Industry Workers",
                "icon": TbBuildingFactory2
            },
            {
                "year": "1990",
                "stat": "Prof- essionals",
                "icon": HiOutlineOfficeBuilding
            },
            {
                "year": "2000",
                "stat": "Social Services",
                "icon": FaRegHospital
            }
        ],
        "value": [
            {
                "year": "1960",
                "stat": "$113,797",
                "icon": AiOutlineDash
            },
            {
                "year": "1970",
                "stat": "$81,495",
                "icon": TiArrowDown
            },
            {
                "year": "1990",
                "stat": "$165,587",
                "icon": TiArrowUp
            },
            {
                "year": "2000",
                "stat": "$144,784",
                "icon": TiArrowDown
            },
            {
                "year": "2010",
                "stat": "$303,397",
                "icon": TiArrowUp
            }
        ],
        "income": [
            {
                "year": "1950",
                "stat": "$29,947",
                "icon": AiOutlineDash
            },
            {
                "year": "1960",
                "stat": "$42,673",
                "icon": TiArrowUp
            },
            {
                "year": "1970",
                "stat": "$62,941",
                "icon": TiArrowUp
            },
            {
                "year": "1980",
                "stat": "$41,645",
                "icon": TiArrowDown
            },
            {
                "year": "1990",
                "stat": "$64,307",
                "icon": TiArrowUp
            },
            {
                "year": "2000",
                "stat": "$49,685",
                "icon": TiArrowDown
            },
            {
                "year": "2010",
                "stat": "$67,333",
                "icon": TiArrowUp
            }
            ,
            {
                "year": "2020",
                "stat": "$84,370",
                "icon": TiArrowUp
            }
        ]
      }

    const dataExplanation = {
        "occupation": "We can see that over time the population of Smith Hill and Downtown has shifted from a heavy industrial workforce to a more professional workforce.",
        "education": "We can see over time the Smith Hill and Downtown population has become more educated.",
        "income": "We can see that over time the mediam family income increases for residents of Smith Hill and Downtown. These numbers have been converted to 2022 value.",
        "value": "We can see that over time the median house value increases for residents of Smith Hill and Downtown. These numbers have been converted to 2022 value."
    }

  return (
    <div className='page-wrapper' id='page5' style={{height: 'auto', minHeight: '120vh', alignItems: 'flex-start'}}>
        <div className='container'>
            <h1>Census Data</h1>
            <p>Using census data from the Smith Hill area and Downtown, we can begin to assemble the picture of how changes in Providence’s economy, along with planning decisions made in part in response to those changes, affected real people's lives. Select a category below to see how over time the city’s census demographics changed, at least partially in response to these planning policies.</p>
            <Select options={options} onChange={setSelectedOption} defaultValue={selectedOption} />
            <div className='stat-tile-wrapper'>
                {
                    data[selectedOption.value].map((item, index) => {
                        return <StatTile key={index} year={item.year} stat={item.stat} icon={<item.icon/ >} />
                    })
                }
            </div>
            <p>{dataExplanation[selectedOption.value]}</p>
            <i style={{}}>Scroll to the right to view more data points.</i>
        </div>
    </div>
  )
}

export default PageFive