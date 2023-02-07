import React from 'react';
import { FlatList } from 'react-native';

import FavoritedJobsCard from '../../components/FavoritedJobsCard';

import { useDispatch, useSelector } from 'react-redux';

const FavoritedJobs = () => {

    const data = useSelector(selector => selector.JobsDetailId)

    const dispatch = useDispatch();

    const renderFavorites = ({ item }) => <FavoritedJobsCard mydata={item} onSelect={() => { dispatch({ type: 'DELETE_FAVORİTED', payload: { item } }) }} />

    return (
        <FlatList keyExtractor={(item) => item.id} data={data} renderItem={renderFavorites} />
    );
}

export default FavoritedJobs;