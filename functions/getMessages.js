const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = async function (event, context, callback) {
  const messages = await client.query(q.Paginate(q.Match(q.Index('all_comments'))))

  const data = messages.data
    .map(message => {
      const obj = {
        name: message[1],
        message: message[2],
      }

      return obj
    })
    .reverse()

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
  })
}
