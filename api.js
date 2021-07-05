const axios = require('axios').default;

/* axios.get('https://fable-api.elk-tree.site/api/organizations')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
*/

async function fetchData(argument) {
  const res = await axios.get('https://fable-api.elk-tree.site/api/organizations');
  console.log(res.data.data);
}

fetchData();
