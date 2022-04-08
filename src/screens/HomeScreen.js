import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { global } from '../styles/global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/TaskActions';

function HomeScreen({ name, add, tasks, navigation }) {
  const [title, setTitle] = useState();
  return (
    <View style={global.container}>
      <TextInput
          placeholder = "Add a new task"
          style={global.input}
          value={ title }
          onChangeText={ text => setTitle(text) }
        />
      <TouchableOpacity
        style={!title? global.buttonDisabled : global.button}
        disabled={!title? true : false}
        onPress={() => {
          add(title, false, Math.floor(Math.random() * 99999));
          setTitle("");
        }}>
          <Text style={[global.buttonText]}>
              Add Task
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[global.button, styles.profileButton]}
        onPress={() => navigation.navigate("Profile") }>
          <Text style={[global.buttonText]}>
              my profile
          </Text>
      </TouchableOpacity>
      <Text>To Do List for {name}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
        <TouchableOpacity
        style={global.item}>
        <Text>{item.task}:{item.done.toString()}</Text>
        </TouchableOpacity>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    marginBottom: 20
  }
});

const mapStateToProps = (state) => {
  const { name, surname } = state.identityReducer;
  const tasks = state.taskReducer;
  return { name, tasks }
};

const mapDispatchToProps = dispatch => {
  return {
    add: bindActionCreators(addTask, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
