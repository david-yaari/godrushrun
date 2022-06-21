import firebase from 'firebase/compat';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';

import {NFTCard, HomeHeader, FocusedStatusBar, RectButton} from '../components';
import {COLORS, NFTData, SIZES} from '../constants';

const Home = () => {
  const [nftData, setNftData] = useState<any>(null);

  const handleSearch = value => {
    if (value.length === 0) {
      //setNftData(NFTData);
    }

    const filteredData = NFTData.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
  };

  const post = async () => {
    try {
      for (var _i = 0; _i < 8; _i++){
      await firebase.firestore().collection('NFTData').add(NFTData[_i]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNFTData = async () => {
    const nftData = await firebase.firestore().collection('NFTData').get();
    setNftData([...nftData.docs]);
  };

  useEffect(() => {
    fetchNFTData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View>
        <RectButton
          title="Sign Out"
          buttonStyle={{borderRadius: SIZES.small}}
          labelStyle={{fontSize: SIZES.font}}
          onPress={signOut}
        />
        <RectButton
          title="Load Data"
          buttonStyle={{borderRadius: SIZES.small}}
          labelStyle={{fontSize: SIZES.font}}
          onPress={post}
        />
      </View>
      <View style={{flex: 1}}>
        <View style={{zIndex: 0}}>
          <FlatList
            data={nftData}
            renderItem={({item}) => <NFTCard data={item.data()} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
