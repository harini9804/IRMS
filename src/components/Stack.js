import React from 'react';
import { StackNavigator } from 'react-navigation';
import NavigationProps from '../../NavigationProps';
import Halls from './Halls';
import HallBook from './HallBook';
import Homescreen from './Homescreen';


export const RootStack = StackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions:{
      title:"HOME",
      headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#158c7a',
            borderBottomColor: '#ffffff',
          //  borderBottomWidth: 3,
          }
    }
  },
  HallsScreen: {
    screen: Halls,
    navigationOptions:{
      title: "Halls",
      headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#158c7a',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
          }
    }
  },
  HallsBook: {
    screen: HallBook,
     navigationOptions: ({ navigation }) => {
      const { state: { params = {} } } = navigation;
      return {
        title: params.hallId,
        headerTintColor: '#ffffff',
            headerStyle: {
              backgroundColor: '#158c7a',
              borderBottomColor: '#ffffff',
              borderBottomWidth: 3,
            }
      };
    }
  },
  initialRouteName: 'Home',
});
