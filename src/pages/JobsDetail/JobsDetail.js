import React from 'react';
import { View, Text, Dimensions, ScrollView, Alert } from 'react-native';
import styles from './JobsDetail.styles';

import JobDetailCard from '../../components/JobDetailCard';

import { API_DETAIL_URL } from '@env';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';

import { useDispatch, useSelector } from 'react-redux';

const JobsDetail = ({ route, navigation }) => {

    const storeId = useSelector(selector => selector.JobsDetailId);

    const { id } = route.params;

    const { data, loading, error } = useFetch(API_DETAIL_URL + id);

    const dispatch = useDispatch();

    const handleJobsDetailSelect = () => {

        if (storeId.find(eleman => eleman.id === id)) Alert.alert("Error", "Job has already added the favorities");
        else dispatch({ type: 'ADD_FAVORİTED', payload: { data } })

    }

    if (loading) return <Loading loading='1' />
    else return <JobDetailCard detail={data} on_click={() => { handleJobsDetailSelect() }} />;
}

export default JobsDetail;