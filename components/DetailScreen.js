import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { RadioButton } from 'react-native-paper';


const DetailScreen = ({ route, navigation, addToCart }) => {
  const { item } = route.params;
  const [temperature, setTemperature] = useState('HOT');
  const [size, setSize] = useState('톨');
  const [extraShot, setExtraShot] = useState(false);
  const [syrup, setSyrup] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      name: item.name,
      image: item.image,
      temperature,
      size,
      extraShot,
      syrup,
    });
    alert('장바구니에 담았습니다!');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.detailContainer}>
      <Image source={{ uri: item.image }} style={styles.menuImage} />
      <Text style={styles.detailText}>{item.name}</Text>
      <Text style={styles.detailDescription}>{item.description}</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} keyboardShouldPersistTaps="handled">
        {/* 선택 UI */}
        <Text>온도 선택:</Text>
        <RadioButton.Group onValueChange={setTemperature} value={temperature}>
          <View style={styles.radioGroup}>
            <View style={styles.radioItem}>
              <RadioButton value="HOT" />
              <Text>HOT</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="ICE" />
              <Text>ICE</Text>
            </View>
          </View>
        </RadioButton.Group>
        {/* 사이즈 선택 */}
        <Text>사이즈 선택:</Text>
        <RadioButton.Group onValueChange={setSize} value={size}>
          <View style={styles.radioGroup}>
            <View style={styles.radioItem}>
              <RadioButton value="톨" />
              <Text>톨</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="그란데" />
              <Text>그란데</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="벤티" />
              <Text>벤티</Text>
            </View>
          </View>
        </RadioButton.Group>
        {/* 샷 추가 */}
        <Text>샷 추가:</Text>
        <RadioButton.Group onValueChange={(value) => setExtraShot(value === '추가')} value={extraShot ? '추가' : '없음'}>
          <View style={styles.radioGroup}>
            <View style={styles.radioItem}>
              <RadioButton value="없음" />
              <Text>없음</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="추가" />
              <Text>추가</Text>
            </View>
          </View>
        </RadioButton.Group>
        {/* 시럽 추가 */}
        <Text>시럽 추가:</Text>
        <RadioButton.Group onValueChange={(value) => setSyrup(value === '추가')} value={syrup ? '추가' : '없음'}>
          <View style={styles.radioGroup}>
            <View style={styles.radioItem}>
              <RadioButton value="없음" />
              <Text>없음</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="추가" />
              <Text>추가</Text>
            </View>
          </View>
        </RadioButton.Group>
      </ScrollView>
      <TouchableOpacity style={styles.orderButton} onPress={handleAddToCart}>
        <Text style={styles.orderButtonText}>장바구니에 담기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// 스타일 정의
const styles = StyleSheet.create({
    menuContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: 10,
    },
    menuItem: {
      width: '48%', // 한 행에 메뉴 두개씩 출력npm
      alignItems: 'center',
      marginBottom: 10,
    },
    menuImage: {
      width: '100%',
      height: '50%',
      borderRadius: 10,
    },
    menuText: {
      textAlign: 'center',
      marginTop: 5,
    },
    orderButton: {
      backgroundColor: '#007BFF',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      margin: 10,
    },
    orderButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    detailImage: {
      width: '100%',
      height: 300,
      borderRadius: 10,
    },
    detailText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    detailDescription: {
      fontSize: 16,
      textAlign: 'center',
    },
    picker: {
      height: 50,
      width: 150,
      marginVertical: 10,
    },
    radioGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    radioItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20, // 간격 조정
    },
    cartContainer: {
      flex: 1,
      padding: 20,
    },
    cartTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    emptyCart: {
      textAlign: 'center',
      fontSize: 16,
      marginTop: 20,
    },
    cartItem: {
      flexDirection: 'row', // 이미지와 텍스트를 나란히 배치
      alignItems: 'center', // 세로 정렬
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    cartImage: {
      width: 50, // 이미지 크기 조정
      height: 50, // 이미지 크기 조정
      borderRadius: 5,
      marginRight: 10, // 이미지와 텍스트 간격 조정
    },
    cartDetails: {
      flex: 1, // 텍스트가 남은 공간을 차지하도록 설정
    },
  });

export default DetailScreen;
