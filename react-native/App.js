import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,

        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}>
      {/* 
<Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
     
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        {/* <View style={styles.fixToText}> */}
      {/* <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Right button pressed')}
          /> */}

      <Image
        style={{height: 300, width: 300, marginTop: 80}}
        source={require('./images/dog.png')}
      />
      <Text style={{...styleTest}}>Woofy Wellness Ranch</Text>

      <View
      style={{marginTop:50}}
      >
        <View
          style={{
            ...buttonStyle,
            // backgroundColor: "lightblue", margin:25,
            // color: 'white'
          }}>
          <Button title="Log In"
                    color="black" />
        </View>
        <View
          style={{
            ...buttonStyle,
            // backgroundColor: "lightblue", margin:25,
            // color: 'white'
          }}>
          <Button title="Sign Up" 
                        color="black"
          />
        </View>
        <View
          style={{
            ...buttonStyle,
            // color: 'white'
          }}>
          <Button 
          color="black"
           title="Make a Reservation" />
        </View>
      </View>
    </View>
  );
};

export default App;

const styleTest = {
  // color:"darkslateblue",
  fontSize: 40,
  color: 'black',
  backgroundColor: 'lightyellow',
//   border:"black",
//   borderRadius: 4,
//   borderWidth: 0.5,
//   borderColor: '#d6d7da',
};

const buttonStyle = {
  backgroundColor: 'aqua',
  margin: 25,
  width:200,
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: '#d6d7da',
//   border:"black"
//   color:black
//   borderColor:"black"
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: Constants.statusBarHeight,
//       marginHorizontal: 16,
//     },
//     title: {
//       textAlign: 'center',
//       marginVertical: 8,
//     },
//     fixToText: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     separator: {
//       marginVertical: 8,
//       borderBottomColor: '#737373',
//       borderBottomWidth: StyleSheet.hairlineWidth,
//     },
//   });

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
