import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>{/* scrollview-container that allows you to scroll */}
      {/* need a NAV here */}
      <Text style={styles.header1}>Courses</Text>

      {/* start tilesContainer */}
      <View style={styles.tilesContainer}>
        
        {/* tile nr.1 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/macbook-code.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 1</Text>
            <Text style={styles.tileText}>(YP0584 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.2 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/sensors.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 2</Text>
            <Text style={styles.tileText}>(YP0859 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.3 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/phone-desk.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 3</Text>
            <Text style={styles.tileText}>(YP0833 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.4 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/php.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Development 4</Text>
            <Text style={styles.tileText}>(YP0860 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.5 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/idea.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab             1</Text>
            <Text style={styles.tileText}>(YP0584 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.6 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/ideas.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab             2</Text>
            <Text style={styles.tileText}>(YP0587 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.7 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/macbook-code.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Lab             3</Text>
            <Text style={styles.tileText}>(YP0595 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.8 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/sketch.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Creatie      1</Text>
            <Text style={styles.tileText}>(YP0563 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.9 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/graduate.jpg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Creatie      2</Text>
            <Text style={styles.tileText}>(YP0863 | 2023)</Text>
          </View>
        </View>

        {/* tile nr.10 */}
        <View styles={styles.tile}>
          <Image style={styles.tileImage} source={require('./assets/courseImages/library.jpeg')}/>
          <View style={styles.tileDetail}>
            <Text style={styles.tileHeader}>Creatie      3</Text>
            <Text style={styles.tileText}>(YP0833 | 2023)</Text>
          </View>
        </View>

        <StatusBar style="auto" />

        {/* end tilesContainer */} 
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    margin: 12,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'space-evenly',

  },
  tile: {
    flexBasis: '46%',//200
    borderRadius: 5,
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',

  },
  tileImage: {
    width: '100%',
    maxHeight: 110,
    overflow: 'hidden',
  },
  tileDetail: {
    padding: 10,
  },
  tileHeader: {
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    fontSize: 16,
    fontWeight: '500',
  }
});
