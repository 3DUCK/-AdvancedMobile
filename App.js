import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MenuTab from './components/MenuTab';
import DetailScreen from './components/DetailScreen';
import CartScreen from './components/CartScreen';
import { StyleSheet } from 'react-native';


// 탭 및 스택 내비게이션 생성
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// 앱 컴포넌트
export default function App() {
  const [cartItems, setCartItems] = useState([]); // 장바구니 상태 추가

  // 장바구니에 항목 추가
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // 장바구니 비우기
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: true, title: "카페 키오스크" }}>
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="음료">
                {(props) => (
                  <MenuTab {...props} category="음료" addToCart={addToCart} />
                )}
              </Tab.Screen>
              <Tab.Screen name="디저트">
                {(props) => (
                  <MenuTab {...props} category="디저트" addToCart={addToCart} />
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Detail" options={{ title: '상세보기' }}>
          {(props) => (
            <DetailScreen {...props} addToCart={addToCart} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => (
            <CartScreen {...props} cartItems={cartItems} clearCart={clearCart} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}





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
