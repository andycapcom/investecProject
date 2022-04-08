import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { global } from '../styles/global';
import { connect } from 'react-redux';

function ProfileScreen({ name, navigation }) {
  return (
    <View style={global.container}>
      <Text>Profile: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { name } = state.identityReducer;
  return { name }
};

export default connect(mapStateToProps) (ProfileScreen);
