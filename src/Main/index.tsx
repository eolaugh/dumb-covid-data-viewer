import axios from 'axios'
import { useEffect, useState } from 'react'
import { DataList } from '../DataList'
import { Table } from '../Table'



export const Main = () => {
    const [covidData, setCovidData] = useState()
    const [countries, setCountries] = useState([])
    const [activeCountry, setActiveCountry] = useState('USA')

    const handleChange = (e: any) => {
        setActiveCountry(e.target.value)
        
    }

    useEffect(() => {   
        fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
        .then(response =>
             response.json()
            )
        .then(json => {
            const countries = Object.keys(json)
            const dataArr: any = []
            countries.forEach(country => {
                let countryEntry = json[country]
                countryEntry.tla = country
                if(country.length === 3){
                dataArr.push(json[country])
                }
            })
            console.log(dataArr)
            setCountries(dataArr)
            setActiveCountry(dataArr[0].tla)
            console.log(dataArr)
            setCovidData(json)
            
        })

    }, [])


    const columns = [
        {columnHeader: "Date", columnKey: "date"},
{columnHeader: "New Cases", columnKey: "new_cases"},
{columnHeader: "New Cases (per Million)", columnKey: "new_cases_per_million"},
{columnHeader: "New Deaths", columnKey: "new_deaths"},
{columnHeader: "New Deaths (per Million)", columnKey: "new_deaths_per_million"},
{columnHeader: "Stringency Index", columnKey: "stringency_index"}
    ]


    const countryDropdown = () => {
        if(!countries===undefined){
            console.log('dropdonw')
        return(
    <select name="countries" id="countries" onChange={handleChange}>
        {countries.map(country => 
      <option value={(country as any).tla}>{(country as any).location}</option>
      )}
    </select>
        )
        }
    }

    if (!covidData){
        return(
        <div>
            <p>Loading...</p>
            
        </div>
        )
    }

 else {
    return (
        <div>
            <p>COVID Data</p>
            <p>Data graciously provided by: <a href="https://github.com/owid/covid-19-data/tree/master/public/data/">https://github.com/owid/covid-19-data/tree/master/public/data/</a></p>
            <p>(To sort the table, click on the bolded column header)</p>
           <select name="countries" id="countries" onChange={handleChange}>
        {countries.map(country => 
      <option value={(country as any).tla}>{(country as any).location}</option>
      )}
    </select>
            <Table columns={columns} data={covidData} country={activeCountry}/> 
        </div>
    )

}
}

