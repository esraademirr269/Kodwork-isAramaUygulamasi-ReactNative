import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Jobs.styles';
import { API_URL } from "@env";

import JobsCard from '../../components/JobsCard';
import JobsStyles from './Jobs.styles';

import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
const Jobs = ({ navigation }) => {

  const { data, loading, error } = useFetch(API_URL);

  const renderJobs = ({ item }) => <JobsCard style={styles.container} onSelect={() => handleProductSelect(item.id)} mydata={item} />

  const handleProductSelect = (id) => {
    navigation.navigate('JobsDetail', { id });
  }

  if (loading) {
    return (<Loading lodaing='0' />)
  }

  return (
    <FlatList keyExtractor={(item) => item.id} data={data.results} renderItem={renderJobs} />
  );
}
export default Jobs;