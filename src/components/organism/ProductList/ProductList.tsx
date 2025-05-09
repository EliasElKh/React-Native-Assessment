import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { ProductCard } from '../../molecule/ProductCard/ProductCard';
import {ProductListProps} from './ProductList.types';

export const ProductList: React.FC<ProductListProps> = ({ data }: { data: any[] }) => {
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [loadingMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadInitialData = useCallback(() => {
    setDisplayData(data.slice(0, itemsPerPage));
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const loadMoreData = () => {
    if (loadingMore) {return;}
    setLoadingMore(true);
    const nextPage = currentPage + 1;
    const start = (nextPage - 1) * itemsPerPage;
    const newData = data.slice(start, start + itemsPerPage);
    if (newData.length > 0) {
      setDisplayData(prev => [...prev, ...newData]);
      setCurrentPage(nextPage);
    }
    setLoadingMore(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    loadInitialData();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={displayData}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <ProductCard item={item} />}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ListFooterComponent={
        loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null
      }
    />
  );
};
