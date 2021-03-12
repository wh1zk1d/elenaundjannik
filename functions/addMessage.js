const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = async function (event, context, callback) {
  const { name, message } = event.queryStringParameters

  if (!name || !message) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ message: 'invalid data' }),
    })
  }

  const doc = await client.query(q.Create(q.Collection('comments'), { data: { name: name, message: message } }))

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(doc),
  })
}
