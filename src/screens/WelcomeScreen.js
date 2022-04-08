import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { global } from '../styles/global';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addName, addSurname } from '../actions/IdentityActions';

function WelcomeScreen({ name, add, navigation }) {
  const [thename, setName] = useState();
  return (
    <View style={global.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TextInput
          placeholder = "Enter your name"
          style={global.input}
          value={ thename }
          onChangeText={ text => setName(text) }
        />
        <TouchableOpacity
          style={!thename? global.buttonDisabled : global.button}
          disabled={!thename? true : false}
          onPress={() => {
            add(thename);
            navigation.navigate('Home');
          }}>
            <Text style={[global.buttonText]}>
                Continue
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
  const { name, surname } = state.identityReducer;
  return { name, surname }
};

const mapDispatchToProps = dispatch => {
  return {
    add: bindActionCreators(addName, dispatch),
    addSurname: bindActionCreators(addSurname, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
