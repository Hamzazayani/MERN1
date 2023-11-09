import React from 'react'
import "./userlist.css"

function Userlist() {
  return (
<div>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stunning Table</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Email Addresses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>123 Main St, City</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>456 Elm St, Town</td>
        <td>jane@example.com</td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Userlist