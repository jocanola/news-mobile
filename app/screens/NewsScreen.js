import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import {
 
  FlatList
} from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { NewsCard } from "../components/features/news/NewsCard";
import useNews from "../components/customhooks/useNewsHook";
import * as SQLite from "expo-sqlite";
import { LoadView,SaveArea,SearchContainer,NewsListContainer } from "../components/features/news/NewsScreen.style";



export default function NewsScreen({navigation}) {
  const [posts,loading, fetchMoreData] = useNews();
  const [searchIput, setSearchInput]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //filter news
const filteredPosts = posts.filter((post)=> post?.title?.toLowerCase().includes(searchIput.toLowerCase()))
  const renderItem = useCallback(({ item }) => (
    <NewsCard item={item} navigation={navigation} />
  ));
//Open sqlite database 
const db = SQLite.openDatabase("db.testDb");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Email, Password FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            console.log(results);
            if (len > 0) {
              var userEmail = results.rows.item(0).Email;
              var Password = results.rows.item(0).Password;
              setPassword(userEmail);
              setEmail(Password);
              console.log(results);
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SaveArea>
      <SearchContainer>
        <Searchbar placeholder="search" onChangeText={(e)=>setSearchInput(e)} />
      </SearchContainer>
      <NewsListContainer>
        {/* <NewsCard /> */}
        {posts.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={filteredPosts}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.7}
            onEndReached={fetchMoreData}
            ListFooterComponent={loading?
          <LoadView><ActivityIndicator/></LoadView>
           : null}
          />
        )}        
      </NewsListContainer>
      <ExpoStatusbar style="auto" />
    </SaveArea>
  );
}
