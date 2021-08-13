import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID GNzfuU8JdXfqv1oWUNRaQfk0uWnvqIxoJFQ5K9m2pwg",
  },
  baseURL: "https://api.unsplash.com",
});
