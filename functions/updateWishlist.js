const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = async function (event, context, callback) {
  const { ref } = event.queryStringParameters

  try {
    await client.query(q.Update(q.Ref(q.Collection('items'), ref), { data: { checked: true } }))

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: 'successfully updated' }),
    })
  } catch (error) {
    callback(error)
  }
}
