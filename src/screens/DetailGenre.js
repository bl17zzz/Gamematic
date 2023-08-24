import { StyleSheet, Image, Text, View, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import { GameData } from '../../data/GameData'
import { useEffect, useState } from 'react'


const DetailGenreScreen = (props) => {
  const {route } = props
  const categoryId = route.params.categoryId;
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(GameData.filter(item => item.type == categoryId))
  }, [])
  return (
    <View>
      <FlatList
      data={data}
      contentContainerStyle={{padding: 10}}

      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.containerBox}>
            <View>
              <Image
                source={item.icon}
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View>

            <Text> name : {item.name} </Text>
            <Text> Genre : {item.genre} </Text>
            </View>

          </TouchableOpacity>
        )
      }}

      />
    </View>
  )
}

export default DetailGenreScreen

const styles = StyleSheet.create({
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    shadowColor: 'grey',
  }
})