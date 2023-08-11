import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import axios from 'axios';

const PostListScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleRefresh = () => {
    fetchPosts();
  };

  const renderItem = ({item}) => (
    <View style={styles.postItem}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('PostDetails', {post: item})}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Refresh" onPress={handleRefresh} />
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  postTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PostListScreen;
