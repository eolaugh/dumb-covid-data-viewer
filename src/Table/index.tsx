import { useTable, Column, useSortBy, usePagination } from 'react-table'
import { useMemo } from 'react'

export const Table = (props: { columns: any, data: any, country: string}) => {

    const { columns, data, country} = props

    console.log(country)
    console.log(data)

    const countryData = data[country]


    const tableColumns = columns.map((column: any) => {
        return {
          Header: column.columnHeader,
          accessor: column.columnKey,
          id: column.columnKey,
        } as Column
      })

      const location = countryData.location

    
      const memoColumns = useMemo(
        () => [{ Header: location, columns: tableColumns }],
        [],
      )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable({
        columns: memoColumns as any,
        data: countryData.data,
        initialState: { pageSize: 10 },
      },
      useSortBy,
      usePagination
    )

    return (
        <div>
        <div>
    <h1>{countryData.location}</h1>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.filter((header) => header.headers.length > 1 ).map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps((column as any).getSortByToggleProps)}>{column.render('Header')} {(column as any).isSorted ? (
                    (column as any).isSortedDesc ? (
                        <span>desc</span>
                    ) : (
                        <span>asc</span>
                    )
                  ) : (
                    ''
                  )}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        </div>
        
      )
}