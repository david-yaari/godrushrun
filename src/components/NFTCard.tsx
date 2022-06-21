import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {assets, COLORS, SHADOWS, SIZES} from '../constants';
import {CircleButton, RectButton} from './Button';
import {EthPrice, NFTTitle, SubInfo} from './SubInfo';
//import storage from '@react-native-firebase/storage';

const NFTCard = ({data}) => {
  const [url, setUrl] = useState<any>();
  const navigation = useNavigation();

  const getUrl = async () => {
    //const url = await storage().ref(data.image).getDownloadURL();
  }

  useEffect(() => {
    getUrl()
  }, []);
  //https://storage.cloud.google.com/goldrushrun2022.appspot.com/nft01.png
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}>
      <View style={{width: '100%', height: 250}}>
        <Image
          source={{uri: url}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', {data})}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
