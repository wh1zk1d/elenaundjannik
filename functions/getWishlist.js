const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = async function (event, context, callback) {
  const items = await client.query(
    q.Paginate(q.Match(q.Index('items_with_ref')))
  )

  // Transform to array of objects
  const filteredData = items.data.filter(
    item => !item[0].includes('Bettwäsche')
  )

  const data = filteredData.map(item => {
    const obj = {
      name: item[0],
      link: item[1],
      isExample: item[2],
      checked: item[3],
      ref: item[4],
    }

    return obj
  })

  // const bedStuffLinks = items.data.filter(item => item[0].includes('Bettwäsche')).map(item => item[1])
  // const bedStuff = items.data.filter(item => item[0].includes('Bettwäsche'))[0]

  // data.push({
  //   name: bedStuff[0],
  //   link: bedStuffLinks,
  //   isExample: bedStuff[2],
  //   checked: bedStuff[3],
  //   ref: bedStuff[4],
  // })

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
  })
}
