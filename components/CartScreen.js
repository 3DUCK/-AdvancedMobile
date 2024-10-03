import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const CartScreen = ({ cartItems, navigation, clearCart }) => {
  return (
    <SafeAreaView style={styles.cartContainer}>
      <Text style={styles.cartTitle}>장바구니</Text>
      <ScrollView>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCart}>장바구니가 비어 있습니다.</Text>
        ) : (
          cartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={{ uri : item.image }} style={styles.cartImage} />
              <View style={styles.cartDetails}>
                <Text>{item.name}</Text>
                <Text>온도: {item.temperature}</Text>
                <Text>사이즈: {item.size}</Text>
                <Text>샷 추가: {item.extraShot ? '예' : '아니요'}</Text>
                <Text>시럽 추가: {item.syrup ? '예' : '아니요'}</Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
      <TouchableOpacity 
        style={styles.orderButton} 
        onPress={() => {
          alert('주문이 완료되었습니다!');
          clearCart();
          navigation.goBack();
        }}
      >
        <Text style={styles.orderButtonText}>주문하기</Text>
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
      height: 150,
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

export default CartScreen;
