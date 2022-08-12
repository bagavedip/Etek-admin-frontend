// import './table.css'

const Table = ({ data, column }) => {
  return (
    <div className="tablecontainer">
        <table className="table">
        <thead className="table-head">
            <tr className="table-row">
            {
              column.map((item, index) => <TableHeadItem item={item} />)}
            </tr>
        </thead>
        <tbody className="table-body">
            {data.map((item, index) => <TableRow item={item} column={column} />)}

        </tbody>
        </table>
    </div>
  )
}

const TableHeadItem = ({ item }) => <th>{item.title}</th>
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

      if(columnItem.title.includes('.')) {
        const itemSplit = columnItem.title.split('.') //['address', 'city']
        return <th>{item[itemSplit[0]][itemSplit[1]]}</th>
      }

      return <th>{item[`${columnItem.title}`]}</th>
    })}
  </tr>
)

export default Table