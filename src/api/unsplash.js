import axios from "axios";

//  axios.create  will create an instance of the AJAX client with the following configuration

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 62fafd34ab2a37a219dcc21818e32730bd82617244c68cb1b131fa4ec5b5bf27"
  }
});
