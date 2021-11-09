import * as React from 'react'
import {graphql} from 'gatsby'
export default  function test ({data}) {
console.log(data)
const a = data.allMarkdownRemark.nodes

   return (
      <div>
      {a[2].html}
      </div>
   )
}
export const query = graphql`
query testQuery {
   allMarkdownRemark {
      nodes {
        html
        id
      }
    }
 }
`

