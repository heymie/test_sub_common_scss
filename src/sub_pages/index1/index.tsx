import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import TestComp from '../sub_comp/sub_comp'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>sub_index1</Text>
        <TestComp/>
      </View>
    )
  }
}
