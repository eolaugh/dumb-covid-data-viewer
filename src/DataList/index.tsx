

export const DataList = (props: {covidData: any}) => {

    const { covidData } = props

    const countries = covidData.map((country: any) =>
    <div key={country.tla}>
        <p>Country: {(country as any).location}</p>
        <p>Population: {(country as any).population}</p>
    </div>
  );

    return(
        <div>
            {countries}
        </div>

    )



}