const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = async function (event, context, callback) {
  const items = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('items'))),
      q.Lambda(x => q.Get(x))
    )
  )

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(items),
  })
}
