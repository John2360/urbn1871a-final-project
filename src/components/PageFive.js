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
        { value: 'income', label: 'Family Income' },
        { value: 'value', label: 'House Value' },
        { value: 'occupation', label: 'Dominant Occupation' },
        { value: 'education', label: 'Percentage Of Population with College Degree' }

      ]
      const [selectedOption, setSelectedOption] = useState(options[2]);

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
        ]
      }

    const dataExplanation = {
        "occupation": "We can see that over time the population of Smith Hill and Downtown has shifted from a heavy industrial workforce to a more professional workforce.",
        "education": "We can see over time that the Smith Hill and Downtown population has become more educated."
    }

  return (
    <div className='page-wrapper' id='page5' style={{height: 'auto', minHeight: '100vh', alignItems: 'flex-start'}}>
        <div className='container'>
            <h1>Census Data</h1>
            <p>Using cenus data from the Smith Hill area and Downtown we can begin to assemble the picture of how these city planning decisions affected real people's lifes. Select a category below to see how over time frame of the policies census demographics changed.</p>
            <Select options={options} onChange={setSelectedOption} defaultValue={selectedOption} />
            <div className='stat-tile-wrapper'>
                {
                    data[selectedOption.value].map((item, index) => {
                        return <StatTile key={index} year={item.year} stat={item.stat} icon={<item.icon/ >} />
                    })
                }
            </div>
            <p>Scroll to see the data points above. {dataExplanation[selectedOption.value]}</p>
        </div>
    </div>
  )
}

export default PageFive