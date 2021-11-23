import React from "react";
import { View, Text } from "react-native";

export default function testinghooks() {
  const [isListEnd, setIsListEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getData(), []);

  const getData = () => {
    const url = `https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$key"&limitToFirst=${offset}`;
    // console.log(offset);
    if (!loading && !isListEnd) {
      //   console.log("getData");
      setLoading(true);
      // Service to get the data from the server to render
      fetch("https://aboutreact.herokuapp.com/getpost.php?offset=" + offset)
        // Sending the currect offset with get request
        .then((response) => response.json())
        .then((responseJson) => {
          // Successful response from the API Call
          //   console.log(responseJson);
          if (responseJson.results.length > 0) {
            setOffset(offset + 1);
            // After the response increasing the offset
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);
          } else {
            setIsListEnd(true);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return;
}
