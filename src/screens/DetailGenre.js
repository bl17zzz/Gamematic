import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
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
      data={data}
      contentContainerStyle={styles.mainContainer}

      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity>
            <View> name={item.name} </View>
          </TouchableOpacity>
        )
      }}
    </View>
  )
}

export default DetailGenreScreen

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'gray',
    flex: 1,
  },
})